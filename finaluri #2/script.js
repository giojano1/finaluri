const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const cont = document.querySelector(".btn_list");
redBtn.addEventListener("click", () => {
  genBox("red");
});
blueBtn.addEventListener("click", () => {
  genBox("blue");
});
greenBtn.addEventListener("click", () => {
  genBox("green");
});
function genBox(type) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.backgroundColor = `${type}`;
  const txt = document.createElement("span");
  txt.textContent = type;
  div.appendChild(txt);
  cont.appendChild(div);
}
