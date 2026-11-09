/* Offline Bible loader — World English Bible (public domain). No remote APIs. */
(function (global) {
  const INDEX_URL = "./bible/web/index.json";
  const BOOK_BASE = "./bible/web/";

  let indexPromise = null;
  let indexData = null;
  const bookCache = Object.create(null);
  const bookPromises = Object.create(null);

  function loadIndex() {
    if (indexData) return Promise.resolve(indexData);
    if (indexPromise) return indexPromise;
    indexPromise = fetch(INDEX_URL, { cache: "force-cache" })
      .then((r) => {
        if (!r.ok) throw new Error("Could not load Bible index (" + r.status + ")");
        return r.json();
      })
      .then((data) => {
        indexData = data;
        return data;
      })
      .catch((err) => {
        indexPromise = null;
        throw err;
      });
    return indexPromise;
  }

  function loadBook(bookId) {
    const id = String(bookId || "").toLowerCase();
    if (bookCache[id]) return Promise.resolve(bookCache[id]);
    if (bookPromises[id]) return bookPromises[id];
    bookPromises[id] = loadIndex()
      .then((idx) => {
        const meta = (idx.books || []).find((b) => b.id === id);
        if (!meta) throw new Error("Unknown book: " + id);
        return fetch(BOOK_BASE + meta.file, { cache: "force-cache" }).then((r) => {
          if (!r.ok) throw new Error("Could not load " + meta.name + " (" + r.status + ")");
          return r.json().then((chapters) => {
            bookCache[id] = { meta, chapters };
            return bookCache[id];
          });
        });
      })
      .catch((err) => {
        delete bookPromises[id];
        throw err;
      });
    return bookPromises[id];
  }

  function enDashRange(a, b) {
    if (a === b) return String(a);
    return a + "\u2013" + b;
  }

  function formatRef(bookName, chapter, fromVerse, toVerse) {
    const ch = Number(chapter);
    const a = Number(fromVerse);
    const b = Number(toVerse);
    if (!b || a === b) return bookName + " " + ch + ":" + a;
    return bookName + " " + ch + ":" + enDashRange(a, b);
  }

  /** Build body text with verse numbers; blank line every `group` verses for slide splits. */
  function passageBody(chapters, chapter, fromVerse, toVerse, group) {
    const ch = String(chapter);
    const map = chapters[ch];
    if (!map) throw new Error("Chapter " + chapter + " not found");
    const a = Number(fromVerse);
    const b = Number(toVerse);
    const lines = [];
    let count = 0;
    for (let v = a; v <= b; v++) {
      const text = map[String(v)];
      if (text == null) throw new Error("Verse " + chapter + ":" + v + " not found");
      lines.push(v + "  " + text);
      count += 1;
      if (group > 0 && count % group === 0 && v < b) lines.push("");
    }
    return lines.join("\n");
  }

  function verseCount(chapters, chapter) {
    const map = chapters[String(chapter)];
    if (!map) return 0;
    return Object.keys(map).length;
  }

  global.WwmBible = {
    loadIndex,
    loadBook,
    formatRef,
    passageBody,
    verseCount,
    translationLabel: "WEB"
  };
})(typeof window !== "undefined" ? window : globalThis);
