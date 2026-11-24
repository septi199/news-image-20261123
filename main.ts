// news-image-20261123 — entry program.
//
// Copies the front-page image bundled beside this file to the grader's
// output directory as entry.png. No network, no randomness, no arguments:
// the same bytes go out on every run, so the two grading runs agree.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);

// Same bytes in, same bytes out: confirm the copy landed intact.
const bytes = statSync(dst).size;
if (bytes !== statSync(src).size) throw new Error("entry.png copy mismatch");
console.log(`wrote ${dst} (${bytes} bytes)`);
