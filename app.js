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
    title: "Hark! the Herald Angels Sing",
    author: "Charles Wesley",
    year: "1739",
    pd: true,
    verses: [
      "Hark! the herald angels sing,\n\"Glory to the newborn King;\nPeace on earth, and mercy mild,\nGod and sinners reconciled!\"\nJoyful, all ye nations, rise,\nJoin the triumph of the skies;\nWith th'angelic host proclaim,\n\"Christ is born in Bethlehem!\"\nHark! the herald angels sing,\n\"Glory to the newborn King!\"",
      "Hail the heaven-born Prince of Peace!\nHail the Sun of Righteousness!\nLight and life to all he brings,\nRisen with healing in his wings.\nMild he lays his glory by,\nBorn that man no more may die,\nBorn to raise the sons of earth,\nBorn to give them second birth.\nHark! the herald angels sing,\n\"Glory to the newborn King!\""
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
  },
  {
    ref: "1 Corinthians 11:23–26",
    text: "For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread:\nAnd when he had given thanks, he brake it, and said, Take, eat: this is my body, which is broken for you: this do in remembrance of me.\nAfter the same manner also he took the cup, when he had supped, saying, This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me.\nFor as often as ye eat this bread, and drink this cup, ye do shew the Lord's death till he come."
  },
  {
    ref: "Luke 2:8–14",
    text: "And there were in the same country shepherds abiding in the field, keeping watch over their flock by night.\nAnd, lo, the angel of the Lord came upon them, and the glory of the Lord shone round about them: and they were sore afraid.\nAnd the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.\nFor unto you is born this day in the city of David a Saviour, which is Christ the Lord.\nAnd this shall be a sign unto you; Ye shall find the babe wrapped in swaddling clothes, lying in a manger.\nAnd suddenly there was with the angel a multitude of the heavenly host praising God, and saying,\nGlory to God in the highest, and on earth peace, good will toward men."
  },
  {
    ref: "Matthew 28:1–7",
    text: "In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.\nAnd, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.\nHis countenance was like lightning, and his raiment white as snow:\nAnd for fear of him the keepers did shake, and became as dead men.\nAnd the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified.\nHe is not here: for he is risen, as he said. Come, see the place where the Lord lay.\nAnd go quickly, and tell his disciples that he is risen from the dead; and, behold, he goeth before you into Galilee; there shall ye see him: lo, I have told you."
  },
  {
    ref: "John 14:1–3",
    text: "Let not your heart be troubled: ye believe in God, believe also in me.\nIn my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.\nAnd if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also."
  },
  {
    ref: "Psalm 46:1–2",
    text: "God is our refuge and strength, a very present help in trouble.\nTherefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea."
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

function hymnByTitle(title) {
  const h = HYMNS.find((x) => x.title === title);
  if (!h) throw new Error("Missing hymn " + title);
  return { id: uid(), type: "hymn", title: h.title, author: h.author, year: h.year, pd: true, ccli: "", verses: h.verses.slice() };
}

function scriptureByRef(ref) {
  const s = SCRIPTURES.find((x) => x.ref === ref);
  if (!s) throw new Error("Missing scripture " + ref);
  return { id: uid(), type: "scripture", title: s.ref, body: s.text };
}

function wordSlide(title, body) {
  return { id: uid(), type: "word", title: title, body: body };
}

// Next calendar Sunday after fromIso. If fromIso is already a Sunday, returns the following Sunday (+7).
function nextSundayDate(fromIso) {
  const d = new Date((fromIso || new Date().toISOString().slice(0, 10)) + "T12:00:00");
  const add = d.getDay() === 0 ? 7 : (7 - d.getDay());
  d.setDate(d.getDate() + add);
  return d.toISOString().slice(0, 10);
}

function cloneServiceItems(items) {
  return JSON.parse(JSON.stringify(items || [])).map((item) => {
    item.id = uid();
    return item;
  });
}

function mostRecentService() {
  const list = (state.services || []).slice();
  if (!list.length) return null;
  list.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.name || "").localeCompare(String(a.name || "")));
  return list[0];
}

// Safer copy: keep the full order, songs, word slides, and run-sheet roles.
// Only the date moves to the next Sunday; the user edits announcements etc.
function copyLastSunday() {
  const src = mostRecentService();
  if (!src) return null;
  const copy = {
    id: uid(),
    name: src.name || "Sunday gathering",
    date: nextSundayDate(src.date || new Date().toISOString().slice(0, 10)),
    items: cloneServiceItems(src.items)
  };
  state.services.unshift(copy);
  state.activeId = copy.id;
  if (src.roles) state.roles = JSON.parse(JSON.stringify(src.roles));
  // else keep current state.roles (same team from week to week)
  save();
  return copy;
}

function ensureTemplates() {
  if (!Array.isArray(state.templates)) state.templates = [];
}

function builtinTemplateDefs() {
  return [
    {
      id: "builtin-communion",
      name: "Communion Sunday",
      builtin: true,
      build: () => ({
        name: "Communion Sunday",
        items: [
          wordSlide("Welcome", "Welcome. Today we gather at the Lord's table."),
          wordSlide("Call to worship", "O taste and see that the Lord is good:\nblessed is the man that trusteth in him.\nPsalm 34:8"),
          hymnByTitle("Holy, Holy, Holy"),
          hymnByTitle("When I Survey the Wondrous Cross"),
          wordSlide("Prayer", "Let us pray."),
          scriptureByRef("1 Corinthians 11:23–26"),
          wordSlide("Sermon", "In Remembrance of Me\n1 Corinthians 11"),
          wordSlide("The Lord's Supper", "The bread and the cup.\nThis do in remembrance of me."),
          hymnByTitle("Amazing Grace"),
          hymnByTitle("Doxology"),
          scriptureByRef("Numbers 6:24–26"),
          wordSlide("Go in peace", "Thanks be to God.")
        ],
        roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "Prepare the table before the service. Black the screen during the supper." }
      })
    },
    {
      id: "builtin-funeral",
      name: "Funeral or memorial",
      builtin: true,
      build: () => ({
        name: "Funeral or memorial",
        items: [
          wordSlide("Welcome", "We gather to remember and to commend our loved one to the Lord."),
          hymnByTitle("Abide with Me"),
          scriptureByRef("Psalm 23:1–6"),
          scriptureByRef("John 14:1–3"),
          hymnByTitle("Amazing Grace"),
          wordSlide("Remembrance", "A time to share memories."),
          wordSlide("Message", "Title goes here."),
          hymnByTitle("It Is Well with My Soul"),
          scriptureByRef("Psalm 46:1–2"),
          scriptureByRef("Numbers 6:24–26"),
          wordSlide("Commendation", "Into your hands, O Lord, we commend your servant.")
        ],
        roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "Keep the order gentle. Black the screen during prayer." }
      })
    },
    {
      id: "builtin-holiday",
      name: "Christmas / Easter holiday",
      builtin: true,
      build: () => ({
        name: "Christmas / Easter holiday",
        items: [
          wordSlide("Welcome", "Welcome. Christ is born — and Christ is risen. Edit this for the day you are celebrating."),
          wordSlide("Call to worship", "This is the day which the Lord hath made;\nwe will rejoice and be glad in it.\nPsalm 118:24"),
          hymnByTitle("Hark! the Herald Angels Sing"),
          hymnByTitle("Christ the Lord Is Risen Today"),
          scriptureByRef("Luke 2:8–14"),
          scriptureByRef("Matthew 28:1–7"),
          wordSlide("Prayer", "Let us pray."),
          wordSlide("Sermon", "Title goes here."),
          hymnByTitle("Amazing Grace"),
          hymnByTitle("Doxology"),
          scriptureByRef("John 3:16–17"),
          scriptureByRef("Numbers 6:24–26"),
          wordSlide("Go in peace", "Thanks be to God. Merry Christmas — or He is risen indeed.")
        ],
        roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "Remove the Christmas or Easter pieces you are not using this Sunday." }
      })
    }
  ];
}

function allTemplates() {
  ensureTemplates();
  const user = state.templates.map((t) => ({ id: t.id, name: t.name, builtin: false }));
  return builtinTemplateDefs().map((t) => ({ id: t.id, name: t.name, builtin: true })).concat(user);
}

function getTemplateById(id) {
  const builtin = builtinTemplateDefs().find((t) => t.id === id);
  if (builtin) return { id: builtin.id, name: builtin.name, builtin: true, data: builtin.build() };
  ensureTemplates();
  const user = state.templates.find((t) => t.id === id);
  if (!user) return null;
  return { id: user.id, name: user.name, builtin: false, data: JSON.parse(JSON.stringify({ name: user.name, items: user.items || [], roles: user.roles || null })) };
}

function serviceFromTemplate(templateId) {
  const tpl = getTemplateById(templateId);
  if (!tpl) return null;
  const data = tpl.data;
  const service = {
    id: uid(),
    name: data.name || tpl.name,
    date: nextSundayDate(new Date().toISOString().slice(0, 10)),
    items: cloneServiceItems(data.items)
  };
  state.services.unshift(service);
  state.activeId = service.id;
  if (data.roles) state.roles = JSON.parse(JSON.stringify(data.roles));
  save();
  return service;
}

function saveActiveAsTemplate(name) {
  ensureTemplates();
  const src = active();
  const label = (name || src.name || "Template").trim();
  if (!label) return null;
  const tpl = {
    id: uid(),
    name: label,
    items: cloneServiceItems(src.items),
    roles: JSON.parse(JSON.stringify(state.roles || {}))
  };
  state.templates.unshift(tpl);
  save();
  return tpl;
}

function renameUserTemplate(id, name) {
  ensureTemplates();
  const tpl = state.templates.find((t) => t.id === id);
  if (!tpl) return false;
  const label = (name || "").trim();
  if (!label) return false;
  tpl.name = label;
  save();
  return true;
}

function deleteUserTemplate(id) {
  ensureTemplates();
  const before = state.templates.length;
  state.templates = state.templates.filter((t) => t.id !== id);
  if (state.templates.length === before) return false;
  save();
  return true;
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
    roles: { greeter: "", sound: "", slides: "", prayer: "", preacher: "", notes: "" },
    templates: []
  };
}

let state = load();
// Older saves stored the placeholder itself; treat it as "not set yet".
if (!state.churchName || state.churchName.trim() === "Your Church") state.churchName = "";
ensureTemplates();

// The one place the church name is read. Falls back to a placeholder
// until the church sets it (first-run guide or the Church screen).
function churchName() {
  return (state.churchName || "").trim() || "Your Church";
}
if (!state.activeId) state.activeId = state.services[0].id;
const screenParam = new URLSearchParams(location.search).get("screen");
const isHouse = screenParam === "house";
const isStage = screenParam === "stage";
const isLower = screenParam === "lower" || screenParam === "lowerthirds";
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
let lowerWindow = null;
let lowerBg = "transparent"; // transparent | green
let preActive = false;
let preRuntime = null; // live pre-service snapshot (also synced via LIVE)
let preTickTimer = null;
function stageRoot() {
  return document.querySelector("div.stage") || document.querySelector("#stage");
}

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
        <button class="ghost" id="open-lower-thirds" title="OBS Browser Source lower-thirds">Lower-thirds</button>
        <button class="ghost" id="rehearse" title="Practice on this screen. Does not add to the CCLI log.">Rehearse</button>
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
          <button class="ghost" id="copy-last-sunday" title="Create next Sunday from the most recent service. Keeps the order, songs, and roles.">Copy last Sunday</button>
        </div>
        <label>Service name</label>
        <input id="service-name" value="${escapeAttr(service.name)}">
        <label>Date</label>
        <input id="service-date" type="date" value="${service.date}">
        <div class="row" style="margin-top:12px;flex-wrap:wrap">
          <button class="ghost" id="save-as-template">Save as template</button>
          <select id="template-pick">
            <option value="">New from template…</option>
            ${allTemplates().map((t) => `<option value="${escapeAttr(t.id)}">${escapeText(t.name)}${t.builtin ? " (built-in)" : ""}</option>`).join("")}
          </select>
          <button class="ghost" id="new-from-template">Use template</button>
        </div>
        <div id="template-manage" class="template-manage">
          ${(state.templates || []).length ? `<p class="lede" style="margin-top:10px">Your templates</p>` + state.templates.map((t) => `
            <div class="row template-row">
              <span>${escapeText(t.name)}</span>
              <button class="ghost" data-rename-template="${escapeAttr(t.id)}">Rename</button>
              <button class="ghost" data-delete-template="${escapeAttr(t.id)}">Delete</button>
            </div>`).join("") : `<p class="lede" style="font-size:13px;margin-top:8px">Built-in starters are always available. Save this Sunday as a template to reuse your own order.</p>`}
        </div>
        <div style="margin-top:14px">${items || "<p>No items yet.</p>"}</div>
        ${preserviceControlsHtml()}
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
        <div class="bible-picker" style="margin-top:18px;padding-top:14px;border-top:1px solid rgba(28,23,18,0.12)">
          <h3 style="margin:0 0 8px">Bible (offline)</h3>
          <p class="lede" style="font-size:13px">World English Bible — public domain. Loads on this computer only; no API keys and no licensed text (not NIV/ESV).</p>
          <label>Book</label>
          <select id="bible-book"><option value="">Loading books…</option></select>
          <div class="row" style="margin-top:8px;flex-wrap:wrap">
            <label style="margin:0">Chapter <input id="bible-chapter" type="number" min="1" value="1" style="width:72px"></label>
            <label style="margin:0">From <input id="bible-from" type="number" min="1" value="1" style="width:72px"></label>
            <label style="margin:0">To <input id="bible-to" type="number" min="1" value="1" style="width:72px"></label>
          </div>
          <button class="solid" id="add-bible" style="margin-top:10px">Add Bible slides</button>
          <p id="bible-status" class="lede" style="font-size:13px;margin-top:8px"></p>
        </div>
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
        <h3>Livestream lower-thirds (OBS)</h3>
        <p>1. During Present, open <b>Lower-thirds</b> from Sunday or the booth, or use this page: <code style="user-select:all">${escapeText(lowerThirdsUrl())}</code></p>
        <p>2. In OBS, add a <b>Browser Source</b>. Paste that URL. Width 1920, height 1080 (or your canvas size). Leave “Shutdown source when not visible” off if you want it ready.</p>
        <p>3. Transparent mode is the default — OBS shows only the lower-third bar over your camera/program. If transparency fails on your OS, switch to <b>green screen</b> in the lower-thirds window (or from the booth) and add an OBS <b>Chroma Key</b> filter on that source.</p>
        <p>4. It stays in sync with Present on this computer (same browser profile) over the existing live channel — offline, no trackers.</p>
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
        <section class="card booth-lower-controls" style="margin-top:14px">
          <h3>Livestream lower-thirds</h3>
          <p class="lede">For OBS Browser Source. Shows the current lyric, verse, or title as a lower-third. Transparent by default; green screen if your setup needs chroma key.</p>
          <div class="row">
            <button class="solid" id="open-lower-thirds">Open lower-thirds</button>
            <button class="ghost" id="lower-bg-toggle">${lowerBg === "green" ? "Use transparent" : "Use green screen"}</button>
          </div>
          <p class="lede" style="font-size:13px;margin-top:8px">URL: <code style="user-select:all">${escapeText(lowerThirdsUrl())}</code> · Background: ${lowerBg === "green" ? "green screen" : "transparent"}</p>
        </section>
        ${preserviceControlsHtml()}
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
  if (byId("rehearse")) byId("rehearse").onclick = () => openStage(true);
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
  if (byId("open-lower-thirds")) byId("open-lower-thirds").onclick = () => { openLowerThirds(); render(); };
  if (byId("lower-bg-toggle")) byId("lower-bg-toggle").onclick = () => { toggleLowerBg(); render(); };
  if (byId("pre-save")) byId("pre-save").onclick = () => { savePreserviceForm(); fileNote = "Pre-service settings saved with this Sunday."; render(); };
  if (byId("pre-start")) byId("pre-start").onclick = () => startPreservice();
  if (byId("pre-stop")) byId("pre-stop").onclick = () => stopPreserviceAndStart();
  if (byId("pre-extra-add")) byId("pre-extra-add").onclick = () => addPreserviceExtraSlide();
  document.querySelectorAll("[data-pre-extra-del]").forEach((btn) => btn.onclick = () => removePreserviceExtra(btn.dataset.preExtraDel));
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
  if (byId("copy-last-sunday")) byId("copy-last-sunday").onclick = () => {
    const copy = copyLastSunday();
    if (!copy) {
      fileNote = "There is no Sunday to copy yet.";
    } else {
      fileNote = "Copied to " + copy.date + ". Same order, songs, and roles — edit what changed this week.";
    }
    render();
  };
  if (byId("save-as-template")) byId("save-as-template").onclick = () => {
    const name = prompt("Name for this template", active().name || "My template");
    if (name === null) return;
    const tpl = saveActiveAsTemplate(name);
    fileNote = tpl ? ("Saved template “" + tpl.name + "”. It is included in Export backup.") : "Could not save that template.";
    render();
  };
  if (byId("new-from-template")) byId("new-from-template").onclick = () => {
    const id = byId("template-pick").value;
    if (!id) return;
    const service = serviceFromTemplate(id);
    fileNote = service ? ("Started “" + service.name + "” for " + service.date + " from a template.") : "That template was not found.";
    render();
  };
  document.querySelectorAll("[data-rename-template]").forEach((btn) => btn.onclick = () => {
    const tpl = (state.templates || []).find((t) => t.id === btn.dataset.renameTemplate);
    if (!tpl) return;
    const name = prompt("Rename template", tpl.name);
    if (name === null) return;
    renameUserTemplate(tpl.id, name);
    render();
  });
  document.querySelectorAll("[data-delete-template]").forEach((btn) => btn.onclick = () => {
    const tpl = (state.templates || []).find((t) => t.id === btn.dataset.deleteTemplate);
    if (!tpl) return;
    askDialog({
      title: "Delete template?",
      body: ["Delete “" + tpl.name + "”? Built-in starters cannot be deleted. This only removes your saved copy."],
      yes: "Delete",
      no: "Cancel"
    }, (ok) => {
      if (!ok) return;
      deleteUserTemplate(tpl.id);
      render();
    });
  });
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
  if (byId("bible-book")) {
    fillBibleBookSelect();
    byId("bible-book").onchange = () => onBibleBookChange();
  }
  if (byId("bible-chapter")) byId("bible-chapter").onchange = () => onBibleChapterChange();
  if (byId("add-bible")) byId("add-bible").onclick = () => addBiblePassage();
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


function setBibleStatus(msg) {
  const el = document.getElementById("bible-status");
  if (el) el.textContent = msg || "";
}

function fillBibleBookSelect() {
  const sel = document.getElementById("bible-book");
  if (!sel || typeof WwmBible === "undefined") return;
  WwmBible.loadIndex().then((idx) => {
    const prev = sel.value;
    const ot = (idx.books || []).filter((b) => b.testament === "OT");
    const nt = (idx.books || []).filter((b) => b.testament === "NT");
    const optGroup = (label, books) =>
      `<optgroup label="${escapeAttr(label)}">` +
      books.map((b) => `<option value="${escapeAttr(b.id)}">${escapeText(b.name)}</option>`).join("") +
      `</optgroup>`;
    sel.innerHTML = optGroup("Old Testament", ot) + optGroup("New Testament", nt);
    if (prev && [...sel.options].some((o) => o.value === prev)) sel.value = prev;
    else sel.value = "john";
    onBibleBookChange();
  }).catch((err) => {
    sel.innerHTML = `<option value="">Bible unavailable</option>`;
    setBibleStatus(err && err.message ? err.message : "Could not load Bible index.");
  });
}

function onBibleBookChange() {
  const sel = document.getElementById("bible-book");
  const chInput = document.getElementById("bible-chapter");
  if (!sel || !chInput || !sel.value || typeof WwmBible === "undefined") return;
  setBibleStatus("Loading " + sel.options[sel.selectedIndex].text + "…");
  WwmBible.loadBook(sel.value).then((pack) => {
    chInput.max = pack.meta.chapters;
    if (Number(chInput.value) > pack.meta.chapters) chInput.value = 1;
    setBibleStatus(pack.meta.name + " · " + pack.meta.chapters + " chapters (WEB, offline)");
    onBibleChapterChange();
  }).catch((err) => setBibleStatus(err && err.message ? err.message : "Could not load that book."));
}

function onBibleChapterChange() {
  const sel = document.getElementById("bible-book");
  const chInput = document.getElementById("bible-chapter");
  const fromInput = document.getElementById("bible-from");
  const toInput = document.getElementById("bible-to");
  if (!sel || !sel.value || typeof WwmBible === "undefined") return;
  WwmBible.loadBook(sel.value).then((pack) => {
    const ch = Math.max(1, Number(chInput && chInput.value) || 1);
    const n = WwmBible.verseCount(pack.chapters, ch);
    if (fromInput) {
      fromInput.max = n;
      if (Number(fromInput.value) > n) fromInput.value = 1;
    }
    if (toInput) {
      toInput.max = n;
      if (!toInput.value || Number(toInput.value) > n) toInput.value = n;
      if (Number(toInput.value) < Number(fromInput && fromInput.value || 1)) toInput.value = fromInput.value;
    }
  }).catch(() => {});
}

function addBiblePassage() {
  if (typeof WwmBible === "undefined") {
    fileNote = "Bible module did not load.";
    render();
    return;
  }
  const bookId = (document.getElementById("bible-book") || {}).value;
  const chapter = Number((document.getElementById("bible-chapter") || {}).value || 1);
  let fromV = Number((document.getElementById("bible-from") || {}).value || 1);
  let toV = Number((document.getElementById("bible-to") || {}).value || fromV);
  if (!bookId) return;
  if (toV < fromV) { const t = fromV; fromV = toV; toV = t; }
  setBibleStatus("Adding…");
  WwmBible.loadBook(bookId).then((pack) => {
    const maxV = WwmBible.verseCount(pack.chapters, chapter);
    fromV = Math.max(1, Math.min(fromV, maxV));
    toV = Math.max(fromV, Math.min(toV, maxV));
    const title = WwmBible.formatRef(pack.meta.name, chapter, fromV, toV) + " (WEB)";
    const body = WwmBible.passageBody(pack.chapters, chapter, fromV, toV, 2);
    active().items.push({ id: uid(), type: "scripture", title, body });
    save();
    fileNote = "Added " + title + " from the offline World English Bible.";
    setView("plan");
  }).catch((err) => {
    fileNote = err && err.message ? err.message : "Could not add that passage.";
    render();
  });
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
  if (!countingUsage || isHouse || isStage || isLower) return;
  if (slide && slide.item && slide.item.type === "hymn" && !logged.has(slide.item.id)) {
    logged.add(slide.item.id);
    ensureUsagePeriod();
    state.usage.push({ title: slide.item.title, author: slide.item.author || "", ccli: slide.item.ccli || "", pd: !!slide.item.pd, at: Date.now() });
    save();
  }
}


function ensurePreservice(service) {
  if (!service.preservice) {
    service.preservice = {
      label: "Service starts in",
      countdownKind: "minutes",
      minutes: 10,
      startTime: "10:30",
      loopSeconds: 8,
      selectedIds: [],
      extraSlides: [],
      withCountdown: true,
      withLoop: true,
      onZero: "first"
    };
  }
  const ps = service.preservice;
  if (!Array.isArray(ps.selectedIds)) ps.selectedIds = [];
  if (!Array.isArray(ps.extraSlides)) ps.extraSlides = [];
  if (!ps.label) ps.label = "Service starts in";
  if (!ps.countdownKind) ps.countdownKind = "minutes";
  if (!ps.onZero) ps.onZero = "first";
  return ps;
}

function countdownEndFromClock(hhmm) {
  const m = String(hhmm || "").trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Number(m[1]), Number(m[2]), 0, 0);
  if (end.getTime() <= now.getTime()) end.setDate(end.getDate() + 1);
  return end.getTime();
}

function resolveLoopSlides(service) {
  const ps = ensurePreservice(service);
  const selected = new Set(ps.selectedIds || []);
  const fromItems = (service.items || [])
    .filter((it) => selected.has(it.id) && (it.type === "word" || it.type === "scripture" || it.type === "hymn"))
    .map((it) => ({ title: it.title || "", body: it.body || (Array.isArray(it.verses) ? (typeof it.verses[0] === "string" ? it.verses[0] : (it.verses[0] && it.verses[0].body) || "") : "") }));
  const extras = (ps.extraSlides || []).map((s) => ({ title: s.title || "Announcement", body: s.body || "" }));
  return fromItems.concat(extras).filter((s) => (s.title || s.body));
}

function savePreserviceForm() {
  const service = active();
  const ps = ensurePreservice(service);
  const byId = (id) => document.getElementById(id);
  if (byId("pre-label")) ps.label = byId("pre-label").value.trim() || "Service starts in";
  if (byId("pre-kind")) ps.countdownKind = byId("pre-kind").value === "clock" ? "clock" : "minutes";
  if (byId("pre-minutes")) ps.minutes = Math.max(1, Number(byId("pre-minutes").value) || 10);
  if (byId("pre-start-time")) ps.startTime = byId("pre-start-time").value || "10:30";
  if (byId("pre-loop-seconds")) ps.loopSeconds = Math.max(3, Number(byId("pre-loop-seconds").value) || 8);
  if (byId("pre-on-zero")) ps.onZero = byId("pre-on-zero").value === "welcome" ? "welcome" : "first";
  ps.withCountdown = !!(byId("pre-with-countdown") && byId("pre-with-countdown").checked);
  ps.withLoop = !!(byId("pre-with-loop") && byId("pre-with-loop").checked);
  ps.selectedIds = Array.from(document.querySelectorAll("[data-pre-item]:checked")).map((el) => el.value);
  const et = byId("pre-extra-title");
  const eb = byId("pre-extra-body");
  // extras managed by add button; keep existing
  save();
  return ps;
}

function addPreserviceExtraSlide() {
  const service = active();
  const ps = ensurePreservice(service);
  const title = (document.getElementById("pre-extra-title") || {}).value || "";
  const body = (document.getElementById("pre-extra-body") || {}).value || "";
  if (!title.trim() && !body.trim()) return;
  ps.extraSlides.push({ id: uid(), title: title.trim() || "Announcement", body: body.trim() });
  const et = document.getElementById("pre-extra-title");
  const eb = document.getElementById("pre-extra-body");
  if (et) et.value = "";
  if (eb) eb.value = "";
  save();
  render();
}

function removePreserviceExtra(id) {
  const ps = ensurePreservice(active());
  ps.extraSlides = (ps.extraSlides || []).filter((s) => s.id !== id);
  save();
  render();
}

function startPreservice() {
  const service = active();
  const ps = savePreserviceForm();
  if (!ps.withCountdown && !ps.withLoop) {
    fileNote = "Turn on the countdown, the announcement loop, or both.";
    render();
    return;
  }
  const slides = ps.withLoop ? resolveLoopSlides(service) : [];
  if (ps.withLoop && !slides.length) {
    fileNote = "Pick at least one announcement slide for the loop, or add one below.";
    render();
    return;
  }
  let endAt = null;
  if (ps.withCountdown) {
    endAt = ps.countdownKind === "clock"
      ? countdownEndFromClock(ps.startTime)
      : Date.now() + Math.round((ps.minutes || 10) * 60 * 1000);
    if (!endAt) {
      fileNote = "Enter a valid start time like 10:30.";
      render();
      return;
    }
  }
  preActive = true;
  preRuntime = {
    label: ps.label || "Service starts in",
    withCountdown: !!ps.withCountdown,
    withLoop: !!ps.withLoop,
    countdownEnd: endAt,
    loopSeconds: ps.loopSeconds || 8,
    loopIndex: 0,
    loopLastAdvance: Date.now(),
    slides: slides,
    onZero: ps.onZero === "welcome" ? "welcome" : "first",
    serviceId: service.id
  };
  black = false;
  titleCard = false;
  publishLive();
  startPreTick();
  if (!houseWindow || houseWindow.closed) {
    houseWindow = window.open("./index.html?screen=house", "wwm-house");
  }
  fileNote = "Pre-service running on the projector.";
  if (view !== "booth") setView("booth");
  else render();
}

function stopPreserviceAndStart(forceOnZero) {
  const onZero = forceOnZero || (preRuntime && preRuntime.onZero) || "first";
  preActive = false;
  preRuntime = null;
  stopPreTick();
  black = false;
  titleCard = onZero === "welcome";
  slideIndex = 0;
  publishLive();
  if (isHouse || (stageRoot() && stageRoot().classList.contains("on"))) paintSlide();
  if (isStage) paintStageDisplay();
  fileNote = onZero === "welcome" ? "Pre-service ended — showing Welcome." : "Pre-service ended — first service slide.";
  if (!isHouse && !isStage) render();
}

function stopPreTick() {
  if (preTickTimer) { clearInterval(preTickTimer); preTickTimer = null; }
}

function startPreTick() {
  stopPreTick();
  preTickTimer = setInterval(tickPreservice, 250);
}

function tickPreservice() {
  if (!preActive || !preRuntime) return;
  let changed = false;
  if (preRuntime.withLoop && preRuntime.slides && preRuntime.slides.length) {
    const now = Date.now();
    if (now - (preRuntime.loopLastAdvance || 0) >= (preRuntime.loopSeconds || 8) * 1000) {
      preRuntime.loopIndex = ((preRuntime.loopIndex || 0) + 1) % preRuntime.slides.length;
      preRuntime.loopLastAdvance = now;
      changed = true;
    }
  }
  if (preRuntime.withCountdown && preRuntime.countdownEnd && Date.now() >= preRuntime.countdownEnd) {
    // Only the operator window finishes; house/stage just display until sync
    if (!isHouse && !isStage) stopPreserviceAndStart(preRuntime.onZero);
    else {
      paintSlide();
      if (isStage) paintStageDisplay();
    }
    return;
  }
  if (changed && !isHouse && !isStage) publishLive();
  if (isHouse || (stageRoot() && stageRoot().classList.contains("on"))) paintSlide();
  if (isStage) paintStageDisplay();
}

function paintPreserviceScreen(screen) {
  if (!screen || !preRuntime) return;
  const slides = preRuntime.slides || [];
  const slide = slides.length ? slides[(preRuntime.loopIndex || 0) % slides.length] : null;
  const left = preRuntime.withCountdown && preRuntime.countdownEnd
    ? Math.max(0, preRuntime.countdownEnd - Date.now())
    : null;
  const cd = left === null ? "" : formatCountdown(left);
  let html = "";
  if (preRuntime.withLoop && slide) {
    html += `<div class="kicker">${escapeText(slide.title || "Announcement")}</div>`;
    html += `<h2 class="pre-announce-body">${escapeText(slide.body || "")}</h2>`;
  } else if (preRuntime.withCountdown) {
    html += `<div class="kicker">${escapeText(preRuntime.label || "Service starts in")}</div>`;
    html += `<h2 class="pre-countdown-big">${escapeText(cd)}</h2>`;
  }
  if (preRuntime.withCountdown && preRuntime.withLoop) {
    html += `<div class="pre-countdown-corner"><span>${escapeText(preRuntime.label || "")}</span><strong>${escapeText(cd)}</strong></div>`;
  }
  screen.innerHTML = html || `<div class="kicker">Pre-service</div><h2>…</h2>`;
}

function preserviceControlsHtml() {
  const service = active();
  const ps = ensurePreservice(service);
  const wordItems = (service.items || []).filter((it) => it.type === "word" || /announce/i.test(it.title || ""));
  const picks = wordItems.map((it) => {
    const checked = ps.selectedIds.includes(it.id) || (/announce/i.test(it.title || "") && !ps.selectedIds.length);
    return `<label class="pre-pick"><input type="checkbox" data-pre-item value="${escapeAttr(it.id)}" ${checked ? "checked" : ""}> ${escapeText(it.title || "Untitled")}</label>`;
  }).join("") || `<p class="lede">No word slides yet. Add announcements on Sunday, or use the extra slide fields below.</p>`;
  const extras = (ps.extraSlides || []).map((s) => `
    <div class="row template-row">
      <span>${escapeText(s.title)}</span>
      <button type="button" class="ghost" data-pre-extra-del="${escapeAttr(s.id)}">Remove</button>
    </div>`).join("");
  const running = preActive ? `<p class="lede"><strong>Running now.</strong> Projector shows the loop/countdown.</p>
    <button class="solid" id="pre-stop">Stop loop / start service</button>` : "";
  return `
    <section class="card pre-service-card" style="margin-top:14px">
      <h3>Pre-service</h3>
      <p class="lede">Countdown and/or looping announcements on the projector before you start. Saved with this Sunday and included in backups.</p>
      ${running}
      <label>Countdown label</label>
      <input id="pre-label" value="${escapeAttr(ps.label)}">
      <label>Countdown</label>
      <select id="pre-kind">
        <option value="minutes" ${ps.countdownKind !== "clock" ? "selected" : ""}>For N minutes</option>
        <option value="clock" ${ps.countdownKind === "clock" ? "selected" : ""}>Until a clock time</option>
      </select>
      <div class="row" style="margin-top:8px">
        <label style="margin:0">Minutes <input id="pre-minutes" type="number" min="1" max="180" value="${escapeAttr(ps.minutes || 10)}" style="width:80px"></label>
        <label style="margin:0">Start time <input id="pre-start-time" type="time" value="${escapeAttr(ps.startTime || "10:30")}"></label>
      </div>
      <label style="display:flex;gap:8px;align-items:center;margin-top:12px"><input type="checkbox" id="pre-with-countdown" style="width:auto" ${ps.withCountdown !== false ? "checked" : ""}> Show countdown</label>
      <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="pre-with-loop" style="width:auto" ${ps.withLoop !== false ? "checked" : ""}> Loop announcements</label>
      <label>Seconds per announcement</label>
      <input id="pre-loop-seconds" type="number" min="3" max="120" value="${escapeAttr(ps.loopSeconds || 8)}" style="max-width:100px">
      <label>When countdown hits zero</label>
      <select id="pre-on-zero">
        <option value="first" ${ps.onZero !== "welcome" ? "selected" : ""}>Show first service slide</option>
        <option value="welcome" ${ps.onZero === "welcome" ? "selected" : ""}>Show Welcome (title card)</option>
      </select>
      <h3 style="margin-top:16px">Announcement loop</h3>
      <p class="lede">Pick word slides from this Sunday:</p>
      <div class="pre-picks">${picks}</div>
      <label>Extra loop slide (optional)</label>
      <input id="pre-extra-title" placeholder="Title">
      <textarea id="pre-extra-body" placeholder="Announcement text"></textarea>
      <button type="button" class="ghost" id="pre-extra-add" style="margin-top:8px">Add to loop list</button>
      ${extras ? `<div style="margin-top:10px">${extras}</div>` : ""}
      <div class="row" style="margin-top:14px">
        <button type="button" class="ghost" id="pre-save">Save settings</button>
        <button type="button" class="solid" id="pre-start">${preActive ? "Restart pre-service" : "Start pre-service"}</button>
      </div>
    </section>`;
}

function publishLive() {
  localStorage.setItem(LIVE, JSON.stringify({
    slideIndex,
    black,
    titleCard,
    serviceId: state.activeId,
    stageMessage: stageMessage || "",
    countdownEnd: countdownEnd || null,
    stageTheme: stageTheme === "light" ? "light" : "dark",
    lowerBg: lowerBg === "green" ? "green" : "transparent",
    preservice: preActive && preRuntime ? {
      active: true,
      label: preRuntime.label,
      withCountdown: !!preRuntime.withCountdown,
      withLoop: !!preRuntime.withLoop,
      countdownEnd: preRuntime.countdownEnd || null,
      loopSeconds: preRuntime.loopSeconds || 8,
      loopIndex: preRuntime.loopIndex || 0,
      loopLastAdvance: preRuntime.loopLastAdvance || Date.now(),
      slides: preRuntime.slides || [],
      onZero: preRuntime.onZero || "first",
      serviceId: preRuntime.serviceId || state.activeId
    } : null
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
    if (live.lowerBg === "green" || live.lowerBg === "transparent") lowerBg = live.lowerBg;
    if (live.preservice && live.preservice.active) {
      preActive = true;
      preRuntime = live.preservice;
      startPreTick();
    } else if (isHouse || isStage) {
      preActive = false;
      preRuntime = null;
    }
  }
  showNotes = false;
  if (isLower) paintLowerThirds();
  else if (isStage) paintStageDisplay();
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

  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ""; };
  if (preActive && preRuntime) {
    const slides = preRuntime.slides || [];
    const slide = slides.length ? slides[(preRuntime.loopIndex || 0) % slides.length] : null;
    const left = preRuntime.withCountdown && preRuntime.countdownEnd ? Math.max(0, preRuntime.countdownEnd - Date.now()) : null;
    set("sd-cur-kicker", preRuntime.withLoop && slide ? (slide.title || "Announcement") : (preRuntime.label || "Pre-service"));
    set("sd-cur-title", preRuntime.withLoop && slide ? (slide.body || slide.title || "") : (left === null ? "Pre-service" : formatCountdown(left)));
    set("sd-cur-body", preRuntime.withCountdown && preRuntime.withLoop && left !== null
      ? ((preRuntime.label || "Service starts in") + "  " + formatCountdown(left))
      : "");
    set("sd-next-kicker", "Pre-service");
    set("sd-next-title", preRuntime.withLoop ? "Announcement loop" : "Countdown");
    set("sd-next-body", "Stop from the laptop when ready.");
  } else {
  const slides = slidesFor(active());
  const index = Math.max(0, Math.min(slideIndex, Math.max(0, slides.length - 1)));
  const current = titleCard
    ? { kicker: "Title", title: churchName(), body: active().name }
    : (black ? { kicker: "", title: "", body: "" } : slidePlain(slides[index]));
  const next = black || titleCard ? null : slidePlain(slides[index + 1]);
  set("sd-cur-kicker", current.kicker);
  set("sd-cur-title", current.title);
  set("sd-cur-body", current.body);
  set("sd-next-kicker", next ? next.kicker : "");
  set("sd-next-title", next ? next.title : "End");
  set("sd-next-body", next ? next.body : "");
  }

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


function lowerThirdsUrl() {
  const base = location.href.split("?")[0].split("#")[0];
  const bg = lowerBg === "green" ? "&bg=green" : "";
  return base + "?screen=lower" + bg;
}

function openLowerThirds() {
  publishLive();
  lowerWindow = window.open(lowerThirdsUrl(), "wwm-lower");
}

function toggleLowerBg() {
  lowerBg = lowerBg === "green" ? "transparent" : "green";
  publishLive();
  if (isLower) paintLowerThirds();
}

function lowerThirdContent() {
  const speaker = (state.roles && (state.roles.preacher || state.roles.slides) || "").trim();
  if (black) return { hidden: true, kicker: "", title: "", body: "", speaker: "" };
  if (titleCard) {
    return {
      hidden: false,
      kicker: "Welcome",
      title: churchName(),
      body: active().name || "",
      speaker: speaker
    };
  }
  const slides = slidesFor(active());
  if (!slides.length) return { hidden: true, kicker: "", title: "", body: "", speaker: "" };
  const index = Math.max(0, Math.min(slideIndex, slides.length - 1));
  const slide = slides[index] || {};
  const kind = slide.kind || (slide.item && slide.item.type) || "";
  let body = String(slide.body || "").trim();
  // Prefer the lyric/verse lines; keep title as the song or passage name.
  if (kind === "credit") {
    return { hidden: false, kicker: "Song", title: slide.title || "", body: body, speaker: "" };
  }
  const kicker = slide.kicker || (kind === "verse" ? "Lyrics" : kind === "scripture" ? "Scripture" : "");
  const showSpeaker = !!(speaker && (kind === "word" || kind === "title" || !body));
  return {
    hidden: !(slide.title || body),
    kicker: kicker,
    title: slide.title || "",
    body: body,
    speaker: showSpeaker ? speaker : (kind === "verse" || kind === "scripture" ? "" : speaker)
  };
}

function paintLowerThirds() {
  const root = document.getElementById("lower-thirds");
  if (!root) return;
  root.hidden = false;
  document.documentElement.classList.add("lower-thirds-html");
  document.body.classList.add("lower-thirds-mode");
  document.body.classList.toggle("lt-green", lowerBg === "green");
  document.documentElement.classList.toggle("lt-green", lowerBg === "green");
  const content = lowerThirdContent();
  const bar = document.getElementById("lt-bar");
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text || ""; };
  set("lt-kicker", content.kicker);
  set("lt-title", content.title);
  set("lt-body", content.body);
  const sp = document.getElementById("lt-speaker");
  if (sp) {
    const name = (content.speaker || "").trim();
    sp.hidden = !name;
    sp.textContent = name ? ("— " + name) : "";
  }
  if (bar) bar.hidden = !!content.hidden;
  const toggle = document.getElementById("lt-bg-toggle");
  if (toggle) toggle.textContent = lowerBg === "green" ? "Transparent" : "Green screen";
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
  const stage = stageRoot();
  const screen = document.querySelector("#screen");
  if (!stage || !screen) return;
  if (preActive && preRuntime) {
    stage.className = "stage on " + state.theme + " " + state.size + " pre-service-on";
    const badge = document.querySelector("#rehearse-badge");
    if (badge) badge.classList.add("hidden");
    screen.style.backgroundImage = "";
    screen.classList.remove("has-photo", "is-credit");
    applyBackground(screen);
    paintPreserviceScreen(screen);
    const pos = document.querySelector("#pos");
    if (pos) pos.textContent = "Pre-service";
    const notes = document.querySelector("#notes");
    if (notes) notes.innerHTML = "<b>Pre-service</b><div>Loop / countdown on the projector</div>";
    return;
  }
  const slides = slidesFor(active());
  if (!slides.length) return;
  slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
  const slide = titleCard && (isHouse || view === "booth")
    ? { kind: "title", title: churchName(), body: active().name, kicker: "Worship With Me" }
    : slides[slideIndex];
  stage.className = "stage on " + state.theme + " " + state.size + (!isHouse && showNotes ? " stage-notes" : "");
  const badge = document.querySelector("#rehearse-badge");
  if (badge) badge.classList.toggle("hidden", !(!isHouse && showNotes && !countingUsage));
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
  if (isHouse || isStage || isLower) return;
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

if (!isHouse && !isStage && !isLower && typeof wwmGoatLoad === "function") wwmGoatLoad();

if (isLower) {
  document.title = "Lower-thirds · Worship With Me";
  const bgParam = new URLSearchParams(location.search).get("bg");
  if (bgParam === "green") lowerBg = "green";
  if (bgParam === "transparent") lowerBg = "transparent";
  const toggle = document.getElementById("lt-bg-toggle");
  if (toggle) toggle.onclick = () => toggleLowerBg();
  window.addEventListener("storage", (event) => {
    if (event.key === KEY || event.key === LIVE) applyLive();
  });
  if (liveChannel) liveChannel.onmessage = () => applyLive();
  applyLive();
} else if (isStage) {
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
