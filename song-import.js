// Song paste + file parsers for Worship With Me.
// Browser: window.SongImport. Node tests: module.exports.
(function (root) {
  "use strict";

  const SECTION_RE = /^(?:\[)?\s*(verse\s*\d*|v(?:erse)?\s*\d+|chorus|cho|bridge|pre-?chorus|tag|ending|outro|intro|instrumental|interlude|refrain|coda|hook)\s*(?:\])?\s*:?\s*$/i;
  const BRACKET_SECTION_RE = /^\[([^\]]+)\]\s*$/;

  function normalizeLabel(raw) {
    const s = String(raw || "").replace(/^\[|\]$/g, "").replace(/:$/, "").trim();
    if (!s) return "";
    const m = s.match(/^v(?:erse)?\s*(\d+)$/i);
    if (m) return "Verse " + m[1];
    if (/^cho(?:rus)?$/i.test(s)) return "Chorus";
    if (/^pre-?chorus$/i.test(s)) return "Pre-Chorus";
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function isSectionLabel(line) {
    const t = String(line || "").trim();
    if (!t) return false;
    if (SECTION_RE.test(t)) return true;
    const b = t.match(BRACKET_SECTION_RE);
    if (b && SECTION_RE.test(b[1].trim())) return true;
    if (b && /^(verse|chorus|bridge|tag|intro|outro|ending|pre)/i.test(b[1].trim())) return true;
    return false;
  }

  function labelFromLine(line) {
    const t = String(line || "").trim();
    const b = t.match(BRACKET_SECTION_RE);
    return normalizeLabel(b ? b[1] : t);
  }

  function stripChords(line) {
    // ChordPro chord markers like [C], [G/B], [F#m7], [*]
    return String(line || "").replace(/\[[^\]]*]/g, "").replace(/[ \t]+\n/g, "\n").replace(/[ \t]{2,}/g, " ").trimEnd();
  }

  function blocksFromText(text) {
    return String(text || "").replace(/\r\n/g, "\n").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  }

  function versesFromBlocks(blocks) {
    const verses = [];
    blocks.forEach((block) => {
      const lines = block.split("\n").map((l) => l.trimEnd());
      if (!lines.length) return;
      const first = lines[0].trim();
      if (isSectionLabel(first)) {
        const label = labelFromLine(first);
        const body = lines.slice(1).join("\n").trim();
        if (body) verses.push({ label: label, body: body });
        else if (label) verses.push({ label: label, body: "" });
      } else {
        verses.push({ label: "", body: block });
      }
    });
    return verses.filter((v) => v.body);
  }

  function parsePaste(title, text) {
    const verses = versesFromBlocks(blocksFromText(text));
    return {
      title: String(title || "").trim() || "Untitled",
      author: "",
      ccli: "",
      copyright: "",
      pd: false,
      verses: verses
    };
  }

  function parseSongSelect(text, filename) {
    const raw = String(text || "").replace(/\r\n/g, "\n").trim();
    const lines = raw.split("\n");
    let title = "";
    let author = "";
    let ccli = "";
    let copyright = "";
    const bodyLines = [];

    // Trailing meta often: CCLI Song #, authors, © lines
    let end = lines.length;
    for (let i = lines.length - 1; i >= 0; i--) {
      const t = lines[i].trim();
      if (!t) { if (bodyLines.length || ccli || copyright || author) { end = i; break; } continue; }
      const ccliMatch = t.match(/^CCLI\s+Song\s*#?\s*[:#]?\s*(\d+)\s*$/i) || t.match(/^CCLI\s*#?\s*[:#]?\s*(\d+)\s*$/i);
      if (ccliMatch) { ccli = ccliMatch[1]; end = i; continue; }
      if (/^(©|\(c\)|copyright)/i.test(t) || /©/.test(t)) { copyright = (copyright ? t + "\n" + copyright : t).trim(); end = i; continue; }
      // Author lines after CCLI / before copyright — collect until blank or title-ish
      if (ccli || copyright) {
        if (!author) author = t;
        else author = t + ", " + author;
        end = i;
        continue;
      }
      break;
    }

    const main = lines.slice(0, end).join("\n").trim();
    const mainLines = main.split("\n");
    // First non-empty line is title if it isn't a section label
    let startIdx = 0;
    for (let i = 0; i < mainLines.length; i++) {
      if (mainLines[i].trim()) { startIdx = i; break; }
    }
    if (mainLines[startIdx] && !isSectionLabel(mainLines[startIdx])) {
      title = mainLines[startIdx].trim();
      startIdx += 1;
      while (startIdx < mainLines.length && !mainLines[startIdx].trim()) startIdx += 1;
    }
    if (!title) {
      title = String(filename || "Untitled").replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    }
    const body = mainLines.slice(startIdx).join("\n");
    const verses = versesFromBlocks(blocksFromText(body));
    // If no blank-line blocks, treat remaining as one verse
    const finalVerses = verses.length ? verses : (body.trim() ? [{ label: "", body: body.trim() }] : []);
    return { title: title, author: author, ccli: ccli, copyright: copyright, pd: false, verses: finalVerses };
  }

  function parseChordPro(text, filename) {
    const raw = String(text || "").replace(/\r\n/g, "\n");
    let title = "";
    let author = "";
    let ccli = "";
    let copyright = "";
    const verses = [];
    let curLabel = "";
    let cur = [];

    function flush() {
      const body = cur.map(stripChords).join("\n").replace(/\n{3,}/g, "\n\n").trim();
      cur = [];
      if (body) verses.push({ label: curLabel || "", body: body });
    }

    raw.split("\n").forEach((line) => {
      const dir = line.match(/^\{([^}:]+)(?::\s*(.*))?\}\s*$/);
      if (dir) {
        const key = dir[1].trim().toLowerCase();
        const val = (dir[2] || "").trim();
        if (key === "title" || key === "t") { title = val; return; }
        if (key === "artist" || key === "subtitle" || key === "st" || key === "composer" || key === "author") {
          author = author ? author + ", " + val : val;
          return;
        }
        if (key === "ccli" || key === "ccli_song_number") { ccli = val.replace(/[^\d]/g, "") || val; return; }
        if (key === "copyright" || key === "footer") { copyright = copyright ? copyright + "\n" + val : val; return; }
        if (key === "comment" || key === "c" || key === "comment_italic") {
          if (/©|\(c\)|copyright/i.test(val)) copyright = copyright ? copyright + "\n" + val : val;
          return;
        }
        if (key === "start_of_chorus" || key === "soc") { flush(); curLabel = "Chorus"; return; }
        if (key === "end_of_chorus" || key === "eoc") { flush(); curLabel = ""; return; }
        if (key === "start_of_verse" || key === "sov") { flush(); curLabel = val ? normalizeLabel(val) : "Verse"; return; }
        if (key === "end_of_verse" || key === "eov") { flush(); curLabel = ""; return; }
        if (key === "start_of_bridge" || key === "sob") { flush(); curLabel = "Bridge"; return; }
        if (key === "end_of_bridge" || key === "eob") { flush(); curLabel = ""; return; }
        if (key === "new_song" || key === "ns") { flush(); return; }
        return; // ignore other directives
      }
      if (!line.trim()) {
        if (cur.length) cur.push("");
        return;
      }
      // Bare section labels still allowed
      if (isSectionLabel(line.trim()) && !/\[[A-G]/.test(line)) {
        flush();
        curLabel = labelFromLine(line.trim());
        return;
      }
      cur.push(line);
    });
    flush();
    if (!title) title = String(filename || "Untitled").replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    return { title: title, author: author, ccli: ccli, copyright: copyright, pd: false, verses: verses };
  }

  function parseSongFile(text, filename) {
    const name = String(filename || "");
    if (/\.(cho|chordpro|pro)$/i.test(name)) return parseChordPro(text, name);
    return parseSongSelect(text, name);
  }

  function verseBodies(verses) {
    return (verses || []).map((v) => typeof v === "string" ? v : (v.body || "")).filter(Boolean);
  }

  function detectDuplicate(song, existing) {
    const list = existing || [];
    const ccli = String(song.ccli || "").trim();
    if (ccli) {
      const byCcli = list.find((s) => String(s.ccli || "").trim() === ccli);
      if (byCcli) return byCcli;
    }
    const title = String(song.title || "").trim().toLowerCase();
    if (!title) return null;
    return list.find((s) => String(s.title || "").trim().toLowerCase() === title) || null;
  }

  const api = {
    SECTION_RE: SECTION_RE,
    isSectionLabel: isSectionLabel,
    stripChords: stripChords,
    parsePaste: parsePaste,
    parseSongSelect: parseSongSelect,
    parseChordPro: parseChordPro,
    parseSongFile: parseSongFile,
    verseBodies: verseBodies,
    detectDuplicate: detectDuplicate,
    normalizeLabel: normalizeLabel
  };

  root.SongImport = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
