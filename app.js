const HYMNS = [
  {
    title: "Amazing Grace",
    author: "John Newton",
    year: "1779",
    pd: true,
    verses: [
      "Amazing grace! how sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found,\nWas blind, but now I see.",
      "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!",
      "Through many dangers, toils, and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.",
      "When we've been there ten thousand years,\nBright shining as the sun,\nWe've no less days to sing God's praise\nThan when we'd first begun."
    ]
  },
  {
    title: "Holy, Holy, Holy",
    author: "Reginald Heber",
    year: "1826",
    pd: true,
    verses: [
      "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to thee.\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!",
      "Holy, holy, holy! All the saints adore thee,\nCasting down their golden crowns around the glassy sea.\nCherubim and seraphim falling down before thee,\nWhich wert, and art, and evermore shalt be.",
      "Holy, holy, holy! Lord God Almighty!\nAll thy works shall praise thy name, in earth and sky and sea.\nHoly, holy, holy! Merciful and mighty!\nGod in three Persons, blessed Trinity!"
    ]
  },
  {
    title: "It Is Well with My Soul",
    author: "Horatio G. Spafford",
    year: "1873",
    pd: true,
    verses: [
      "When peace, like a river, attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, thou hast taught me to say,\nIt is well, it is well with my soul.",
      "My sin—oh, the bliss of this glorious thought—\nMy sin, not in part, but the whole,\nIs nailed to the cross, and I bear it no more.\nPraise the Lord, praise the Lord, O my soul!",
      "And Lord, haste the day when my faith shall be sight,\nThe clouds be rolled back as a scroll;\nThe trump shall resound, and the Lord shall descend,\nEven so, it is well with my soul."
    ]
  },
  {
    title: "Come, Thou Fount",
    author: "Robert Robinson",
    year: "1758",
    pd: true,
    verses: [
      "Come, thou Fount of every blessing,\nTune my heart to sing thy grace.\nStreams of mercy, never ceasing,\nCall for songs of loudest praise.",
      "Jesus sought me when a stranger,\nWandering from the fold of God.\nHe, to rescue me from danger,\nInterposed his precious blood.",
      "O to grace how great a debtor\nDaily I'm constrained to be!\nLet thy goodness, like a fetter,\nBind my wandering heart to thee."
    ]
  },
  {
    title: "Blessed Assurance",
    author: "Fanny J. Crosby",
    year: "1873",
    pd: true,
    verses: [
      "Blessed assurance, Jesus is mine!\nO what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of his Spirit, washed in his blood.",
      "Perfect submission, all is at rest,\nI in my Savior am happy and blest,\nWatching and waiting, looking above,\nFilled with his goodness, lost in his love."
    ]
  },
  {
    title: "A Mighty Fortress Is Our God",
    author: "Martin Luther, tr. Frederick H. Hedge",
    year: "1529 / 1853",
    pd: true,
    verses: [
      "A mighty fortress is our God,\nA bulwark never failing;\nOur helper he, amid the flood\nOf mortal ills prevailing.",
      "Did we in our own strength confide,\nOur striving would be losing,\nWere not the right Man on our side,\nThe Man of God's own choosing.",
      "Let goods and kindred go,\nThis mortal life also;\nThe body they may kill:\nGod's truth abideth still.\nHis kingdom is forever."
    ]
  },
  {
    title: "What a Friend We Have in Jesus",
    author: "Joseph M. Scriven",
    year: "1855",
    pd: true,
    verses: [
      "What a friend we have in Jesus,\nAll our sins and griefs to bear!\nWhat a privilege to carry\nEverything to God in prayer!",
      "Have we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged;\nTake it to the Lord in prayer.",
      "Are we weak and heavy laden,\nCumbered with a load of care?\nPrecious Savior, still our refuge;\nTake it to the Lord in prayer."
    ]
  },
  {
    title: "Doxology",
    author: "Thomas Ken",
    year: "1674",
    pd: true,
    verses: [
      "Praise God, from whom all blessings flow;\nPraise him, all creatures here below;\nPraise him above, ye heavenly host;\nPraise Father, Son, and Holy Ghost. Amen."
    ]
  },
  {
    title: "Be Thou My Vision",
    author: "Ancient Irish, tr. Mary E. Byrne / Eleanor H. Hull",
    year: "1912",
    pd: true,
    verses: [
      "Be thou my vision, O Lord of my heart;\nNaught be all else to me, save that thou art.\nThou my best thought, by day or by night,\nWaking or sleeping, thy presence my light.",
      "Be thou my wisdom, and thou my true word;\nI ever with thee and thou with me, Lord.\nThou my great Father, I thy true son;\nThou in me dwelling, and I with thee one.",
      "High King of heaven, my victory won,\nMay I reach heaven's joys, O bright heaven's Sun.\nHeart of my own heart, whatever befall,\nStill be my vision, O Ruler of all."
    ]
  },
  {
    title: "When I Survey the Wondrous Cross",
    author: "Isaac Watts",
    year: "1707",
    pd: true,
    verses: [
      "When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.",
      "Forbid it, Lord, that I should boast,\nSave in the death of Christ my God!\nAll the vain things that charm me most,\nI sacrifice them to his blood.",
      "Were the whole realm of nature mine,\nThat were a present far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all."
    ]
  },
  {
    title: "Abide with Me",
    author: "Henry F. Lyte",
    year: "1847",
    pd: true,
    verses: [
      "Abide with me: fast falls the eventide;\nThe darkness deepens; Lord, with me abide.\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
      "I need thy presence every passing hour.\nWhat but thy grace can foil the tempter's power?\nWho like thyself my guide and stay can be?\nThrough cloud and sunshine, O abide with me.",
      "Hold thou thy cross before my closing eyes.\nShine through the gloom, and point me to the skies.\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me."
    ]
  },
  {
    title: "Christ the Lord Is Risen Today",
    author: "Charles Wesley",
    year: "1739",
    pd: true,
    verses: [
      "Christ the Lord is risen today, Alleluia!\nSons of men and angels say, Alleluia!\nRaise your joys and triumphs high, Alleluia!\nSing, ye heavens, and earth reply, Alleluia!",
      "Lives again our glorious King, Alleluia!\nWhere, O death, is now thy sting? Alleluia!\nOnce he died our souls to save, Alleluia!\nWhere thy victory, O grave? Alleluia!"
    ]
  }
];

const SCRIPTURES = [
  {
    ref: "Psalm 23:1–6",
    text: "The Lord is my shepherd; I shall not want.\nHe maketh me to lie down in green pastures: he leadeth me beside the still waters.\nHe restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.\nYea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.\nThou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.\nSurely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever."
  },
  {
    ref: "John 3:16–17",
    text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.\nFor God sent not his Son into the world to condemn the world; but that the world through him might be saved."
  },
  {
    ref: "Numbers 6:24–26",
    text: "The Lord bless thee, and keep thee:\nThe Lord make his face shine upon thee, and be gracious unto thee:\nThe Lord lift up his countenance upon thee, and give thee peace."
  }
];

const KEY = "churchx.v1";
const VERSION = "1.2";
const THEMES = [
  { id: "midnight", name: "Midnight" },
  { id: "parchment", name: "Parchment" },
  { id: "harvest", name: "Harvest" },
  { id: "river", name: "River" }
];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function sampleService() {
  return {
    id: uid(),
    name: "Sunday gathering",
    date: new Date().toISOString().slice(0, 10),
    items: [
      { id: uid(), type: "word", title: "Welcome", body: "We are glad you are here." },
      { id: uid(), type: "hymn", title: "Amazing Grace", author: "John Newton", year: "1779", pd: true, ccli: "", verses: HYMNS[0].verses },
      { id: uid(), type: "scripture", title: "Psalm 23:1–6", body: SCRIPTURES[0].text },
      { id: uid(), type: "word", title: "Sermon", body: "Title goes here.\nText: Psalm 23" },
      { id: uid(), type: "hymn", title: "Doxology", author: "Thomas Ken", year: "1674", pd: true, ccli: "", verses: HYMNS[7].verses },
      { id: uid(), type: "scripture", title: "Numbers 6:24–26", body: SCRIPTURES[2].text }
    ]
  };
}

function sampleSunday() {
  const hymn = (title) => {
    const h = HYMNS.find((x) => x.title === title);
    return { id: uid(), type: "hymn", title: h.title, author: h.author, year: h.year, pd: true, ccli: "", verses: h.verses };
  };
  const word = (title, body) => ({ id: uid(), type: "word", title, body });
  const verse = (i) => ({ id: uid(), type: "scripture", title: SCRIPTURES[i].ref, body: SCRIPTURES[i].text });
  return {
    id: uid(),
    name: "Sample Sunday",
    date: new Date().toISOString().slice(0, 10),
    items: [
      word("Welcome", "Good morning, and welcome.\nWe are glad you are here."),
      word("Call to worship", "This is the day which the Lord hath made;\nwe will rejoice and be glad in it.\nPsalm 118:24"),
      hymn("Holy, Holy, Holy"),
      hymn("Come, Thou Fount"),
      word("Prayer", "Let us pray."),
      verse(0),
      word("Sermon", "The Lord Is My Shepherd\nPsalm 23"),
      hymn("It Is Well with My Soul"),
      word("Offering", "We give with glad and generous hearts.\nGiving cards are at the back, or give online."),
      hymn("Doxology"),
      word("Announcements", "Coffee and fellowship after the service.\nNew here? Stop by the welcome table."),
      verse(2),
      word("Go in peace", "Thank you for worshiping with us.")
    ],
    roles: { greeter: "Greeter at the front door", sound: "Sound desk", slides: "Slides on this laptop", prayer: "Opening prayer", preacher: "Pastor", notes: "Doors open 30 minutes before. Black the screen during prayer." }
  };
}

function blankService() {
  return { id: uid(), name: "Sunday gathering", date: new Date().toISOString().slice(0, 10), items: [] };
}

const FIRST_RUN = "churchx.firstRun";
const isFirstRun = !localStorage.getItem(KEY) && !localStorage.getItem(FIRST_RUN);

function load() {
  const saved = localStorage.getItem(KEY);
  if (saved) return JSON.parse(saved);
  return {
    churchName: "",
    pastor: "",
    publicUrl: "https://churchofx4u.github.io/church-x/",
    theme: "midnight",
    size: "regular",
    services: [sampleService()],
    activeId: null,
    songs: [],
    usage: [],
    guests: [],
    roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "" }
  };
}

let state = load();
// Older saves stored the placeholder itself; treat it as "not set yet".
if (!state.churchName || state.churchName.trim() === "Your Church") state.churchName = "";

// The one place the church name is read. Falls back to a placeholder
// until the church sets it (first-run guide or the Church screen).
function churchName() {
  return (state.churchName || "").trim() || "Your Church";
}
if (!state.activeId) state.activeId = state.services[0].id;
const screenParam = new URLSearchParams(location.search).get("screen");
const isHouse = screenParam === "house";
const isStage = screenParam === "stage";
const LIVE = "churchx.live";
let view = location.hash === "#welcome" ? "welcome" : "plan";
let slideIndex = 0;
let black = false;
let titleCard = false;
let showNotes = false;
let countingUsage = false; // true only during a real Present run; Rehearse stays false
let logged = new Set();
let houseWindow = null;
let stageWindow = null;
let stageMessage = "";
let countdownEnd = null; // epoch ms, or null
let stageTheme = "dark"; // dark | light
let stageClockTimer = null;
let liveChannel = null;
let fileNote = "";
try { liveChannel = new BroadcastChannel("wwm-sunday"); } catch (err) { liveChannel = null; }

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    localStorage.setItem(EDITED_AT, String(Date.now()));
    setTitle();
    return true;
  } catch (err) {
    if (isQuotaError(err)) {
      showToast("This browser is out of space", "Export a backup, free some browser storage, then try again.", null);
    }
    return false;
  }
}

const UNDO_KEY = "churchx.undo";

function isQuotaError(err) {
  return !!(err && (err.name === "QuotaExceededError" || err.code === 22 || err.code === 1014));
}

function hasUndo() {
  try { return !!localStorage.getItem(UNDO_KEY); } catch (err) { return false; }
}

// Keep only the latest undo copy of the whole app state.
function stashUndo() {
  try {
    localStorage.setItem(UNDO_KEY, JSON.stringify({ at: Date.now(), state }));
    return true;
  } catch (err) {
    if (isQuotaError(err)) {
      try { localStorage.removeItem(UNDO_KEY); localStorage.setItem(UNDO_KEY, JSON.stringify({ at: Date.now(), state })); return true; } catch (err2) { return false; }
    }
    return false;
  }
}

function clearUndo() {
  try { localStorage.removeItem(UNDO_KEY); } catch (err) {}
}

function readUndo() {
  try {
    const raw = localStorage.getItem(UNDO_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.state || !Array.isArray(parsed.state.services)) return null;
    return parsed;
  } catch (err) { return null; }
}

function showToast(title, body, undoLabel) {
  const old = document.getElementById("import-toast");
  if (old) old.remove();
  const box = document.createElement("aside");
  box.id = "import-toast";
  box.className = "import-toast";
  box.setAttribute("role", "status");
  box.innerHTML = `<div><strong>${escapeText(title)}</strong><p>${escapeText(body || "")}</p></div>
    <div class="row">${undoLabel ? `<button class="solid" id="toast-undo">${escapeText(undoLabel)}</button>` : ""}
    <button class="ghost" id="toast-dismiss">Dismiss</button></div>`;
  document.body.appendChild(box);
  const dismiss = () => { const el = document.getElementById("import-toast"); if (el) el.remove(); };
  box.querySelector("#toast-dismiss").onclick = dismiss;
  if (undoLabel) box.querySelector("#toast-undo").onclick = () => { dismiss(); restoreUndo(); };
  clearTimeout(showToast._t);
  showToast._t = setTimeout(dismiss, 16000);
}

function restoreUndo() {
  const packed = readUndo();
  if (!packed) {
    showToast("Nothing to undo", "There is no previous copy saved in this browser.", null);
    return;
  }
  const current = state;
  state = packed.state;
  if (!state.activeId && state.services[0]) state.activeId = state.services[0].id;
  try {
    localStorage.setItem(UNDO_KEY, JSON.stringify({ at: Date.now(), state: current }));
  } catch (err) {
    clearUndo();
  }
  if (!save()) {
    state = current;
    return;
  }
  fileNote = "Restored your previous data.";
  render();
  showToast("Previous data restored", "You can undo once more to flip back.", "Undo again");
}

function cloneServiceFresh(service) {
  const copy = JSON.parse(JSON.stringify(service));
  copy.id = uid();
  (copy.items || []).forEach((item) => { item.id = uid(); });
  return copy;
}

function applyImportedData(data, mode) {
  const hadUndo = stashUndo();
  if (mode === "add") {
    const added = (data.services || []).map(cloneServiceFresh);
    if (!added.length) throw new Error("bad");
    state.services = added.concat(state.services);
    state.activeId = added[0].id;
    if (Array.isArray(data.songs) && data.songs.length) {
      const have = new Set((state.songs || []).map((s) => (s.title || "").toLowerCase()));
      data.songs.forEach((song) => {
        if (!have.has((song.title || "").toLowerCase())) {
          const s = JSON.parse(JSON.stringify(song));
          s.id = uid();
          state.songs = state.songs || [];
          state.songs.push(s);
        }
      });
    }
  } else {
    state = data;
    if (!state.activeId && state.services[0]) state.activeId = state.services[0].id;
  }
  localStorage.setItem(FIRST_RUN, "import");
  if (!save()) {
    const prev = readUndo();
    if (prev) state = prev.state;
    throw new Error("quota");
  }
  return hadUndo;
}

// "Back up your Sunday" reminder: show when there are edits since the last
// export and it has been a week (or never). Dismiss snoozes it for 3 days.
const EDITED_AT = "churchx.editedAt";
const BACKED_UP_AT = "churchx.backedUpAt";
const BACKUP_SNOOZE = "churchx.backupSnooze";
const DAY = 86400000;

function markBackedUp() {
  localStorage.setItem(BACKED_UP_AT, String(Date.now()));
  const el = document.getElementById("backup-reminder");
  if (el) el.remove();
}

function needsBackup() {
  const edited = Number(localStorage.getItem(EDITED_AT) || 0);
  const backed = Number(localStorage.getItem(BACKED_UP_AT) || 0);
  const snooze = Number(localStorage.getItem(BACKUP_SNOOZE) || 0);
  const now = Date.now();
  if (!edited || edited <= backed || now < snooze) return false;
  if (!localStorage.getItem(KEY)) return false;
  return !backed || now - backed > 7 * DAY;
}

function backupReminder() {
  if (!["plan", "songs", "media", "run", "setup"].includes(view) || !needsBackup()) return "";
  const backed = Number(localStorage.getItem(BACKED_UP_AT) || 0);
  const when = backed ? "Your last backup was " + Math.floor((Date.now() - backed) / DAY) + " days ago." : "You haven't saved a backup yet.";
  return `
    <aside class="backup-reminder" id="backup-reminder" role="status">
      <div>
        <strong>Back up your Sunday</strong>
        <p>${when} Everything lives in this browser only. Export a copy so a cleared browser or a new computer doesn't lose your work.</p>
      </div>
      <div class="row">
        <button class="solid" id="backup-now">Export Sunday</button>
        <button class="ghost" id="backup-later" aria-label="Dismiss backup reminder">Remind me later</button>
      </div>
    </aside>`;
}

function setTitle() {
  const name = (state.churchName || "").trim() || "Worship With Me";
  document.title = name + " · Worship With Me";
}

function active() {
  return state.services.find((s) => s.id === state.activeId) || state.services[0];
}

function slidesFor(service) {
  const slides = [{ kind: "title", title: churchName(), body: service.name, kicker: service.date || "Sunday" }];
  service.items.forEach((item) => {
    if (item.type === "hymn") {
      slides.push({ kind: "title", title: item.title, body: item.author || "", item });
      (item.verses || []).forEach((verse, i) => {
        const body = typeof verse === "string" ? verse : (verse.body || "");
        const kicker = typeof verse === "string"
          ? ("Verse " + (i + 1))
          : (verse.label || ("Verse " + (i + 1)));
        slides.push({ kind: "verse", title: item.title, body: body, kicker: kicker, item });
      });
      if (!item.pd) slides.push({ kind: "credit", title: item.title, body: creditBody(item), kicker: "Song", item });
    } else if (item.type === "scripture") {
      const parts = scriptureParts(item.body);
      parts.forEach((part, i) => {
        slides.push({ kind: "scripture", title: item.title, body: part, kicker: parts.length > 1 ? "Part " + (i + 1) : item.title, item });
      });
    } else {
      slides.push({ kind: item.type, title: item.title, body: item.body || "", item });
    }
  });
  return slides;
}

function creditBody(item) {
  const lines = [];
  if (item.author) lines.push(item.author);
  if (item.copyright) lines.push(item.copyright);
  else if (item.year) lines.push(String(item.year));
  if (item.ccli) lines.push("License " + item.ccli);
  return lines.join("\n") || "Add the copyright line under Songs.";
}

function setView(next) {
  view = next;
  if (next !== "welcome") history.replaceState(null, "", location.pathname + location.search);
  render();
}

function render() {
  ensureUsagePeriod();
  const root = document.querySelector("#view");
  const nav = document.querySelectorAll("nav button");
  nav.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === view));
  const label = document.querySelector("#church-label");
  label.textContent = state.churchName ? state.churchName : "Set your church name";
  label.classList.toggle("unset", !state.churchName);
  label.title = "Change the church name";
  label.onclick = () => { setView("setup"); const f = document.getElementById("church-name"); if (f) f.focus(); };
  label.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); label.onclick(); } };
  const versionEl = document.querySelector("#version");
  if (versionEl) versionEl.textContent = "Version " + VERSION;
  setTitle();
  if (view === "plan") root.innerHTML = planView();
  if (view === "media") root.innerHTML = mediaView();
  if (view === "songs") root.innerHTML = songsView();
  if (view === "run") root.innerHTML = runView();
  if (view === "people") root.innerHTML = peopleView();
  if (view === "report") root.innerHTML = reportView();
  if (view === "setup") root.innerHTML = setupView();
  if (view === "help") root.innerHTML = helpView();
  if (view === "about") root.innerHTML = aboutView();
  if (view === "welcome") root.innerHTML = welcomeView();
  if (view === "booth") root.innerHTML = boothView();
  root.insertAdjacentHTML("afterbegin", backupReminder());
  bind();
}

function planView() {
  const service = active();
  const options = state.services.map((s) => `<option value="${s.id}" ${s.id === service.id ? "selected" : ""}>${s.date} · ${s.name}</option>`).join("");
  const items = service.items.map((item, i) => `
    <div class="item">
      <div>
        <strong>${item.title || "Untitled"}</strong>
        <div><small>${item.type}${item.pd ? " · public domain" : ""}${item.ccli ? " · CCLI " + item.ccli : ""}</small></div>
      </div>
      <div class="row">
        <button class="ghost" data-up="${i}" ${i === 0 ? "disabled" : ""}>Up</button>
        <button class="ghost" data-down="${i}" ${i === service.items.length - 1 ? "disabled" : ""}>Down</button>
        <button class="ghost" data-del="${i}">Remove</button>
      </div>
    </div>`).join("");
  return `
    <div class="top">
      <div>
        <h1>Sunday</h1>
        <p class="lede">Build the order here. Present opens the lyrics on the projector and leaves this laptop on the run sheet. Rehearse practices here without counting for CCLI. <a href="./for-churches.html">For another church</a></p>
      </div>
      <div class="row">
        <button class="solid" id="present">Present</button>
        <button class="ghost" id="open-stage-display">Stage display</button>
        <button class="ghost" id="stage" title="Practice on this screen. Does not add to the CCLI log.">Rehearse</button>
        <button class="ghost" id="export-sunday">Export Sunday</button>
        <label class="ghost file-btn">Import Sunday<input id="import-sunday" type="file" accept="application/json"></label>
      </div>
    </div>
    <p id="file-note" class="lede">${escapeText(fileNote)}</p>
    <div class="grid-2">
      <section class="card">
        <div class="row">
          <select id="service-pick">${options}</select>
          <button class="ghost" id="new-service">New Sunday</button>
        </div>
        <label>Service name</label>
        <input id="service-name" value="${escapeAttr(service.name)}">
        <label>Date</label>
        <input id="service-date" type="date" value="${service.date}">
        <div style="margin-top:14px">${items || "<p>No items yet.</p>"}</div>
      </section>
      <section class="card">
        <h3>Add to this service</h3>
        <label>Public-domain hymn</label>
        <select id="hymn-pick">${HYMNS.map((h) => `<option>${h.title}</option>`).join("")}</select>
        <button class="solid" id="add-hymn" style="margin-top:10px">Add hymn</button>
        <label>Scripture reference</label>
        <input id="scripture-ref" placeholder="Romans 8:1–2">
        <label>Scripture text</label>
        <textarea id="scripture-text" placeholder="Paste any passage. A blank line starts the next slide."></textarea>
        <label>Or start from a sample</label>
        <select id="scripture-pick">
          <option value="">Choose a sample</option>
          ${SCRIPTURES.map((s) => `<option value="${escapeAttr(s.ref)}">${s.ref}</option>`).join("")}
        </select>
        <button class="ghost" id="add-scripture" style="margin-top:10px">Add scripture</button>
        <label>Words slide</label>
        <input id="word-title" placeholder="Welcome, prayer, sermon title">
        <textarea id="word-body" placeholder="Text for the slide"></textarea>
        <button class="ghost" id="add-word" style="margin-top:10px">Add words</button>
        <label>YouTube link</label>
        <input id="yt-url" placeholder="https://www.youtube.com/watch?v=...">
        <button class="ghost" id="add-youtube" style="margin-top:10px">Add YouTube</button>
      </section>
    </div>`;
}

function mediaView() {
  return `
    <div class="top">
      <div>
        <h1>Media</h1>
        <p class="lede">Watch a YouTube link here, add a video from this computer, or set a picture as the slide background. Computer files stay on this computer. They are not uploaded.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card">
        <h3>YouTube</h3>
        <label>Link</label>
        <input id="watch-url" placeholder="https://youtu.be/...">
        <button class="solid" id="watch-now" style="margin-top:10px">Watch</button>
        <button class="ghost" id="watch-add">Add to Sunday</button>
        <div id="watch-box" style="margin-top:14px"></div>
      </section>
      <section class="card">
        <h3>From this computer</h3>
        <label>Video</label>
        <input id="local-video" type="file" accept="video/*">
        <button class="solid" id="add-video" style="margin-top:10px">Add video to Sunday</button>
        <label>Background picture</label>
        <input id="local-photo" type="file" accept="image/*">
        <button class="ghost" id="set-photo" style="margin-top:10px">Use as slide background</button>
        <button class="ghost" id="clear-photo">Clear background</button>
        <p class="lede" id="media-note">${active().backgroundId ? "A background picture is set for this Sunday." : "No background picture yet."}</p>
      </section>
    </div>`;
}

function youtubeId(url) {
  const match = String(url || "").match(/(?:youtu\.be\/|shorts\/|embed\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

function mediaDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("churchx-media", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("files");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveMedia(id, file) {
  const db = await mediaDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(file, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function loadMedia(id) {
  if (!id) return null;
  const db = await mediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const request = tx.objectStore("files").get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}


function buildSongFromPasteForm() {
  const title = (document.getElementById("lic-title") || {}).value || "";
  const text = (document.getElementById("lic-lyrics") || {}).value || "";
  const parsed = (window.SongImport && SongImport.parsePaste)
    ? SongImport.parsePaste(title, text)
    : { title: title, verses: text.split(/\n\s*\n/).map((v) => v.trim()).filter(Boolean).map((body) => ({ label: "", body: body })) };
  parsed.author = (document.getElementById("lic-author") || {}).value || "";
  parsed.ccli = (document.getElementById("lic-ccli") || {}).value || "";
  parsed.copyright = (document.getElementById("lic-copy") || {}).value || "";
  parsed.pd = false;
  return parsed;
}

function saveSongFromPasteForm() {
  const song = buildSongFromPasteForm();
  const note = document.getElementById("song-import-note");
  const finish = (mode) => {
    const result = saveImportedSong(song, mode || "add");
    if (!result.ok && result.reason === "empty") {
      if (note) note.textContent = "Add a title and some lyrics before saving.";
      return;
    }
    if (!result.ok && result.reason === "dup") {
      choiceDialog({
        title: "Song already saved",
        body: [
          "“" + result.dup.title + "”" + (result.dup.ccli ? " (CCLI " + result.dup.ccli + ")" : "") + " is already in Songs.",
          "Replace it with this paste, or keep the one you have?"
        ],
        choices: [
          { id: "replace", label: "Replace", solid: true },
          { id: "skip", label: "Keep existing" },
          { id: "cancel", label: "Cancel" }
        ]
      }, (pick) => {
        if (pick === "replace") finish("replace");
        else if (pick === "skip") { if (note) note.textContent = "Kept the existing song."; }
      });
      return;
    }
    save();
    render();
  };
  finish("add");
}

async function importSongFiles(event) {
  const input = event.target;
  const files = Array.from((input && input.files) || []);
  if (!files.length) return;
  const note = () => document.getElementById("song-import-note");
  const queue = [];
  for (const file of files) {
    try {
      const text = await file.text();
      const song = SongImport.parseSongFile(text, file.name);
      queue.push({ file: file.name, song: song });
    } catch (err) {
      queue.push({ file: file.name, error: true });
    }
  }
  input.value = "";
  let added = 0, replaced = 0, skipped = 0, failed = 0;

  const next = (i) => {
    if (i >= queue.length) {
      save();
      render();
      const el = note();
      if (el) el.textContent = "Import finished: " + added + " added, " + replaced + " replaced, " + skipped + " skipped, " + failed + " failed.";
      return;
    }
    const item = queue[i];
    if (item.error || !item.song || !item.song.verses || !item.song.verses.length) {
      failed += 1;
      return next(i + 1);
    }
    const result = saveImportedSong(item.song, "add");
    if (result.ok && !result.skipped && !result.replaced) { added += 1; return next(i + 1); }
    if (!result.ok && result.reason === "dup") {
      choiceDialog({
        title: "Duplicate: " + item.file,
        body: [
          "“" + result.dup.title + "”" + (result.dup.ccli ? " (CCLI " + result.dup.ccli + ")" : "") + " is already saved.",
          "Replace the saved song, skip this file, or cancel the rest?"
        ],
        choices: [
          { id: "replace", label: "Replace", solid: true },
          { id: "skip", label: "Skip" },
          { id: "cancel", label: "Cancel rest" }
        ]
      }, (pick) => {
        if (pick === "replace") {
          saveImportedSong(item.song, "replace");
          replaced += 1;
          next(i + 1);
        } else if (pick === "skip") {
          skipped += 1;
          next(i + 1);
        } else {
          skipped += (queue.length - i);
          next(queue.length);
        }
      });
      return;
    }
    failed += 1;
    next(i + 1);
  };
  next(0);
}

function songPreviewHtml(song) {
  if (!song || !(song.verses || []).length) return `<p class="lede">Nothing to preview yet.</p>`;
  const meta = [
    song.author ? "Author: " + song.author : "",
    song.ccli ? "CCLI " + song.ccli : "",
    song.copyright || ""
  ].filter(Boolean).join(" · ");
  const blocks = song.verses.map((v, i) => {
    const label = typeof v === "string" ? ("Verse " + (i + 1)) : (v.label || ("Verse " + (i + 1)));
    const body = typeof v === "string" ? v : (v.body || "");
    return `<div class="song-preview-block"><small>${escapeText(label)}</small><pre>${escapeText(body)}</pre></div>`;
  }).join("");
  return `<p class="lede"><strong>${escapeText(song.title || "Untitled")}</strong>${meta ? "<br>" + escapeText(meta) : ""}</p>${blocks}`;
}

function versesForStorage(verses) {
  return (verses || []).map((v) => {
    if (typeof v === "string") return v;
    if (v.label) return { label: v.label, body: v.body || "" };
    return v.body || "";
  }).filter((v) => typeof v === "string" ? v.trim() : (v.body || "").trim());
}

function findSongDuplicate(song) {
  return (window.SongImport && SongImport.detectDuplicate)
    ? SongImport.detectDuplicate(song, state.songs || [])
    : null;
}

function saveImportedSong(song, mode) {
  const dup = findSongDuplicate(song);
  const payload = {
    id: uid(),
    title: song.title,
    author: song.author || "",
    copyright: song.copyright || "",
    ccli: song.ccli || "",
    pd: !!song.pd,
    verses: versesForStorage(song.verses)
  };
  if (!payload.title || !payload.verses.length) return { ok: false, reason: "empty" };
  if (dup && mode === "skip") return { ok: true, skipped: true, dup: dup };
  if (dup && mode === "replace") {
    payload.id = dup.id;
    const idx = state.songs.findIndex((s) => s.id === dup.id);
    if (idx >= 0) state.songs[idx] = payload;
    else state.songs.push(payload);
    return { ok: true, replaced: true, song: payload };
  }
  if (dup) return { ok: false, reason: "dup", dup: dup, song: payload };
  state.songs.push(payload);
  return { ok: true, song: payload };
}

function songsView() {
  const custom = state.songs.map((song) => `
    <div class="song">
      <div><strong>${escapeText(song.title)}</strong><div><small>${escapeText(song.author || "Author")}${song.copyright ? " · " + escapeText(song.copyright) : ""} · CCLI ${escapeText(song.ccli || "missing")} · ${(song.verses || []).length} slides</small></div></div>
      <button class="ghost" data-use-song="${song.id}">Add to Sunday</button>
    </div>`).join("");
  return `
    <div class="top"><div><h1>Songs</h1><p class="lede">Public-domain hymns are built in. Licensed lyrics stay on this church's machine. Paste or import from SongSelect / ChordPro only if this church holds that license. Nothing is fetched from SongSelect — only files you provide.</p></div>
      <label class="ghost file-btn">Import song files<input id="import-songs" type="file" accept=".txt,.cho,.chordpro,.pro,text/plain" multiple></label>
    </div>
    <p id="song-import-note" class="lede"></p>
    <div class="grid-2">
      <section class="card">
        <h3>Paste lyrics</h3>
        <label>Title</label><input id="lic-title" placeholder="Song title">
        <label>Author</label><input id="lic-author">
        <label>License number</label><input id="lic-ccli" placeholder="CCLI or OneLicense number">
        <label>Copyright line</label><input id="lic-copy" placeholder="© 2011 Publisher name">
        <label>Lyrics</label>
        <textarea id="lic-lyrics" class="lyrics-paste" placeholder="Paste lyrics here. Use a blank line between slides. Labels like Verse 1, Chorus, Bridge, or [V1] become slide titles."></textarea>
        <div class="row" style="margin-top:10px">
          <button class="ghost" id="preview-licensed">Preview slides</button>
          <button class="solid" id="save-licensed">Save song</button>
        </div>
        <p class="lede" style="font-size:13px;margin-top:10px">Tip: SongSelect .txt and ChordPro (.cho / .chordpro / .pro) can be imported with the button above. Several files at once is fine.</p>
      </section>
      <section class="card">
        <h3>Preview</h3>
        <div id="song-preview" class="song-preview"><p class="lede">Preview appears here before you save.</p></div>
        <h3 style="margin-top:22px">Saved licensed songs</h3>
        <div class="songs">${custom || "<p>None yet.</p>"}</div>
      </section>
    </div>`;
}

function runView() {
  const r = state.roles;
  const service = active();
  const cues = service.items.map((item) => `<li>${item.title} <span class="pill">${item.type}</span></li>`).join("");
  return `
    <div class="top"><div><h1>Run sheet</h1><p class="lede">Who is doing what this Sunday. It shows on stage view, not on the congregation screen.</p></div><button class="ghost" onclick="window.print()">Print</button></div>
    <div class="grid-2">
      <section class="card">
        ${field("Greeter", "greeter", r.greeter)}
        ${field("Sound", "sound", r.sound)}
        ${field("Slides", "slides", r.slides)}
        ${field("Prayer", "prayer", r.prayer)}
        ${field("Preacher", "preacher", r.preacher)}
        <label>Notes</label>
        <textarea id="role-notes">${escapeText(r.notes || "")}</textarea>
        <button class="solid" id="save-roles" style="margin-top:10px">Save run sheet</button>
      </section>
      <section class="card">
        <h3>${service.name}</h3>
        <ol>${cues}</ol>
      </section>
    </div>`;
}

function field(label, key, value) {
  return `<label>${label}</label><input data-role="${key}" value="${escapeAttr(value || "")}">`;
}

function peopleView() {
  const rows = state.guests.map((g) => `
    <tr>
      <td>${escapeText(g.name)}</td>
      <td>${escapeText(g.phone || "")}</td>
      <td>${g.visit}</td>
      <td>${escapeText(g.note || "")}</td>
      <td>${new Date(g.at).toLocaleString()}</td>
      <td><button class="ghost" data-guest="${g.id}">${g.contacted ? "Contacted" : "Mark contacted"}</button></td>
    </tr>`).join("");
  const url = welcomeUrl();
  return `
    <div class="top">
      <div>
        <h1>New here</h1>
        <p class="lede">The card stays in this browser. Put the welcome page on a tablet at the door, or host this folder and point the QR at it.</p>
      </div>
      <div class="row">
        <button class="ghost" id="export-guests">Export CSV</button>
        <button class="solid" id="open-welcome">Open card</button>
      </div>
    </div>
    <div class="grid-2">
      <section class="card">
        <img class="qr" alt="QR code for the new-here card" src="${qrDataUrl(url)}">
        <p class="lede">${escapeText(url)}</p>
        <label>Public URL for the QR</label>
        <input id="public-url" value="${escapeAttr(state.publicUrl || "")}" placeholder="https://your-church-site/church-x/">
        <button class="ghost" id="save-url" style="margin-top:10px">Save URL</button>
      </section>
      <section class="card">
        <table>
          <thead><tr><th>Name</th><th>Phone</th><th>Visit</th><th>Note</th><th>When</th><th></th></tr></thead>
          <tbody>${rows || "<tr><td colspan='6'>No cards yet.</td></tr>"}</tbody>
        </table>
      </section>
    </div>`;
}


function ensureUsagePeriod() {
  if (!Array.isArray(state.usage)) state.usage = [];
  if (!Array.isArray(state.usagePeriods)) state.usagePeriods = [];
  if (!state.usagePeriodStart) {
    const times = state.usage.map((u) => u.at).filter(Boolean);
    state.usagePeriodStart = times.length
      ? new Date(Math.min(...times)).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10);
  }
}

function formatPeriodDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + (String(iso).length === 10 ? "T12:00:00" : ""));
  if (Number.isNaN(d.getTime())) return String(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function usageCounts(entries) {
  const counts = {};
  (entries || []).forEach((u) => {
    const key = u.title + "|" + (u.ccli || (u.pd ? "pd" : "missing"));
    if (!counts[key]) counts[key] = { title: u.title, author: u.author || "", ccli: u.ccli || "", pd: !!u.pd, count: 0, dates: [] };
    counts[key].count += 1;
    if (u.at) {
      const day = new Date(u.at).toISOString().slice(0, 10);
      if (!counts[key].dates.includes(day)) counts[key].dates.push(day);
    }
  });
  Object.values(counts).forEach((u) => u.dates.sort());
  return Object.values(counts).sort((a, b) => a.title.localeCompare(b.title));
}

function exportCcliCsv(entries, periodStart, periodEnd, label) {
  const rows = usageCounts(entries);
  const header = "Title,CCLI Song Number,Authors,Times Used,Dates";
  const lines = rows.map((u) => [
    u.title,
    u.pd ? "" : (u.ccli || ""),
    u.author || "",
    u.count,
    u.dates.join("; ")
  ].map(csv).join(","));
  const start = periodStart || "period";
  const end = periodEnd || new Date().toISOString().slice(0, 10);
  const name = "ccli-report-" + (label || start) + "-to-" + end + ".csv";
  download(name, [header, ...lines].join("\n"));
}

function startNewUsagePeriod() {
  ensureUsagePeriod();
  const n = (state.usage || []).length;
  const start = state.usagePeriodStart;
  askDialog({
    title: "Start a new CCLI period?",
    body: [
      "The current period started " + formatPeriodDate(start) + " and has " + n + " song " + (n === 1 ? "entry" : "entries") + ".",
      "It will be archived so you can still export it later. The live log will start empty from today."
    ],
    yes: "Start new period",
    no: "Cancel"
  }, (ok) => {
    if (!ok) return;
    const today = new Date().toISOString().slice(0, 10);
    state.usagePeriods.push({
      id: uid(),
      start: start,
      end: today,
      usage: (state.usage || []).slice()
    });
    state.usage = [];
    state.usagePeriodStart = today;
    save();
    render();
  });
}

function reportView() {
  ensureUsagePeriod();
  const rows = usageCounts(state.usage).map((u) => `
    <tr>
      <td>${escapeText(u.title)}</td>
      <td>${escapeText(u.author || "")}</td>
      <td>${u.pd ? "Public domain" : escapeText(u.ccli || "missing")}</td>
      <td>${u.count}</td>
      <td>${escapeText(u.dates.map(formatPeriodDate).join(", ") || "—")}</td>
    </tr>`).join("");
  const past = (state.usagePeriods || []).slice().reverse().map((period) => {
    const n = usageCounts(period.usage).length;
    return `
      <div class="period-card card">
        <h3>${escapeText(formatPeriodDate(period.start))} – ${escapeText(formatPeriodDate(period.end))}</h3>
        <p class="lede">${n} song${n === 1 ? "" : "s"} · ${(period.usage || []).length} entries</p>
        <button class="ghost" data-export-period="${escapeAttr(period.id)}">Export CCLI report (CSV)</button>
      </div>`;
  }).join("");
  return `
    <div class="top">
      <div>
        <h1>CCLI log</h1>
        <p class="lede">A song is counted once each time you <b>Present</b> and show it. Rehearse never counts. Export the CSV for the church's CCLI report. Public-domain hymns do not need a number.</p>
      </div>
      <div class="row">
        <button class="ghost" id="export-ccli">Export CCLI report (CSV)</button>
        <button class="ghost" onclick="window.print()">Print</button>
      </div>
    </div>
    <div class="period-bar card">
      <p class="lede"><strong>Current period</strong> started ${escapeText(formatPeriodDate(state.usagePeriodStart))}.</p>
      <button class="ghost" id="new-ccli-period">Start new period</button>
    </div>
    <section class="card">
      <table>
        <thead><tr><th>Song</th><th>Author</th><th>CCLI</th><th>Times shown</th><th>Dates</th></tr></thead>
        <tbody>${rows || "<tr><td colspan='5'>Present a service to start the log. Rehearse does not add songs here.</td></tr>"}</tbody>
      </table>
    </section>
    ${past ? `<div style="margin-top:22px"><h2>Past periods</h2><p class="lede">Archived when you started a new period. Still exportable.</p>${past}</div>` : ""}`;
}

// QR drawn locally by vendor/qrcode.js (MIT, Kazuhiko Arase), so it works offline.
function qrDataUrl(text) {
  try {
    const qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();
    return qr.createDataURL(8, 12);
  } catch (err) {
    return "";
  }
}

function setupView() {
  return `
    <div class="top"><div><h1>Church</h1><p class="lede">The name you save here is the name on the title slide and in the browser tab.</p></div></div>
    <section class="card" style="max-width:640px">
      <label>Church name on the slides</label>
      <input id="church-name" value="${escapeAttr(state.churchName || "")}" placeholder="Grace Community Church" autocomplete="organization">
      <label>Pastor</label>
      <input id="pastor-name" value="${escapeAttr(state.pastor || "")}">
      <label>Slide theme</label>
      <input type="hidden" id="theme" value="${escapeAttr(state.theme || "midnight")}">
      <div class="theme-grid">
        ${THEMES.map((t) => `<button type="button" class="theme-swatch ${t.id} ${state.theme === t.id ? "on" : ""}" data-theme="${t.id}"><span>${t.name}</span></button>`).join("")}
      </div>
      <p class="lede">These backgrounds are original. A picture you set on Media covers the theme for that Sunday.</p>
      <label>Type size</label>
      <select id="size">
        ${["small", "regular", "large"].map((t) => `<option ${state.size === t ? "selected" : ""}>${t}</option>`).join("")}
      </select>
      <label style="display:flex;gap:8px;align-items:center;margin-top:12px"><input type="checkbox" id="usage-consent" style="width:auto" ${state.usageConsent === true ? "checked" : ""}> Send a usage note to Worship With Me when we present (church name, service name, date, version)</label>
      <p class="lede" style="font-size:13px"><a href="./privacy.html" target="_blank" rel="noopener">Privacy Policy</a> · <a href="./terms.html" target="_blank" rel="noopener">Terms of Use</a></p>
      <button class="solid" id="save-setup" style="margin-top:12px">Save</button>
      <p class="lede">King James text and the built-in hymns are public domain in the United States. Licensed lyrics are the church's responsibility.</p>
      <button class="ghost" id="export-all">Export backup</button>
      <label>Restore backup</label>
      <input id="import-all" type="file" accept="application/json">
      ${hasUndo() ? `<p class="lede" style="margin-top:14px">A previous copy is saved in this browser after your last import or restore.</p><button class="ghost" id="undo-restore">Restore previous data</button>` : ""}
    </section>`;
}

function aboutView() {
  const post = "Worship With Me puts the lyrics on the projector and the run sheet on the laptop.\n\nPublic-domain hymns are built in. Your church name is the title slide. It still opens if the wifi drops.\n\nTry it this Sunday.\nhttps://churchofx4u.github.io/church-x/for-churches.html";
  return `
    <div class="top">
      <div>
        <h1>About</h1>
        <p class="lede">Worship With Me is Sunday slides for a church. Lyrics on the projector. The run sheet on the laptop.</p>
      </div>
      <div class="row">
        <a class="solid" href="./for-churches.html" style="text-decoration:none">Page for churches</a>
        <a class="ghost" href="https://x.com/realchurchx" target="_blank" rel="noopener" style="text-decoration:none">@realchurchx</a>
      </div>
    </div>
    <div class="grid-2">
      <section class="card">
        <h3>What it does</h3>
        <p>Present opens the projector window. This laptop keeps the run sheet.</p>
        <p>Public-domain hymns are built in. A licensed song ends with the author and the license number.</p>
        <p>Export Sunday and open that file at the building. If the wifi drops after the first open, it still opens.</p>
      </section>
      <section class="card">
        <h3>Price</h3>
        <p>Try it on a real Sunday. After a church that is not Church X has presented a real service, it is $9 a month or $79 a year.</p>
        <p>Payment is not turned on. There is nothing to buy yet.</p>
        <p><a href="mailto:churchofx4u@gmail.com?subject=Worship%20With%20Me">Email churchofx4u@gmail.com</a></p>
      </section>
    </div>
    <section class="card" style="max-width:640px;margin-top:18px">
      <h3>A post to share</h3>
      <textarea id="share-post" readonly>${escapeText(post)}</textarea>
      <button class="solid" id="copy-share" style="margin-top:12px">Copy post</button>
      <p id="share-note" class="lede hidden">Copied. Paste it on X with the card from the church page.</p>
    </section>`;
}

function supportBlock() {
  const href = typeof wwmSupportHref === "function" ? wwmSupportHref() : "mailto:churchofx4u@gmail.com";
  const plans = typeof wwmBillingLinks === "function" ? wwmBillingLinks() : [];
  const donate = typeof wwmDonateUrl === "function" ? wwmDonateUrl() : "";
  const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
  return `<p class="support-line">Worship With Me is kept going by Church X. <a href="${escapeAttr(href)}"${ext}>Support the work</a></p>`
    + (donate ? `<p><a class="ghost" href="${escapeAttr(donate)}" target="_blank" rel="noopener">Donate</a></p>` : "")
    + (plans.length ? `<div class="row">${plans.map((p) => `<a class="ghost" href="${escapeAttr(p.url)}" target="_blank" rel="noopener">${escapeText(p.label)}</a>`).join("")}</div>` : "");
}

function helpView() {
  return `
    <div class="top">
      <div>
        <h1>Help</h1>
        <p class="lede">Worship With Me puts the lyrics on the projector and the run sheet on the laptop. It is for one church on Sunday morning. This copy is version ${VERSION}.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card">
        <h3>Sunday morning</h3>
        <p>1. On Church, set the church name. That name is the title slide and the browser tab.</p>
        <p>2. On Sunday, add the hymns, scripture, and words. Export Sunday if you built it on another computer, then Import Sunday at the building.</p>
        <p>3. Press Present. Allow the popup. Drag that window onto the projector and make it full screen. This laptop stays on the run sheet.</p>
        <p>4. Next, Back, the arrow keys, or the space bar move the slides. B blacks the screen. T shows the church name. Esc returns to the order.</p>
        <p>Rehearse uses this screen only, with stage notes in the corner, when you do not have a second display. Rehearse never adds songs to the CCLI log.</p>
        <button class="ghost" id="open-wizard">Run the setup guide again</button>
      </section>
      <section class="card">
        <h3>Before anyone is charged</h3>
        <p>Do not charge until a church that is not you has presented a real Sunday. Then the price is $9 a month or $79 a year. Billing is not connected.</p>
        <p>The first Present sends a note to churchofx4u@gmail.com. Open the confirmation mail from FormSubmit and click it once, or later notices will not arrive.</p>
        <p>After that Sunday, record a two-minute video of the real service. That is the page people should see. A made-up video is not a substitute.</p>
        <p>The public address is still https://churchofx4u.github.io/church-x/ until you point your own domain at this site. Put that address under New here.</p>
        <p>If the building wifi drops after the app has been opened once, it still opens from the copy saved on this computer. Files you imported stay on this computer too.</p>
      </section>
    </div>
    ${hasUndo() ? `<section class="card" style="max-width:640px;margin-top:18px">
      <h3>Undo last import</h3>
      <p>Bring back the data that was here before your last import or restore. Only the most recent copy is kept.</p>
      <button class="solid" id="undo-restore">Restore previous data</button>
    </section>` : ""}
    <section class="card" style="max-width:640px;margin-top:18px">
      <h3>Ask Church X</h3>
      <p><a href="mailto:churchofx4u@gmail.com?subject=${encodeURIComponent("Help with Worship With Me " + VERSION)}">Email churchofx4u@gmail.com</a></p>
      <p><a href="https://x.com/realchurchx" target="_blank" rel="noopener">Message @realchurchx on X</a></p>
      ${supportBlock()}
      <label>Your email</label>
      <input id="help-email" placeholder="you@church.org">
      <label>What do you need?</label>
      <textarea id="help-note" placeholder="What happened, and what you expected"></textarea>
      <button class="solid" id="send-help" style="margin-top:12px">Email this note</button>
      <p id="help-thanks" class="lede hidden">Your email app should open with this note. Send it there.</p>
    </section>`;
}

function boothView() {
  const slides = slidesFor(active());
  const index = Math.max(0, Math.min(slideIndex, Math.max(0, slides.length - 1)));
  const slide = titleCard ? { title: churchName(), body: active().name, kicker: "Title" } : (slides[index] || { title: "Empty", body: "" });
  const next = slides[index + 1];
  const blocked = !houseWindow || houseWindow.closed;
  return `
    <div class="top">
      <div>
        <h1>${escapeText(active().name)}</h1>
        <p class="lede">${blocked ? "The projector window did not open. Allow pop-ups, then press Open projector." : "The projector is the other window. Keep this laptop here."}</p>
      </div>
      <div class="row">
        <button class="ghost" id="open-house">Open projector</button>
        <button class="ghost" id="open-stage-display">Stage display</button>
        <button class="ghost" id="leave-booth">Back to Sunday</button>
      </div>
    </div>
    <div class="grid-2">
      <section>
        <div class="booth-slide ${escapeAttr(state.theme || "midnight")}">
          <div class="kicker">${escapeText(slide.kicker || churchName())}</div>
          <h2>${escapeText(black ? "Black" : (slide.title || ""))}</h2>
          <p>${escapeText(black ? "" : (slide.body || ""))}</p>
        </div>
        <div class="row" style="margin-top:12px">
          <button class="ghost" id="go-back">Back</button>
          <button class="solid" id="go-next">Next</button>
          <button class="ghost" id="go-black">${black ? "Show slide" : "Black"}</button>
          <button class="ghost" id="go-title">${titleCard ? "Show slide" : "Title"}</button>
        </div>
        <p class="lede">${index + 1} / ${slides.length}. Next: ${escapeText(next ? next.title : "End")}</p>
        <section class="card booth-stage-controls" style="margin-top:14px">
          <h3>Stage display</h3>
          <p class="lede">For the band or pastor. Shows this slide, the next one, a clock, and your message — no network.</p>
          <label>Message line</label>
          <input id="stage-message" value="${escapeAttr(stageMessage)}" placeholder="Wrap up, Repeat chorus…">
          <div class="row">
            <button class="solid" id="stage-message-send">Send message</button>
            <button class="ghost" id="stage-message-clear">Clear</button>
          </div>
          <label>Countdown (minutes)</label>
          <div class="row">
            <input id="stage-countdown-mins" type="number" min="1" max="180" step="1" value="5" style="max-width:100px">
            <button class="ghost" id="stage-countdown-start">Start</button>
            <button class="ghost" id="stage-countdown-clear">Clear timer</button>
          </div>
          <p class="lede" style="font-size:13px;margin-top:8px">${countdownEnd && countdownEnd > Date.now() ? ("Timer ends at " + formatClock(new Date(countdownEnd)) + ".") : "No timer running."} Theme on the stage window: ${stageTheme === "light" ? "light" : "dark"}.</p>
        </section>
      </section>
      <section class="card">
        <h3>Run sheet</h3>
        <p>Greeter ${escapeText(state.roles.greeter || "—")}</p>
        <p>Sound ${escapeText(state.roles.sound || "—")}</p>
        <p>Slides ${escapeText(state.roles.slides || "—")}</p>
        <p>Prayer ${escapeText(state.roles.prayer || "—")}</p>
        <p>Preacher ${escapeText(state.roles.preacher || "—")}</p>
        <p>${escapeText(state.roles.notes || "")}</p>
      </section>
    </div>`;
}

function welcomeView() {
  return `
    <div class="top"><div><h1>Welcome to ${escapeText(churchName())}</h1><p class="lede">Tell us you were here. This stays with the church. It is not posted.</p></div></div>
    <section class="card" style="max-width:560px">
      <label>Name</label><input id="guest-name">
      <label>Phone</label><input id="guest-phone">
      <label>Visit</label>
      <select id="guest-visit"><option>First time</option><option>Returning</option></select>
      <label>Prayer or note, optional</label>
      <textarea id="guest-note"></textarea>
      <button class="solid" id="save-guest" style="margin-top:12px">I'm here</button>
      <p id="guest-thanks" class="lede hidden">Got it. Someone from the church can follow up.</p>
      <p class="lede" style="font-size:13px;margin-top:12px">Your details stay with ${escapeText(churchName())} on this device and are only used to follow up with you. They are not posted or shared. <a href="./privacy.html" target="_blank" rel="noopener">Privacy</a></p>
    </section>`;
}

function welcomeUrl() {
  if (state.publicUrl) return state.publicUrl.replace(/\/?$/, "/") + "index.html#welcome";
  return location.href.split("#")[0] + "#welcome";
}

function bind() {
  document.querySelectorAll("nav button").forEach((btn) => btn.onclick = () => setView(btn.dataset.view));
  const byId = (id) => document.getElementById(id);
  if (byId("open-wizard")) byId("open-wizard").onclick = () => openWizard(false);
  if (byId("present")) byId("present").onclick = () => startPresent();
  if (byId("stage")) byId("stage").onclick = () => openStage(true);
  if (byId("export-ccli")) byId("export-ccli").onclick = () => {
    ensureUsagePeriod();
    exportCcliCsv(state.usage, state.usagePeriodStart, new Date().toISOString().slice(0, 10), "current");
  };
  if (byId("new-ccli-period")) byId("new-ccli-period").onclick = startNewUsagePeriod;
  document.querySelectorAll("[data-export-period]").forEach((btn) => btn.onclick = () => {
    const period = (state.usagePeriods || []).find((p) => p.id === btn.dataset.exportPeriod);
    if (!period) return;
    exportCcliCsv(period.usage, period.start, period.end, period.start);
  });
  if (byId("export-sunday")) byId("export-sunday").onclick = exportSunday;
  if (byId("backup-now")) byId("backup-now").onclick = exportSunday;
  if (byId("backup-later")) byId("backup-later").onclick = () => {
    localStorage.setItem(BACKUP_SNOOZE, String(Date.now() + 3 * DAY));
    const el = byId("backup-reminder");
    if (el) el.remove();
  };
  if (byId("import-sunday")) byId("import-sunday").onchange = importSunday;
  if (byId("go-next")) byId("go-next").onclick = () => step(1);
  if (byId("go-back")) byId("go-back").onclick = () => step(-1);
  if (byId("go-black")) byId("go-black").onclick = () => { black = !black; titleCard = false; publishLive(); render(); };
  if (byId("go-title")) byId("go-title").onclick = () => { titleCard = !titleCard; black = false; publishLive(); render(); };
  if (byId("open-house")) byId("open-house").onclick = () => { publishLive(); houseWindow = window.open("./index.html?screen=house", "wwm-house"); render(); };
  if (byId("open-stage-display")) byId("open-stage-display").onclick = () => { openStageDisplay(); render(); };
  if (byId("stage-message-send")) byId("stage-message-send").onclick = setStageMessageFromForm;
  if (byId("stage-message-clear")) byId("stage-message-clear").onclick = clearStageMessage;
  if (byId("stage-countdown-start")) byId("stage-countdown-start").onclick = () => {
    const mins = byId("stage-countdown-mins") ? byId("stage-countdown-mins").value : 5;
    startCountdownMinutes(mins);
  };
  if (byId("stage-countdown-clear")) byId("stage-countdown-clear").onclick = clearCountdown;
  if (byId("leave-booth")) byId("leave-booth").onclick = () => setView("plan");
  if (byId("service-pick")) byId("service-pick").onchange = (e) => { state.activeId = e.target.value; save(); render(); };
  if (byId("new-service")) byId("new-service").onclick = () => {
    const s = sampleService();
    s.name = "Sunday gathering";
    state.services.unshift(s);
    state.activeId = s.id;
    save(); render();
  };
  if (byId("service-name")) byId("service-name").onchange = (e) => { active().name = e.target.value; save(); };
  if (byId("service-date")) byId("service-date").onchange = (e) => { active().date = e.target.value; save(); render(); };
  document.querySelectorAll("[data-del]").forEach((btn) => btn.onclick = () => { active().items.splice(+btn.dataset.del, 1); save(); render(); });
  document.querySelectorAll("[data-up]").forEach((btn) => btn.onclick = () => move(+btn.dataset.up, -1));
  document.querySelectorAll("[data-down]").forEach((btn) => btn.onclick = () => move(+btn.dataset.down, 1));
  if (byId("add-hymn")) byId("add-hymn").onclick = () => {
    const hymn = HYMNS.find((h) => h.title === byId("hymn-pick").value);
    active().items.push({ id: uid(), type: "hymn", ...hymn, ccli: "" });
    save(); render();
  };
  if (byId("scripture-pick")) byId("scripture-pick").onchange = () => {
    const passage = SCRIPTURES.find((s) => s.ref === byId("scripture-pick").value);
    if (!passage) return;
    byId("scripture-ref").value = passage.ref;
    byId("scripture-text").value = passage.text;
  };
  if (byId("add-scripture")) byId("add-scripture").onclick = () => {
    const title = byId("scripture-ref").value.trim();
    const body = byId("scripture-text").value.trim();
    if (!title || !body) return;
    active().items.push({ id: uid(), type: "scripture", title, body });
    save(); render();
  };
  if (byId("add-word")) byId("add-word").onclick = () => {
    active().items.push({ id: uid(), type: "word", title: byId("word-title").value || "Words", body: byId("word-body").value });
    save(); render();
  };
  if (byId("add-youtube")) byId("add-youtube").onclick = () => addYoutube(byId("yt-url").value);
  if (byId("watch-now")) byId("watch-now").onclick = () => {
    const id = youtubeId(byId("watch-url").value);
    byId("watch-box").innerHTML = id ? `<iframe class="watch" src="https://www.youtube.com/embed/${id}?rel=0" allow="encrypted-media; fullscreen" allowfullscreen></iframe>` : "<p>That is not a YouTube link.</p>";
  };
  if (byId("watch-add")) byId("watch-add").onclick = () => addYoutube(byId("watch-url").value);
  if (byId("add-video")) byId("add-video").onclick = async () => {
    const file = byId("local-video").files[0];
    if (!file) return;
    const id = uid();
    await saveMedia(id, file);
    active().items.push({ id: uid(), type: "video", title: file.name, mediaId: id });
    save(); setView("plan");
  };
  if (byId("set-photo")) byId("set-photo").onclick = async () => {
    const file = byId("local-photo").files[0];
    if (!file) return;
    const id = uid();
    await saveMedia(id, file);
    active().backgroundId = id;
    save(); render();
  };
  if (byId("clear-photo")) byId("clear-photo").onclick = () => { active().backgroundId = ""; save(); render(); };
  if (byId("copy-share")) byId("copy-share").onclick = async () => {
    const text = byId("share-post").value;
    const note = byId("share-note");
    try {
      await navigator.clipboard.writeText(text);
      note.textContent = "Copied. Paste it on X with the card from the church page.";
    } catch (err) {
      note.textContent = "Select the post and copy it.";
    }
    note.classList.remove("hidden");
  };
  if (byId("send-help")) byId("send-help").onclick = () => {
    const from = byId("help-email").value.trim();
    const note = byId("help-note").value.trim();
    if (!from || !note) {
      byId("help-thanks").textContent = "Add your email and what you need, or use the email link above.";
      byId("help-thanks").classList.remove("hidden");
      return;
    }
    location.href = "mailto:churchofx4u@gmail.com?subject=" + encodeURIComponent("Help with Worship With Me " + VERSION) + "&body=" + encodeURIComponent("From: " + from + "\nVersion: " + VERSION + "\n\n" + note);
    byId("help-thanks").textContent = "Your email app should open with this note. Send it there.";
    byId("help-thanks").classList.remove("hidden");
  };
  if (byId("preview-licensed")) byId("preview-licensed").onclick = () => {
    const song = buildSongFromPasteForm();
    const box = byId("song-preview");
    if (box) box.innerHTML = songPreviewHtml(song);
  };
  if (byId("save-licensed")) byId("save-licensed").onclick = () => saveSongFromPasteForm();
  if (byId("import-songs")) byId("import-songs").onchange = importSongFiles;
  if (byId("lic-lyrics")) {
    byId("lic-lyrics").onblur = () => {
      if (!byId("lic-lyrics").value.trim()) return;
      const box = byId("song-preview");
      if (box) box.innerHTML = songPreviewHtml(buildSongFromPasteForm());
    };
  }
  document.querySelectorAll("[data-use-song]").forEach((btn) => btn.onclick = () => {
    const song = state.songs.find((s) => s.id === btn.dataset.useSong);
    active().items.push({ ...song, id: uid(), type: "hymn" });
    save(); setView("plan");
  });
  if (byId("save-roles")) byId("save-roles").onclick = () => {
    document.querySelectorAll("[data-role]").forEach((input) => { state.roles[input.dataset.role] = input.value; });
    state.roles.notes = byId("role-notes").value;
    save();
  };
  if (byId("save-url")) byId("save-url").onclick = () => { state.publicUrl = byId("public-url").value.trim(); save(); render(); };
  if (byId("open-welcome")) byId("open-welcome").onclick = () => setView("welcome");
  if (byId("export-guests")) byId("export-guests").onclick = exportGuests;
  document.querySelectorAll("[data-guest]").forEach((btn) => btn.onclick = () => {
    const guest = state.guests.find((g) => g.id === btn.dataset.guest);
    guest.contacted = !guest.contacted;
    save(); render();
  });
  if (byId("save-guest")) byId("save-guest").onclick = () => {
    const name = byId("guest-name").value.trim();
    if (!name) return;
    state.guests.unshift({ id: uid(), name, phone: byId("guest-phone").value.trim(), visit: byId("guest-visit").value, note: byId("guest-note").value.trim(), at: Date.now(), contacted: false });
    save();
    byId("guest-thanks").classList.remove("hidden");
  };
  if (byId("save-setup")) byId("save-setup").onclick = () => {
    state.churchName = byId("church-name").value.trim();
    state.pastor = byId("pastor-name").value.trim();
    state.theme = byId("theme").value;
    state.size = byId("size").value;
    if (byId("usage-consent")) state.usageConsent = byId("usage-consent").checked;
    save(); render();
  };
  document.querySelectorAll("[data-theme]").forEach((btn) => btn.onclick = () => {
    byId("theme").value = btn.dataset.theme;
    document.querySelectorAll("[data-theme]").forEach((other) => other.classList.toggle("on", other === btn));
  });
  if (byId("export-all")) byId("export-all").onclick = () => { download("church-x-backup.json", JSON.stringify(state, null, 2)); markBackedUp(); };
  if (byId("import-all")) byId("import-all").onchange = restoreBackupFile;
  if (byId("undo-restore")) byId("undo-restore").onclick = restoreUndo;
}

function scriptureParts(text) {
  const blocks = String(text || "").split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
  const source = blocks.length ? blocks : [String(text || "").trim()];
  const parts = [];
  source.forEach((block) => {
    if (block.length <= 420) { parts.push(block); return; }
    const sentences = block.split(/(?<=[.!?;])\s+/);
    let chunk = "";
    sentences.forEach((sentence) => {
      if ((chunk + " " + sentence).trim().length > 420 && chunk) {
        parts.push(chunk.trim());
        chunk = sentence;
      } else {
        chunk = (chunk + " " + sentence).trim();
      }
    });
    if (chunk) parts.push(chunk.trim());
  });
  return parts.filter(Boolean);
}

function addYoutube(url) {
  const videoId = youtubeId(url);
  if (!videoId) return;
  active().items.push({ id: uid(), type: "youtube", title: "YouTube", url, videoId });
  save(); setView("plan");
}

function move(index, dir) {
  const items = active().items;
  const next = index + dir;
  if (next < 0 || next >= items.length) return;
  [items[index], items[next]] = [items[next], items[index]];
  save(); render();
}

function startPresent() {
  slideIndex = 0;
  black = false;
  titleCard = false;
  showNotes = false;
  countingUsage = true;
  logged = new Set();
  publishLive();
  houseWindow = window.open("./index.html?screen=house", "wwm-house");
  if (typeof wwmCountEvent === "function") wwmCountEvent("present-started", "Present started");
  setView("booth");
  const today = new Date().toISOString().slice(0, 10);
  if (state.usageConsent === undefined) {
    askDialog({
      title: "Help us know Worship With Me is working",
      body: ["May we get a short note when your church presents? It sends only your church name, the service name, the date, and the app version to churchofx4u@gmail.com, at most once a day. No songs, lyrics, or visitor cards.", "You can change this anytime on the Church screen."],
      yes: "Yes, send the note",
      no: "No thanks"
    }, (answer) => {
      state.usageConsent = answer;
      save();
      sendUsageNote(today);
    });
    return;
  }
  sendUsageNote(today);
}

function sendUsageNote(today) {
  if (state.usageConsent === true && localStorage.getItem("churchx.notified") !== today) {
    localStorage.setItem("churchx.notified", today);
    notifyUse("Sunday presented", churchName() + " presented " + active().name + " on " + today);
  }
}

function step(dir) {
  const slides = slidesFor(active());
  slideIndex = Math.max(0, Math.min(slides.length - 1, slideIndex + dir));
  black = false;
  titleCard = false;
  noteShown();
  publishLive();
  if (document.querySelector("#stage").classList.contains("on")) paintSlide();
  if (view === "booth") render();
}

function noteShown() {
  const slides = slidesFor(active());
  const slide = slides[slideIndex];
  if (!countingUsage || isHouse || isStage) return;
  if (slide && slide.item && slide.item.type === "hymn" && !logged.has(slide.item.id)) {
    logged.add(slide.item.id);
    ensureUsagePeriod();
    state.usage.push({ title: slide.item.title, author: slide.item.author || "", ccli: slide.item.ccli || "", pd: !!slide.item.pd, at: Date.now() });
    save();
  }
}

function publishLive() {
  localStorage.setItem(LIVE, JSON.stringify({
    slideIndex,
    black,
    titleCard,
    serviceId: state.activeId,
    stageMessage: stageMessage || "",
    countdownEnd: countdownEnd || null,
    stageTheme: stageTheme === "light" ? "light" : "dark"
  }));
  if (liveChannel) liveChannel.postMessage({ type: "live" });
}

function applyLive() {
  state = load();
  setTitle();
  let live = null;
  try { live = JSON.parse(localStorage.getItem(LIVE) || "null"); } catch (err) { live = null; }
  if (live) {
    if (live.serviceId) state.activeId = live.serviceId;
    slideIndex = live.slideIndex || 0;
    black = !!live.black;
    titleCard = !!live.titleCard;
    if (typeof live.stageMessage === "string") stageMessage = live.stageMessage;
    countdownEnd = live.countdownEnd || null;
    if (live.stageTheme === "light" || live.stageTheme === "dark") stageTheme = live.stageTheme;
  }
  showNotes = false;
  if (isStage) paintStageDisplay();
  else paintSlide();
}

function formatClock(date) {
  try {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch (err) {
    return date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  }
}

function formatCountdown(msLeft) {
  if (msLeft <= 0) return "0:00";
  const total = Math.ceil(msLeft / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m + ":" + String(s).padStart(2, "0");
}

function slidePlain(slide) {
  if (!slide) return { kicker: "", title: "End", body: "" };
  return {
    kicker: slide.kicker || "",
    title: slide.title || "",
    body: slide.body || ""
  };
}

function paintStageDisplay() {
  const root = document.getElementById("stage-display");
  if (!root) return;
  root.hidden = false;
  root.classList.toggle("light", stageTheme === "light");
  const themeBtn = document.getElementById("sd-theme-toggle");
  if (themeBtn) themeBtn.textContent = stageTheme === "light" ? "Dark mode" : "Light mode";

  const slides = slidesFor(active());
  const index = Math.max(0, Math.min(slideIndex, Math.max(0, slides.length - 1)));
  const current = titleCard
    ? { kicker: "Title", title: churchName(), body: active().name }
    : (black ? { kicker: "", title: "", body: "" } : slidePlain(slides[index]));
  const next = black || titleCard ? null : slidePlain(slides[index + 1]);

  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ""; };
  set("sd-cur-kicker", current.kicker);
  set("sd-cur-title", current.title);
  set("sd-cur-body", current.body);
  set("sd-next-kicker", next ? next.kicker : "");
  set("sd-next-title", next ? next.title : "End");
  set("sd-next-body", next ? next.body : "");

  const msg = document.getElementById("sd-message");
  if (msg) {
    const text = (stageMessage || "").trim();
    msg.hidden = !text;
    msg.textContent = text;
  }
  tickStageClock();
}

function tickStageClock() {
  const clock = document.getElementById("sd-clock");
  if (clock) clock.textContent = formatClock(new Date());
  const cd = document.getElementById("sd-countdown");
  if (!cd) return;
  if (!countdownEnd) {
    cd.hidden = true;
    cd.textContent = "";
    return;
  }
  const left = countdownEnd - Date.now();
  cd.hidden = false;
  cd.textContent = left <= 0 ? "0:00" : formatCountdown(left);
}

function startStageClock() {
  if (stageClockTimer) clearInterval(stageClockTimer);
  tickStageClock();
  stageClockTimer = setInterval(tickStageClock, 250);
}

function openStageDisplay() {
  publishLive();
  stageWindow = window.open("./index.html?screen=stage", "wwm-stage");
}

function setStageMessageFromForm() {
  const input = document.getElementById("stage-message");
  stageMessage = input ? input.value : "";
  publishLive();
  if (isStage) paintStageDisplay();
  else render();
}

function clearStageMessage() {
  stageMessage = "";
  const input = document.getElementById("stage-message");
  if (input) input.value = "";
  publishLive();
  if (isStage) paintStageDisplay();
  else render();
}

function startCountdownMinutes(mins) {
  const n = Number(mins);
  if (!n || n < 0) { countdownEnd = null; }
  else { countdownEnd = Date.now() + Math.round(n * 60 * 1000); }
  publishLive();
  if (isStage) paintStageDisplay();
  else render();
}

function clearCountdown() {
  countdownEnd = null;
  publishLive();
  if (isStage) paintStageDisplay();
  else render();
}

function toggleStageTheme() {
  stageTheme = stageTheme === "light" ? "dark" : "light";
  publishLive();
  if (isStage) paintStageDisplay();
}

function exportSunday() {
  const service = active();
  const name = "worship-with-me-" + (service.date || "sunday") + ".json";
  download(name, JSON.stringify(state, null, 2));
  markBackedUp();
  fileNote = "Saved " + name + ". Import that file on the church computer.";
  const note = document.getElementById("file-note");
  if (note) note.textContent = fileNote;
}

async function importSunday(event) {
  const input = event.target;
  const file = input.files && input.files[0];
  if (!file) return;
  let data;
  try {
    data = JSON.parse(await file.text());
    if (!data || !Array.isArray(data.services) || !data.services.length) throw new Error("bad");
  } catch (err) {
    fileNote = "That file is not a Worship With Me Sunday.";
    const note = document.getElementById("file-note");
    if (note) note.textContent = fileNote;
    input.value = "";
    return;
  }
  const count = data.services.length;
  const label = count === 1
    ? (data.services[0].name || "Sunday") + (data.services[0].date ? " (" + data.services[0].date + ")" : "")
    : count + " Sundays";
  choiceDialog({
    title: "Import " + file.name + "?",
    body: [
      "This file has " + label + ".",
      "Add as new Sunday keeps what you already have and adds the Sunday(s) from the file.",
      "Replace everything overwrites your church name, Sundays, songs, visitor cards, and settings. A one-step undo copy is saved first when there is room."
    ],
    choices: [
      { id: "add", label: "Add as new Sunday", solid: true },
      { id: "replace", label: "Replace everything" },
      { id: "cancel", label: "Cancel" }
    ]
  }, (pick) => {
    input.value = "";
    if (!pick || pick === "cancel") return;
    try {
      const hadUndo = applyImportedData(data, pick === "add" ? "add" : "replace");
      fileNote = pick === "add"
        ? "Added " + label + " from " + file.name + "."
        : "Replaced everything with " + file.name + ".";
      render();
      showToast(
        pick === "add" ? "Sunday added" : "Import complete",
        hadUndo ? fileNote + " You can undo this." : fileNote + " Could not save an undo copy (browser storage is full). Export a backup if you need one.",
        hadUndo ? "Undo import" : null
      );
    } catch (err) {
      fileNote = err && err.message === "quota"
        ? "Import failed: this browser is out of space."
        : "That file is not a Worship With Me Sunday.";
      render();
    }
  });
}

async function restoreBackupFile(event) {
  const input = event.target;
  const file = input.files && input.files[0];
  if (!file) return;
  let data;
  try {
    data = JSON.parse(await file.text());
    if (!data || !Array.isArray(data.services)) throw new Error("bad");
  } catch (err) {
    showToast("Not a Worship With Me backup", "Pick an Export backup file from this app.", null);
    input.value = "";
    return;
  }
  choiceDialog({
    title: "Restore this backup?",
    body: [
      "This replaces your church name, Sundays, songs, visitor cards, and settings with the file “" + file.name + "”.",
      "A one-step undo copy of what you have now is saved first when there is room."
    ],
    choices: [
      { id: "replace", label: "Replace everything", solid: true },
      { id: "cancel", label: "Cancel" }
    ]
  }, (pick) => {
    input.value = "";
    if (pick !== "replace") return;
    try {
      const hadUndo = applyImportedData(data, "replace");
      fileNote = "Restored backup " + file.name + ".";
      render();
      showToast(
        "Backup restored",
        hadUndo ? "Your previous data can be brought back once." : "Could not save an undo copy (browser storage is full).",
        hadUndo ? "Restore previous data" : null
      );
    } catch (err) {
      showToast("Restore failed", "This browser is out of space. Export what you can, free storage, then try again.", null);
    }
  });
}

function openStage(notes) {
  slideIndex = 0;
  black = false;
  titleCard = false;
  showNotes = notes;
  countingUsage = false; // Rehearse must never feed the CCLI log
  logged = new Set();
  document.querySelector("#stage").classList.add("on");
  const badge = document.querySelector("#rehearse-badge");
  if (badge) badge.classList.toggle("hidden", !notes);
  noteShown();
  paintSlide();
}

function notifyUse(kind, detail) {
  fetch("https://formsubmit.co/ajax/churchofx4u@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: "Worship With Me: " + kind,
      _captcha: "false",
      _template: "table",
      use: kind,
      detail: detail,
      version: VERSION,
      app: "https://churchofx4u.github.io/church-x/"
    })
  }).catch(() => {});
}

function paintSlide() {
  const stage = document.querySelector("#stage");
  const slides = slidesFor(active());
  if (!slides.length) return;
  slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
  const slide = titleCard && (isHouse || view === "booth")
    ? { kind: "title", title: churchName(), body: active().name, kicker: "Worship With Me" }
    : slides[slideIndex];
  stage.className = "stage on " + state.theme + " " + state.size + (!isHouse && showNotes ? " stage-notes" : "");
  const badge = document.querySelector("#rehearse-badge");
  if (badge) badge.classList.toggle("hidden", !(!isHouse && showNotes && !countingUsage));
  const screen = document.querySelector("#screen");
  screen.style.backgroundImage = "";
  screen.classList.remove("has-photo", "is-credit");
  if (!black && slide.kind === "credit") screen.classList.add("is-credit");
  if (black) {
    screen.innerHTML = "";
  } else {
    applyBackground(screen);
    if (slide.item && slide.item.type === "youtube" && isHouse) {
      screen.innerHTML = `<iframe class="watch" src="https://www.youtube.com/embed/${slide.item.videoId}?rel=0&autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    } else if (slide.item && slide.item.type === "youtube") {
      screen.innerHTML = "<h2>YouTube</h2><p>Playing on the projector.</p>";
    } else if (slide.item && slide.item.type === "video" && isHouse) {
      screen.innerHTML = "<p>Loading video from this computer...</p>";
      loadMedia(slide.item.mediaId).then((file) => {
        if (!file) { screen.innerHTML = "<h2>That video is not on this computer.</h2>"; return; }
        const url = URL.createObjectURL(file);
        screen.innerHTML = `<video class="watch" src="${url}" controls autoplay></video>`;
      });
    } else if (slide.item && slide.item.type === "video") {
      screen.innerHTML = "<h2>" + escapeText(slide.item.title || "Video") + "</h2><p>Playing on the projector.</p>";
    } else {
      screen.innerHTML = `<div class="kicker">${escapeText(slide.kicker || churchName())}</div><h2>${escapeText(slide.title || "")}</h2><p>${escapeText(slide.body || "")}</p>`;
    }
  }
  document.querySelector("#pos").textContent = (slideIndex + 1) + " / " + slides.length;
  document.querySelector("#notes").innerHTML = `
    <b>Next</b>
    <div>${escapeText(slides[slideIndex + 1] ? slides[slideIndex + 1].title : "End")}</div>
    <b style="margin-top:8px">Team</b>
    <div>Greeter ${escapeText(state.roles.greeter || "—")}</div>
    <div>Sound ${escapeText(state.roles.sound || "—")}</div>
    <div>Slides ${escapeText(state.roles.slides || "—")}</div>
    <div>Prayer ${escapeText(state.roles.prayer || "—")}</div>
    <div>${escapeText(state.roles.notes || "")}</div>`;
}

async function applyBackground(screen) {
  const file = await loadMedia(active().backgroundId);
  if (!file) return;
  const url = URL.createObjectURL(file);
  screen.style.backgroundImage = `linear-gradient(rgba(12,11,10,.5), rgba(12,11,10,.5)), url("${url}")`;
  screen.classList.add("has-photo");
}

function exportGuests() {
  const header = "name,phone,visit,note,when,contacted";
  const lines = state.guests.map((g) => [g.name, g.phone, g.visit, g.note, new Date(g.at).toISOString(), g.contacted].map(csv).join(","));
  download("church-x-guests.csv", [header, ...lines].join("\n"));
}

function csv(value) {
  return `"${String(value || "").replaceAll('"', '""')}"`;
}

function download(name, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  a.download = name;
  a.click();
}

function escapeText(value) {
  return String(value || "").replace(/[&<>]/g, (ch) => ({ "&": "\u0026amp;", "<": "\u0026lt;", ">": "\u0026gt;" }[ch]));
}
function escapeAttr(value) {
  return escapeText(value).replaceAll('"', "\u0026quot;");
}

document.addEventListener("keydown", (e) => {
  if (isHouse || isStage) return;
  const tag = (e.target && e.target.tagName) || "";
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
  const stage = document.querySelector("#stage");
  const stageOn = stage.classList.contains("on");
  if (!stageOn && view !== "booth") return;
  const slides = slidesFor(active());
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    slideIndex = Math.min(slides.length - 1, slideIndex + 1);
    black = false;
    titleCard = false;
  } else if (e.key === "ArrowLeft") {
    slideIndex = Math.max(0, slideIndex - 1);
    black = false;
    titleCard = false;
  } else if (e.key.toLowerCase() === "b") {
    black = !black;
  } else if (e.key.toLowerCase() === "t") {
    if (view === "booth") { titleCard = !titleCard; black = false; }
    else showNotes = !showNotes;
  } else if (e.key === "Escape") {
    stage.classList.remove("on");
    if (view === "booth") setView("plan");
    return;
  } else return;
  noteShown();
  if (view === "booth") publishLive();
  if (stageOn) paintSlide();
  if (view === "booth") render();
});

document.querySelector("#exit-stage").onclick = () => {
  document.querySelector("#stage").classList.remove("on");
  const badge = document.querySelector("#rehearse-badge");
  if (badge) badge.classList.add("hidden");
};

if (!isHouse && !isStage && typeof wwmGoatLoad === "function") wwmGoatLoad();

if (isStage) {
  document.body.classList.add("stage-mode");
  document.title = "Stage display · Worship With Me";
  const sd = document.getElementById("stage-display");
  if (sd) sd.hidden = false;
  const themeBtn = document.getElementById("sd-theme-toggle");
  if (themeBtn) themeBtn.onclick = toggleStageTheme;
  window.addEventListener("storage", (event) => {
    if (event.key === KEY || event.key === LIVE) applyLive();
  });
  if (liveChannel) liveChannel.onmessage = () => applyLive();
  applyLive();
  startStageClock();
} else if (isHouse) {
  document.body.classList.add("house");
  document.querySelector("#stage").classList.add("on");
  window.addEventListener("storage", (event) => {
    if (event.key === KEY || event.key === LIVE) applyLive();
  });
  if (liveChannel) liveChannel.onmessage = () => applyLive();
  applyLive();
} else {
  document.querySelectorAll("nav button").forEach((btn) => btn.onclick = () => setView(btn.dataset.view));
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  render();
}
