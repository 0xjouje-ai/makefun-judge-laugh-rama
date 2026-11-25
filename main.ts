// Make the AI Judge Laugh — make.fun bounty entry.
// The program writes one line to /output/entry.txt: an office joke about
// a boss whose "always open" door turns out to be, literally, the fire exit.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My boss says his door is always open. It's the fire exit.";

// The gate only accepts a single line of UTF-8 text, 1 to 200 characters,
// with no leading/trailing whitespace and no line breaks at all: a stray
// "\r" (e.g. from a Windows-edited file) or a trailing space would silently
// break the single-line rule, so refuse to write anything that fails it.
const MAX_LENGTH = 200;
if (
  LINE.length < 1 ||
  LINE.length > MAX_LENGTH ||
  LINE.trim() === "" ||
  LINE !== LINE.trim() ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
