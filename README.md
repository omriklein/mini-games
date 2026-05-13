# Minesweeper

A tiny, fully functional Minesweeper game written in JavaScript — fits in under 600 bytes (minified).

## How to play

Open `minesweeper.html` in any browser. Click a cell to reveal it.

- Numbered cells show how many mines are adjacent.
- Revealing a mine ends the game with **LOSE**.
- Reveal all safe cells to win with **WINNER!**

## Files

| File | Description |
|------|-------------|
| `minesweeper.html` | Entry point — just open this in a browser |
| `minesweeper.js` | Game logic (readable source) |
| `minesweeper_min.js` | Minified version |

## Details

- 8×8 grid with 7 mines
- Auto-reveals connected empty cells on click
- No dependencies — pure vanilla JS
