#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const SI = require("../song-import.js");
const fix = (...p) => fs.readFileSync(path.join(__dirname, "fixtures", ...p), "utf8");

let failed = 0;
function assert(cond, msg) {
  if (!cond) { failed += 1; console.error("FAIL:", msg); }
  else console.log("ok:", msg);
}
function eq(a, b, msg) {
  const ok = JSON.stringify(a) === JSON.stringify(b);
  assert(ok, msg + (ok ? "" : "\n  got: " + JSON.stringify(a) + "\n  exp: " + JSON.stringify(b)));
}

// Section labels
assert(SI.isSectionLabel("Verse 1"), "Verse 1");
assert(SI.isSectionLabel("[V1]"), "[V1]");
assert(SI.isSectionLabel("Chorus:"), "Chorus:");
assert(SI.isSectionLabel("Bridge"), "Bridge");
assert(!SI.isSectionLabel("Come to the water"), "lyric line not a label");
eq(SI.normalizeLabel("v2"), "Verse 2", "normalize v2");
eq(SI.normalizeLabel("cho"), "Chorus", "normalize cho");

// Chord strip
eq(SI.stripChords("[G]Wake to the [C]morning").trim(), "Wake to the morning", "strip chords");

// Paste
const pasted = SI.parsePaste("Test Song", fix("paste-sample.txt"));
eq(pasted.title, "Test Song", "paste title");
assert(pasted.verses.length === 3, "paste 3 sections");
eq(pasted.verses[0].label, "Verse 1", "paste V1 label");
eq(pasted.verses[1].label, "Chorus", "paste Chorus label");
assert(pasted.verses[0].body.includes("Line one"), "paste body");

// SongSelect
const ss = SI.parseSongSelect(fix("songselect-sample.txt"), "songselect-sample.txt");
eq(ss.title, "River of Mercy", "ss title");
eq(ss.ccli, "900001", "ss ccli");
assert(ss.author.includes("Ada Example"), "ss author");
assert(/Example Music/.test(ss.copyright), "ss copyright");
assert(ss.verses.some(v => v.label === "Chorus"), "ss chorus");
assert(ss.verses[0].body.includes("Come to the water"), "ss verse body");

// ChordPro
const cp = SI.parseChordPro(fix("chordpro-sample.cho"), "chordpro-sample.cho");
eq(cp.title, "Morning Light", "cp title");
eq(cp.ccli, "900002", "cp ccli");
assert(cp.author.includes("Sam Example"), "cp author");
assert(/2019/.test(cp.copyright), "cp copyright");
assert(cp.verses.some(v => v.label === "Chorus"), "cp chorus section");
assert(!/\[[A-G]/.test(cp.verses.map(v => v.body).join("")), "cp chords stripped");
assert(cp.verses[0].body.includes("Wake to the morning"), "cp lyric text");

// File router
eq(SI.parseSongFile(fix("chordpro-sample.cho"), "x.cho").title, "Morning Light", "router cho");
eq(SI.parseSongFile(fix("songselect-sample.txt"), "x.txt").ccli, "900001", "router txt");

// Duplicates
const existing = [{ id: "1", title: "River of Mercy", ccli: "900001" }, { id: "2", title: "Other", ccli: "" }];
assert(SI.detectDuplicate({ title: "Nope", ccli: "900001" }, existing).id === "1", "dup by ccli");
assert(SI.detectDuplicate({ title: "river of mercy", ccli: "" }, existing).id === "1", "dup by title");
assert(SI.detectDuplicate({ title: "Fresh Song", ccli: "1" }, existing) === null, "no dup");

if (failed) { console.error("\n" + failed + " failed"); process.exit(1); }
console.log("\nAll song-import tests passed.");
