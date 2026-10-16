// Worship With Me site config. Plain values only; loaded before app.js.
//
// SUPPORT / DONATE
//   donateUrl: paste a real donation page here (Stripe donation link, PayPal,
//   church giving page...). While it is empty, "Support" opens an email to
//   churchofx4u@gmail.com instead.
//
// BILLING (Pro) - OFF.
//   billingEnabled must stay false until Church X approves charging.
//   When ready, create Stripe Payment Links in the Stripe dashboard
//   ($9/month and $79/year), paste them below, then set billingEnabled: true.
//   Nothing billing-related renders while billingEnabled is false.
window.WWM_CONFIG = {
  donateUrl: "", // PLACEHOLDER: paste real donate link
  billingEnabled: false,
  stripe: {
    monthly: { label: "$9 a month", url: "" }, // PLACEHOLDER: https://buy.stripe.com/...
    yearly: { label: "$79 a year", url: "" }   // PLACEHOLDER: https://buy.stripe.com/...
  }
};

window.wwmSupportHref = function () {
  const c = window.WWM_CONFIG || {};
  return c.donateUrl || "mailto:churchofx4u@gmail.com?subject=" + encodeURIComponent("Supporting Worship With Me");
};

window.wwmBillingLinks = function () {
  const c = window.WWM_CONFIG || {};
  if (!c.billingEnabled || !c.stripe) return [];
  return [c.stripe.monthly, c.stripe.yearly].filter((p) => p && /^https:\/\/buy\.stripe\.com\//.test(p.url));
};
