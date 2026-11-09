// Worship With Me site config. Plain values only; loaded before app.js.
//
// WHAT CHURCH X CREATES IN STRIPE (no API keys needed, nothing secret here):
//   Stripe Dashboard -> Payment Links -> + New, three times:
//   1. Donation: product "Support Worship With Me", pricing
//      "Customers choose what to pay". Paste into donateStripeUrl.
//   2. Subscription: $9.00 USD, recurring monthly. Paste into stripe.monthly.url.
//   3. Subscription: $79.00 USD, recurring yearly. Paste into stripe.yearly.url.
//   Each URL looks like https://buy.stripe.com/... and is safe to publish.
//
// SUPPORT / DONATE
//   "Support the work" always shows and emails churchofx4u@gmail.com.
//   A "Donate" Stripe button shows only when donateEnabled is true AND
//   donateStripeUrl is a https://buy.stripe.com/ link.
//
// BILLING (Pro) - OFF.
//   billingEnabled must stay false until Church X approves charging.
//   When ready, create Stripe Payment Links in the Stripe dashboard
//   ($9/month and $79/year), paste them below, then set billingEnabled: true.
//   Nothing billing-related renders while billingEnabled is false.
// VISITOR COUNTS (GoatCounter) - OFF while the code is empty.
// Church X: at https://www.goatcounter.com create a site, pick a site code
// (e.g. churchx → https://churchx.goatcounter.com), then paste that code into
// goatcounterCode below. Empty means the count.js script is never loaded and
// nothing is counted. No API key. Optional: in GoatCounter settings, tick
// "Ignore visits from …" / "Don't track me" so your own visits are skipped.
window.WWM_CONFIG = {
  goatcounterCode: "churchx", // GoatCounter site: https://churchx.goatcounter.com
  donateEnabled: false,
  donateStripeUrl: "https://buy.stripe.com/6oU28r9TXczncYq4AYdby03", // verified: one-time, customer chooses amount
  billingEnabled: false,
  stripe: {
    monthly: { label: "$9 a month", url: "https://buy.stripe.com/00wfZh9TX8j72jM3wUdby00" }, // verified: $9.00 per month
    yearly: { label: "$79 a year", url: "https://buy.stripe.com/7sY3cv1nr6aZ7E6gjGdby01" }  // verified: $79.00 per year
  },
  // Phone remote (Supabase Realtime broadcast). OFF by default.
  // Church X: create a free Supabase project, enable Realtime, paste the project
  // URL and anon/publishable key below, then set remoteEnabled: true.
  // Leave empty / false → vendor/supabase.js is never loaded and no Supabase
  // network calls are made. Never put a service_role / secret key here.
  remoteEnabled: false,
  supabaseUrl: "",
  supabaseAnonKey: ""
};

window.wwmSupportHref = function () {
  const c = window.WWM_CONFIG || {};
  return "mailto:churchofx4u@gmail.com?subject=" + encodeURIComponent("Supporting Worship With Me");
};

window.wwmDonateUrl = function () {
  const c = window.WWM_CONFIG || {};
  return c.donateEnabled && /^https:\/\/buy\.stripe\.com\//.test(c.donateStripeUrl || "") ? c.donateStripeUrl : "";
};

window.wwmBillingLinks = function () {
  const c = window.WWM_CONFIG || {};
  if (!c.billingEnabled || !c.stripe) return [];
  return [c.stripe.monthly, c.stripe.yearly].filter((p) => p && /^https:\/\/buy\.stripe\.com\//.test(p.url));
};

// True only when phone remote is opted in AND credentials are present.
window.wwmRemoteConfigured = function () {
  const c = window.WWM_CONFIG || {};
  if (!c.remoteEnabled) return false;
  const url = String(c.supabaseUrl || "").trim().replace(/\/$/, "");
  const key = String(c.supabaseAnonKey || "").trim();
  if (!/^https:\/\/[a-z0-9.-]+\.supabase\.co$/i.test(url)) return false;
  if (!key || key.length < 20) return false;
  if (/service_role|sb_secret_/i.test(key)) return false;
  return true;
};

// Load GoatCounter only when a site code is set. Safe to call more than once.
// The projector window (?screen=house) must NOT call this.
window.wwmGoatLoad = function () {
  const code = ((window.WWM_CONFIG || {}).goatcounterCode || "").trim();
  if (!code || !/^[a-z0-9-]+$/i.test(code)) return;
  if (document.querySelector("script[data-goatcounter]")) return;
  window.goatcounter = window.goatcounter || {};
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = "https://" + code + ".goatcounter.com/count";
  document.head.appendChild(s);
};

// Custom event. No-op if the script is blocked, offline, or counting is off.
window.wwmCountEvent = function (path, title) {
  try {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({ path: path, title: title || path, event: true });
    }
  } catch (err) {}
};
