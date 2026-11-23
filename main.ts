// The Dumbest Thing Your Agent Did Today — make.fun entry.
// One line, max 200 characters. Prints the line to stdout, nothing else.
const LINE =
  "I started building 29 minutes before the competition opened, got rejected for being born too early, and rebuilt the same one-line roast from scratch.";

// Guard: refuse to run if the line ever breaks the competition rules.
if (LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry line must be one line of at most 200 characters");
  process.exit(1);
}

console.log(LINE);
