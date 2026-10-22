"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const personalEmailDomains = new Set(["gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com", "aol.com", "proton.me", "protonmail.com"]);
const countryCodes = [
  ["US", "+1"], ["CA", "+1"], ["ID", "+62"], ["PH", "+63"], ["GB", "+44"],
  ["AU", "+61"], ["NZ", "+64"], ["SG", "+65"], ["IN", "+91"], ["AE", "+971"],
  ["MX", "+52"], ["BR", "+55"], ["ZA", "+27"], ["DE", "+49"], ["FR", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    if (personalEmailDomains.has(email.split("@").pop() || "")) {
      setError("Please use your business email address.");
      return;
    }
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email, businessEmail: email, phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Scope outsourced call center coverage around your real queues</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm" data-acr-handled="1">
        <input className="sa-hp" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="sa-grid">
          <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        </div>
        <label>Business Email *<input name="email" type="email" required autoComplete="email" /><small>Please use a business email. Personal email addresses are not accepted.</small></label>
        <label>Phone Number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([country, code], i) => <option value={code} key={`${country}-${code}-${i}`}>{country} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <div className="sa-grid">
          <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
          <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}
        <label>Message *<textarea name="message" rows={4} required /></label>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{box-sizing:border-box;width:100%;max-width:620px;margin:0 auto;background:#fff;border:1px solid #e3e8ef;border-radius:18px;padding:20px 25px 22px;box-shadow:0 18px 48px rgba(15,34,58,.14);color:#34415a;text-align:left}
        h2{margin:0 0 12px;color:#111827;font-size:21px;line-height:1.2;font-weight:800;letter-spacing:-.02em;max-width:560px}
        form{display:flex;flex-direction:column;gap:8px}.sa-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        label{display:flex;flex-direction:column;gap:3px;font-size:12px;line-height:1.25;font-weight:700;color:#34415a}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #cfd7e3;border-radius:8px;background:#fff;color:#1f2937;font:inherit;font-size:13px;padding:7px 10px;outline:none;min-height:38px}
        input:focus,select:focus,textarea:focus{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        small{margin:0;color:#6b778c;font-size:10px;font-weight:400;line-height:1.2}.sa-phone{display:grid;grid-template-columns:112px 1fr;border:1px solid #cfd7e3;border-radius:8px;overflow:hidden}.sa-phone:focus-within{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:5px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:54px;height:54px}button{width:100%;border:0;border-radius:9px;background:linear-gradient(100deg,#05acec,#79cdf1);color:#fff;padding:11px 18px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 7px 16px rgba(0,173,244,.22)}
        button:hover{filter:brightness(.98)}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#b42318;font-size:12px}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:700px){.sa-form-card{padding:22px 17px 24px;border-radius:16px}h2{font-size:20px}.sa-grid{grid-template-columns:1fr;gap:8px}.sa-phone{grid-template-columns:108px 1fr}button{font-size:15px}}
      `}</style>
    </div>
  );
}
