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

function load() {
  const saved = localStorage.getItem(KEY);
  if (saved) return JSON.parse(saved);
  return {
    churchName: "Church X",
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
if (!state.activeId) state.activeId = state.services[0].id;
const isHouse = new URLSearchParams(location.search).get("screen") === "house";
const LIVE = "churchx.live";
let view = location.hash === "#welcome" ? "welcome" : "plan";
let slideIndex = 0;
let black = false;
let titleCard = false;
let showNotes = false;
let logged = new Set();
let houseWindow = null;
let liveChannel = null;
let fileNote = "";
try { liveChannel = new BroadcastChannel("wwm-sunday"); } catch (err) { liveChannel = null; }

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  setTitle();
}

function setTitle() {
  const name = (state.churchName || "Worship With Me").trim();
  document.title = name + " · Worship With Me";
}

function active() {
  return state.services.find((s) => s.id === state.activeId) || state.services[0];
}

function slidesFor(service) {
  const slides = [{ kind: "title", title: state.churchName, body: service.name, kicker: service.date || "Sunday" }];
  service.items.forEach((item) => {
    if (item.type === "hymn") {
      slides.push({ kind: "title", title: item.title, body: item.author || "", item });
      (item.verses || []).forEach((verse, i) => {
        slides.push({ kind: "verse", title: item.title, body: verse, kicker: "Verse " + (i + 1), item });
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
  const root = document.querySelector("#view");
  const nav = document.querySelectorAll("nav button");
  nav.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === view));
  document.querySelector("#church-label").textContent = state.churchName || "Church X";
  setTitle();
  if (view === "plan") root.innerHTML = planView();
  if (view === "media") root.innerHTML = mediaView();
  if (view === "songs") root.innerHTML = songsView();
  if (view === "run") root.innerHTML = runView();
  if (view === "people") root.innerHTML = peopleView();
  if (view === "report") root.innerHTML = reportView();
  if (view === "setup") root.innerHTML = setupView();
  if (view === "help") root.innerHTML = helpView();
  if (view === "welcome") root.innerHTML = welcomeView();
  if (view === "booth") root.innerHTML = boothView();
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
        <p class="lede">Build the order here. Present opens the lyrics on the projector and leaves this laptop on the run sheet. Export the Sunday file if you planned it on another computer.</p>
      </div>
      <div class="row">
        <button class="solid" id="present">Present</button>
        <button class="ghost" id="stage">Rehearse</button>
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

function songsView() {
  const custom = state.songs.map((song) => `
    <div class="song">
      <div><strong>${escapeText(song.title)}</strong><div><small>${escapeText(song.author || "Author")}${song.copyright ? " · " + escapeText(song.copyright) : ""} · CCLI ${escapeText(song.ccli || "missing")}</small></div></div>
      <button class="ghost" data-use-song="${song.id}">Add to Sunday</button>
    </div>`).join("");
  return `
    <div class="top"><div><h1>Songs</h1><p class="lede">Public-domain hymns are built in. Licensed lyrics stay on this church's machine. Paste them from SongSelect or your OneLicense catalog only if this church holds that license. Streaming the lyrics may need a separate streaming license.</p></div></div>
    <div class="grid-2">
      <section class="card">
        <h3>Add a licensed song</h3>
        <label>Title</label><input id="lic-title">
        <label>Author</label><input id="lic-author">
        <label>License number</label><input id="lic-ccli" placeholder="CCLI or OneLicense number">
        <label>Copyright line</label><input id="lic-copy" placeholder="© 2011 Publisher name">
        <label>Lyrics, one verse per block, blank line between verses</label>
        <textarea id="lic-lyrics"></textarea>
        <button class="solid" id="save-licensed" style="margin-top:10px">Save song</button>
      </section>
      <section class="card">
        <h3>Saved licensed songs</h3>
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
        <img class="qr" alt="QR code for the new-here card" src="https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=12&data=${encodeURIComponent(url)}">
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

function reportView() {
  const counts = {};
  state.usage.forEach((u) => {
    const key = u.title + "|" + (u.ccli || "pd");
    counts[key] = counts[key] || { ...u, count: 0 };
    counts[key].count += 1;
  });
  const rows = Object.values(counts).map((u) => `
    <tr>
      <td>${escapeText(u.title)}</td>
      <td>${escapeText(u.author || "")}</td>
      <td>${u.pd ? "Public domain" : escapeText(u.ccli || "missing")}</td>
      <td>${u.count}</td>
    </tr>`).join("");
  return `
    <div class="top"><div><h1>CCLI log</h1><p class="lede">A song is counted once each time you present the service and show it. Copy this into the church's CCLI report. Public-domain hymns do not need a number.</p></div><button class="ghost" onclick="window.print()">Print</button></div>
    <section class="card">
      <table>
        <thead><tr><th>Song</th><th>Author</th><th>CCLI</th><th>Times shown</th></tr></thead>
        <tbody>${rows || "<tr><td colspan='4'>Present a service to start the log.</td></tr>"}</tbody>
      </table>
    </section>`;
}

function setupView() {
  return `
    <div class="top"><div><h1>Church</h1><p class="lede">The name you save here is the name on the title slide and in the browser tab. Billing is not connected. Charge $9 a month or $79 a year only after a church that is not you has presented a real Sunday.</p></div></div>
    <section class="card" style="max-width:640px">
      <label>Church name on the slides</label>
      <input id="church-name" value="${escapeAttr(state.churchName)}">
      <label>Pastor</label>
      <input id="pastor-name" value="${escapeAttr(state.pastor || "")}">
      <label>Slide theme</label>
      <select id="theme">
        ${["midnight", "parchment", "harvest", "river"].map((t) => `<option ${state.theme === t ? "selected" : ""}>${t}</option>`).join("")}
      </select>
      <label>Type size</label>
      <select id="size">
        ${["small", "regular", "large"].map((t) => `<option ${state.size === t ? "selected" : ""}>${t}</option>`).join("")}
      </select>
      <button class="solid" id="save-setup" style="margin-top:12px">Save</button>
      <p class="lede">King James text and the built-in hymns are public domain in the United States. Licensed lyrics are the church's responsibility.</p>
      <button class="ghost" id="export-all">Export backup</button>
      <label>Restore backup</label>
      <input id="import-all" type="file" accept="application/json">
    </section>`;
}

function helpView() {
  return `
    <div class="top">
      <div>
        <h1>Help</h1>
        <p class="lede">Worship With Me puts the lyrics on the projector and the run sheet on the laptop. It is for one church on Sunday morning.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card">
        <h3>Sunday morning</h3>
        <p>1. On Church, set the church name. That name is the title slide and the browser tab.</p>
        <p>2. On Sunday, add the hymns, scripture, and words. Export Sunday if you built it on another computer, then Import Sunday at the building.</p>
        <p>3. Press Present. Allow the popup. Drag that window onto the projector and make it full screen. This laptop stays on the run sheet.</p>
        <p>4. Next, Back, the arrow keys, or the space bar move the slides. B blacks the screen. T shows the church name. Esc returns to the order.</p>
        <p>Rehearse uses this screen only, with stage notes in the corner, when you do not have a second display.</p>
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
    <section class="card" style="max-width:640px;margin-top:18px">
      <h3>Ask Church X</h3>
      <p><a href="mailto:churchofx4u@gmail.com?subject=Help%20with%20Worship%20With%20Me">Email churchofx4u@gmail.com</a></p>
      <p><a href="https://x.com/realchurchx" target="_blank" rel="noopener">Message @realchurchx on X</a></p>
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
  const slide = titleCard ? { title: state.churchName, body: active().name, kicker: "Title" } : (slides[index] || { title: "Empty", body: "" });
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
        <button class="ghost" id="leave-booth">Back to Sunday</button>
      </div>
    </div>
    <div class="grid-2">
      <section>
        <div class="booth-slide">
          <div class="kicker">${escapeText(slide.kicker || state.churchName)}</div>
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
    <div class="top"><div><h1>Welcome to ${escapeText(state.churchName)}</h1><p class="lede">Tell us you were here. This stays with the church. It is not posted.</p></div></div>
    <section class="card" style="max-width:560px">
      <label>Name</label><input id="guest-name">
      <label>Phone</label><input id="guest-phone">
      <label>Visit</label>
      <select id="guest-visit"><option>First time</option><option>Returning</option></select>
      <label>Prayer or note, optional</label>
      <textarea id="guest-note"></textarea>
      <button class="solid" id="save-guest" style="margin-top:12px">I'm here</button>
      <p id="guest-thanks" class="lede hidden">Got it. Someone from the church can follow up.</p>
    </section>`;
}

function welcomeUrl() {
  if (state.publicUrl) return state.publicUrl.replace(/\/?$/, "/") + "index.html#welcome";
  return location.href.split("#")[0] + "#welcome";
}

function bind() {
  document.querySelectorAll("nav button").forEach((btn) => btn.onclick = () => setView(btn.dataset.view));
  const byId = (id) => document.getElementById(id);
  if (byId("present")) byId("present").onclick = () => startPresent();
  if (byId("stage")) byId("stage").onclick = () => openStage(true);
  if (byId("export-sunday")) byId("export-sunday").onclick = exportSunday;
  if (byId("import-sunday")) byId("import-sunday").onchange = importSunday;
  if (byId("go-next")) byId("go-next").onclick = () => step(1);
  if (byId("go-back")) byId("go-back").onclick = () => step(-1);
  if (byId("go-black")) byId("go-black").onclick = () => { black = !black; titleCard = false; publishLive(); render(); };
  if (byId("go-title")) byId("go-title").onclick = () => { titleCard = !titleCard; black = false; publishLive(); render(); };
  if (byId("open-house")) byId("open-house").onclick = () => { publishLive(); houseWindow = window.open("./index.html?screen=house", "wwm-house"); render(); };
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
  if (byId("send-help")) byId("send-help").onclick = () => {
    const from = byId("help-email").value.trim();
    const note = byId("help-note").value.trim();
    if (!from || !note) {
      byId("help-thanks").textContent = "Add your email and what you need, or use the email link above.";
      byId("help-thanks").classList.remove("hidden");
      return;
    }
    location.href = "mailto:churchofx4u@gmail.com?subject=" + encodeURIComponent("Help with Worship With Me") + "&body=" + encodeURIComponent("From: " + from + "\n\n" + note);
    byId("help-thanks").textContent = "Your email app should open with this note. Send it there.";
    byId("help-thanks").classList.remove("hidden");
  };
  if (byId("save-licensed")) byId("save-licensed").onclick = () => {
    const verses = byId("lic-lyrics").value.split(/\n\s*\n/).map((v) => v.trim()).filter(Boolean);
    if (!byId("lic-title").value || !verses.length) return;
    state.songs.push({ id: uid(), title: byId("lic-title").value, author: byId("lic-author").value, copyright: byId("lic-copy").value.trim(), ccli: byId("lic-ccli").value, pd: false, verses });
    save(); render();
  };
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
    state.churchName = byId("church-name").value.trim() || "Church X";
    state.pastor = byId("pastor-name").value.trim();
    state.theme = byId("theme").value;
    state.size = byId("size").value;
    save(); render();
  };
  if (byId("export-all")) byId("export-all").onclick = () => download("church-x-backup.json", JSON.stringify(state, null, 2));
  if (byId("import-all")) byId("import-all").onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    state = JSON.parse(await file.text());
    save(); render();
  };
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
  logged = new Set();
  publishLive();
  houseWindow = window.open("./index.html?screen=house", "wwm-house");
  setView("booth");
  const today = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem("churchx.notified") !== today) {
    localStorage.setItem("churchx.notified", today);
    notifyUse("Sunday presented", state.churchName + " presented " + active().name + " on " + today);
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
  if (!isHouse && slide && slide.item && slide.item.type === "hymn" && !logged.has(slide.item.id)) {
    logged.add(slide.item.id);
    state.usage.push({ title: slide.item.title, author: slide.item.author || "", ccli: slide.item.ccli || "", pd: !!slide.item.pd, at: Date.now() });
    save();
  }
}

function publishLive() {
  localStorage.setItem(LIVE, JSON.stringify({ slideIndex, black, titleCard, serviceId: state.activeId }));
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
  }
  showNotes = false;
  paintSlide();
}

function exportSunday() {
  const service = active();
  const name = "worship-with-me-" + (service.date || "sunday") + ".json";
  download(name, JSON.stringify(state, null, 2));
  fileNote = "Saved " + name + ". Import that file on the church computer.";
  const note = document.getElementById("file-note");
  if (note) note.textContent = fileNote;
}

async function importSunday(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!data || !Array.isArray(data.services)) throw new Error("bad");
    state = data;
    if (!state.activeId && state.services[0]) state.activeId = state.services[0].id;
    fileNote = "Imported " + file.name + ".";
    save();
    render();
  } catch (err) {
    fileNote = "That file is not a Worship With Me Sunday.";
    const note = document.getElementById("file-note");
    if (note) note.textContent = fileNote;
  }
}

function openStage(notes) {
  slideIndex = 0;
  black = false;
  titleCard = false;
  showNotes = notes;
  logged = new Set();
  document.querySelector("#stage").classList.add("on");
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
    ? { kind: "title", title: state.churchName, body: active().name, kicker: "Worship With Me" }
    : slides[slideIndex];
  stage.className = "stage on " + state.theme + " " + state.size + (!isHouse && showNotes ? " stage-notes" : "");
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
      screen.innerHTML = `<div class="kicker">${escapeText(slide.kicker || state.churchName)}</div><h2>${escapeText(slide.title || "")}</h2><p>${escapeText(slide.body || "")}</p>`;
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
  if (isHouse) return;
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

document.querySelector("#exit-stage").onclick = () => document.querySelector("#stage").classList.remove("on");

if (isHouse) {
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
