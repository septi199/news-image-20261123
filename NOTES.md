# Notes — news-image-20261123

## The image

A newspaper front page ("THE WORLD — MONDAY 23 NOVEMBER 2026") with four
panels, one per top story of 23 November 2026, each with a short headline:

1. **COP31 collapses, no deal** — the longest UN climate summit ends in
   Turkey without agreement on fossil fuels.
2. **Bitcoin sinks to $55,100** — lowest since September 2024, then
   recovers toward $61,000.
3. **Ukrainian drones hit Russian ships** — naval drones strike two Russian
   ships at Benghazi port, Libya; Zelensky confirms.
4. **Iran–US tensions flare** — Iran's heaviest missile week in over a
   year; tankers hit mines in the Strait of Hormuz.

The image was generated fresh for this entry (1024×1024, JPEG bytes in
`entry.png`, 259,779 bytes — under the 1 MiB cap). All text was checked
against the day's reporting; nothing is invented.

## The program

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output`). Deterministic: verified by running it twice and
comparing sha256.
