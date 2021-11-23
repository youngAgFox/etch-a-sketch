const SPACE_SIDE_PIXELS = 960;
const board = document.querySelector("#board");
board.style.width = `${SPACE_SIDE_PIXELS}px`;
board.style.height = `${SPACE_SIDE_PIXELS}px`;
calcGrid(16);

function calcGrid(cells) {
    while(board.firstChild)
        board.removeChild(board.firstChild);
    let length = SPACE_SIDE_PIXELS / cells;
    board.style["grid-template-columns"] = `repeat(${cells}, 1fr)`;
    // add new cells
    for (let i = 0; i < cells ** 2; i++) {
        const div = document.createElement("div");
        div.style.height = `${length}px`
        div.style.width = `${length}px`
        div.style.opacity = 0;
        div.classList.add("cell");
        div.addEventListener("mouseover", () => {
            let opacity = parseFloat(div.style.opacity);
            if (opacity < 1) {
                div.style.opacity = 0.1 + opacity;
            }
        });
        board.appendChild(div);
    }
}

function promptCells() {
    const cells = prompt("How many cells would you like? <1-100> ");
    if (cells > 0 && cells <= 100)
        calcGrid(cells);
    else alert("Number of cells were out of range");
}