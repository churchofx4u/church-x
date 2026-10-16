// First-run setup guide and styled dialogs. Loaded after app.js.

function closeOverlay(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function askDialog(opts, done) {
  closeOverlay("ask-dialog");
  const box = document.createElement("div");
  box.id = "ask-dialog";
  box.className = "overlay";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-labelledby", "ask-title");
  box.innerHTML = `
    <section class="card overlay-card">
      <h2 id="ask-title">${escapeText(opts.title)}</h2>
      ${opts.body.map((p) => `<p class="lede">${escapeText(p)}</p>`).join("")}
      <div class="row overlay-actions">
        <button class="solid" id="ask-yes">${escapeText(opts.yes)}</button>
        <button class="ghost" id="ask-no">${escapeText(opts.no)}</button>
      </div>
    </section>`;
  document.body.appendChild(box);
  const answer = (value) => { closeOverlay("ask-dialog"); done(value); };
  box.querySelector("#ask-yes").onclick = () => answer(true);
  box.querySelector("#ask-no").onclick = () => answer(false);
  box.querySelector("#ask-yes").focus();
}

let wizardStep = 0;
let wizardFirst = false;
const WIZARD_STEPS = 4;

function openWizard(first) {
  wizardFirst = !!first;
  wizardStep = 0;
  paintWizard();
}

function endWizard(how) {
  if (!localStorage.getItem(FIRST_RUN)) localStorage.setItem(FIRST_RUN, how);
  save();
  closeOverlay("wizard");
  view = "plan";
  render();
}

function loadSample() {
  const svc = sampleSunday();
  const roles = svc.roles;
  delete svc.roles;
  Object.keys(roles).forEach((k) => { if (!state.roles[k]) state.roles[k] = roles[k]; });
  if (wizardFirst) state.services = [svc];
  else state.services.unshift(svc);
  state.activeId = svc.id;
  save();
}

function startBlank() {
  const svc = blankService();
  if (wizardFirst) state.services = [svc];
  else state.services.unshift(svc);
  state.activeId = svc.id;
  save();
}

function wizardBody() {
  if (wizardStep === 0) return `
    <h2 id="wizard-title">Welcome. What is your church called?</h2>
    <p class="lede">The name is the title slide and the browser tab. You can change it on the Church screen.</p>
    <label for="wiz-name">Church name</label>
    <input id="wiz-name" value="${escapeAttr(state.churchName || "")}" placeholder="Grace Community Church">`;
  if (wizardStep === 1) return `
    <h2 id="wizard-title">Pick a look for the projector</h2>
    <p class="lede">This is the background behind the lyrics.</p>
    <div class="theme-grid">
      ${THEMES.map((t) => `<button type="button" class="theme-swatch ${t.id} ${state.theme === t.id ? "on" : ""}" data-wiz-theme="${t.id}"><span>${t.name}</span></button>`).join("")}
    </div>`;
  if (wizardStep === 2) return `
    <h2 id="wizard-title">Start with a sample Sunday?</h2>
    <p class="lede">A full order of service: welcome and call to worship, public-domain hymns (“Holy, Holy, Holy”; “Come, Thou Fount”; “It Is Well”; the Doxology), Psalm 23 and the benediction from the King James Bible, a sermon slide, the offering, and run sheet roles. Change or remove any of it.</p>
    <div class="row overlay-actions">
      <button class="solid" id="wiz-sample">Load sample Sunday</button>
      <button class="ghost" id="wiz-blank">Start blank</button>
    </div>`;
  return `
    <h2 id="wizard-title">Try Present</h2>
    <p class="lede">Present opens the lyrics in a second window for the projector. This laptop keeps the run sheet. Rehearse shows it here on one screen.</p>
    <div class="keys">
      <p><kbd>→</kbd> or <kbd>Space</kbd> next slide · <kbd>←</kbd> back</p>
      <p><kbd>B</kbd> blacks the screen</p>
      <p><kbd>T</kbd> shows the title</p>
      <p><kbd>Esc</kbd> leaves</p>
    </div>
    <div class="row overlay-actions">
      <button class="solid" id="wiz-rehearse">Rehearse now</button>
    </div>`;
}

function paintWizard() {
  let box = document.getElementById("wizard");
  if (!box) {
    box = document.createElement("div");
    box.id = "wizard";
    box.className = "overlay";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-labelledby", "wizard-title");
    document.body.appendChild(box);
  }
  const last = wizardStep === WIZARD_STEPS - 1;
  box.innerHTML = `
    <section class="card overlay-card">
      <div class="wizard-dots">${Array.from({ length: WIZARD_STEPS }, (_, i) => `<span class="${i === wizardStep ? "on" : ""}"></span>`).join("")}<small>Step ${wizardStep + 1} of ${WIZARD_STEPS}</small></div>
      ${wizardBody()}
      <div class="row overlay-actions wizard-nav">
        <button class="ghost" id="wiz-back" ${wizardStep === 0 ? "disabled" : ""}>Back</button>
        <button class="ghost" id="wiz-skip">Skip</button>
        <button class="solid" id="wiz-next">${last ? "Done" : "Next"}</button>
      </div>
    </section>`;
  const q = (id) => box.querySelector("#" + id);
  const keepName = () => {
    const input = q("wiz-name");
    if (input && input.value.trim()) state.churchName = input.value.trim();
  };
  const next = () => {
    keepName();
    save();
    render();
    if (last) return endWizard("done");
    wizardStep += 1;
    paintWizard();
  };
  q("wiz-back").onclick = () => { keepName(); wizardStep -= 1; paintWizard(); };
  q("wiz-next").onclick = next;
  q("wiz-skip").onclick = () => {
    keepName();
    if (last) return endWizard("done");
    wizardStep += 1;
    paintWizard();
  };
  box.querySelectorAll("[data-wiz-theme]").forEach((btn) => btn.onclick = () => {
    state.theme = btn.dataset.wizTheme;
    save();
    paintWizard();
  });
  if (q("wiz-name")) {
    q("wiz-name").onkeydown = (e) => { if (e.key === "Enter") next(); };
    q("wiz-name").focus();
  }
  if (q("wiz-sample")) q("wiz-sample").onclick = () => { loadSample(); next(); };
  if (q("wiz-blank")) q("wiz-blank").onclick = () => { startBlank(); next(); };
  if (q("wiz-rehearse")) q("wiz-rehearse").onclick = () => { endWizard("done"); openStage(true); };
}

if (!isHouse && isFirstRun) openWizard(true);
