import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { researchPosts, researchPostsPerPage } from '../app/fleet-data.ts'
import { researchPageCount, researchPagePath, validResearchArchivePage } from '../app/research/research-pagination.ts'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

test('research archive uses 24 records and canonical page paths', () => {
  assert.equal(researchPostsPerPage, 24)
  const pages = researchPageCount(researchPosts.length, researchPostsPerPage)
  assert.equal(pages, Math.ceil(researchPosts.length / 24))
  assert.equal(researchPagePath(1), '/research')
  assert.equal(researchPagePath(2), '/research/page/2')
  assert.equal(researchPosts.slice(0, researchPostsPerPage).length, 24)
  assert.ok(researchPosts.slice((pages - 1) * researchPostsPerPage).length <= 24)
})

test('dynamic research pages accept only archive pages in range', () => {
  const pages = researchPageCount(researchPosts.length, researchPostsPerPage)
  assert.equal(validResearchArchivePage('2', pages), 2)
  assert.equal(validResearchArchivePage(String(pages), pages), pages)
  for (const value of ['1', '0', '-1', '2.0', '02', 'not-a-page', String(pages + 1)]) {
    assert.equal(validResearchArchivePage(value, pages), null, value)
  }
})

test('research route statically generates pages and rejects invalid params', () => {
  const route = read('app/research/page/[page]/page.tsx')
  assert.match(route, /export function generateStaticParams\(\)/)
  assert.match(route, /validResearchArchivePage/)
  assert.match(route, /if \(currentPage === null\) notFound\(\)/)
  assert.match(route, /alternates: \{ canonical \}/)
  assert.match(route, /Page \$\{currentPage\}/)
})

test('shared research index renders accessible previous, numbered, and next links', () => {
  const index = read('app/research/ResearchIndex.tsx')
  assert.match(index, /slice\(offset, offset \+ researchPostsPerPage\)/)
  assert.match(index, /aria-label="Research pages"/)
  assert.match(index, /aria-current=/)
  assert.match(index, /rel="prev">Previous</)
  assert.match(index, /rel="next">Next</)
  assert.doesNotMatch(read('app/research/page.tsx'), /researchPosts\.map/)
})

test('sitemap includes research archive pages after canonical page one', () => {
  const sitemap = read('app/sitemap.ts')
  assert.match(sitemap, /researchPageCount - 1/)
  assert.match(sitemap, /research\/page\/\$\{index \+ 2\}/)
  assert.doesNotMatch(sitemap, /`\$\{base\}\/research\/page\/1`/)
})