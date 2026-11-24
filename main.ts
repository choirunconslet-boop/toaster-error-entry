// The Funniest Toaster Error Message
// Writes a single-line toaster error message to /output/entry.txt.
// Gate: UTF-8 text, 1-120 characters, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "ERROR E03: BREAD JAMMED. IT HAS DECIDED TO LIVE HERE NOW.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
