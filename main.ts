import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "After a year of tracing letters by lamplight, the old fisherman read his grandson's birthday card aloud — and his hands, for once, did not shake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
