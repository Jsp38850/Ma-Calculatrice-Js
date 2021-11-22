const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});

//Avec les touches du clavier

document.addEventListener("keypress", (e) => {
  if (e.key === "0") {
    result.textContent += 0;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "1") {
    result.textContent += 1;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "2") {
    result.textContent += 2;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "3") {
    result.textContent += 3;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "4") {
    result.textContent += 4;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "5") {
    result.textContent += 5;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "6") {
    result.textContent += 6;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "7") {
    result.textContent += 7;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "8") {
    result.textContent += 8;
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "9") {
    result.textContent += 9;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === ".") {
    result.textContent += ".";
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "+") {
    result.textContent += "+";
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "-") {
    result.textContent += "-";
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "/") {
    result.textContent += "/";
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "*") {
    result.textContent += "*";
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    result.textContent = eval(result.textContent);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Delete" || e.code === "Backspace") {
    result.textContent = "";
  }
});
