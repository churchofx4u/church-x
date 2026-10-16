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
window.WWM_CONFIG = {
  donateEnabled: false,
  donateStripeUrl: "https://buy.stripe.com/6oU28r9TXczncYq4AYdby03", // verified: one-time, customer chooses amount
  billingEnabled: false,
  stripe: {
    monthly: { label: "$9 a month", url: "https://buy.stripe.com/00wfZh9TX8j72jM3wUdby00" }, // verified: $9.00 per month
    yearly: { label: "$79 a year", url: "https://buy.stripe.com/7sY3cv1nr6aZ7E6gjGdby01" }  // verified: $79.00 per year
  }
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
