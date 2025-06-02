 const container = document.getElementById("container");
    let currentPlayer = "X";

    // Criação das células dinamicamente
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", () => handleClick(cell));
      container.appendChild(cell);
    }

    function handleClick(cell) {
      cell.textContent = currentPlayer;
      cell.classList.add("taken");
      // adições futuras no projeto
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }