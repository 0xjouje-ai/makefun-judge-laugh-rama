// Make the AI Judge Laugh — make.fun bounty entry.
// The program writes one line to /output/entry.txt: an office joke about
// a boss whose "always open" door turns out to be, literally, the fire exit.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My boss says his door is always open. It's the fire exit.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace: refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
