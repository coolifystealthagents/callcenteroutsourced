#!/usr/bin/env python3
"""Render the October 12 exact-title Blog and Research thumbnails."""
from __future__ import annotations

import hashlib
import json
import re
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "oct12"
FONT_PATHS = (
    Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
    Path("/System/Library/Fonts/Supplemental/Helvetica.ttc"),
    Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
)


def font(size: int):
    for path in FONT_PATHS:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    raise FileNotFoundError("No supported thumbnail font is available")


def records() -> list[dict]:
    result = []
    for section, source, size in (
        ("Blog", ROOT / "app" / "blog-oct12.ts", (1024, 1024)),
        ("Research", ROOT / "app" / "research-oct12.ts", (1536, 1024)),
    ):
        raw = source.read_text(encoding="utf-8")
        pairs = re.findall(r"\{slug:'([^']+)',title:'([^']+)'", raw)
        for slug, title in pairs:
            result.append({"section": section, "slug": slug, "title": title, "size": size, "source": str(source.relative_to(ROOT))})
    return result


def title_lines(draw: ImageDraw.ImageDraw, title: str, width: int, max_lines: int):
    for size in range(68 if width == 1024 else 78, 35, -2):
        chosen = font(size)
        line_width = int(width * .67)
        approx = max(14, int(line_width / (size * .56)))
        lines = textwrap.wrap(title, width=approx, break_long_words=False)
        if len(lines) <= max_lines and all(draw.textbbox((0, 0), line, font=chosen)[2] <= line_width for line in lines):
            return lines, chosen
    raise ValueError(f"Title does not fit: {title}")


def render(item: dict, ordinal: int) -> str:
    width, height = item["size"]
    digest = hashlib.sha256(f'{item["section"]}/{item["slug"]}'.encode()).digest()
    palettes = ((8, 33, 61), (16, 53, 69), (36, 31, 78), (50, 34, 20), (45, 25, 55), (19, 58, 45))
    base = palettes[digest[0] % len(palettes)]
    accent = (65 + digest[1] % 145, 105 + digest[2] % 130, 120 + digest[3] % 120)
    image = Image.new("RGB", (width, height), base)
    draw = ImageDraw.Draw(image, "RGBA")
    for i in range(9):
        radius = 35 + digest[(i + 4) % 32] % 105
        x = int(width * .70) + (digest[(i + 12) % 32] * 7 + i * 73) % int(width * .34)
        y = 20 + i * int(height / 8)
        draw.ellipse((x-radius, y-radius, x+radius, y+radius), fill=accent + (30 + i * 3,))
    for i in range(6):
        x = int(width * .72) + i * int(width * .06)
        draw.line((x, 0, x-int(width * .18), height), fill=(255, 255, 255, 22), width=12+i*3)
    margin = int(width * .055)
    draw.rounded_rectangle((margin, margin, width-margin, height-margin), 28, outline=(255, 255, 255, 58), width=2)
    draw.text((margin+22, margin+24), "CALL CENTER OUTSOURCED", font=font(24 if width == 1024 else 28), fill="white")
    label = f'{item["section"].upper()}  /  CUSTOMER CONTACT OPERATIONS'
    draw.rounded_rectangle((margin+22, 145, min(int(width*.66), margin+42+len(label)*13), 191), 22, fill=(255, 255, 255, 28))
    draw.text((margin+42, 155), label, font=font(17 if width == 1024 else 20), fill=(214, 245, 255))
    lines, chosen = title_lines(draw, item["title"], width, 5)
    y = 250
    for line in lines:
        draw.text((margin+24, y), line, font=chosen, fill="white")
        y += chosen.size + 14
    draw.text((width-margin-95, height-margin-42), f"{ordinal:02d} / 17", font=font(16), fill=(255, 255, 255, 165))
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f'{item["slug"]}.png'
    image.save(path, "PNG", optimize=True)
    return str(path.relative_to(ROOT))


def main() -> None:
    items = records()
    if len(items) != 17:
        raise SystemExit(f"Expected 17 records, found {len(items)}")
    for ordinal, item in enumerate(items, 1):
        item["thumbnailPath"] = render(item, ordinal)
        item["publicationDate"] = "2026-10-12"
        item["route"] = f'/{item["section"].lower()}/{item["slug"]}'
        item["thumbnailTitle"] = item["title"]
        item.pop("size")
    manifest = {
        "site": "CallCenterOutsourced.com",
        "repository": "coolifystealthagents/callcenteroutsourced",
        "branch": "main",
        "publicationDate": "2026-10-12",
        "blogCount": 12,
        "researchCount": 5,
        "articleCount": 17,
        "registryPaths": ["app/data.ts", "app/fleet-data.ts"],
        "routePaths": ["app/blog/[slug]/page.tsx", "app/research/[slug]/page.tsx"],
        "indexPaths": ["app/blog/page.tsx", "app/research/page.tsx"],
        "articles": items,
    }
    target = ROOT / "publishing" / "2026-10-12"
    target.mkdir(parents=True, exist_ok=True)
    (target / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print("Generated 12 Blog and 5 Research exact-title thumbnails.")


if __name__ == "__main__":
    main()
