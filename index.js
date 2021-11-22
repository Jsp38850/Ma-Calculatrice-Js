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
  switch (e.key) {
    case "0":
      result.textContent += 0;
      break;
    case "1":
      result.textContent += 1;
      break;
    case "2":
      result.textContent += 2;
      break;
    case "3":
      result.textContent += 3;
      break;
    case "4":
      result.textContent += 4;
      break;
    case "5":
      result.textContent += 5;
      break;
    case "6":
      result.textContent += 6;
      break;
    case "7":
      result.textContent += 7;
      break;
    case "8":
      result.textContent += 8;
      break;
    case "9":
      result.textContent += 9;
      break;
    case "-":
      result.textContent += "-";
      break;
    case "+":
      result.textContent += "+";
      break;
    case "*":
      result.textContent += "*";
      break;
    case "/":
      result.textContent += "/";
      break;
    case ".":
      result.textContent += ".";
      break;
    case "Enter":
      result.textContent = eval(result.textContent);
      break;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Delete" || e.code === "Backspace") {
    result.textContent = "";
  }
});
