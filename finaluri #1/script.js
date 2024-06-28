const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const cont = document.querySelector(".cont");
addBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  cont.appendChild(newDiv);
});
removeBtn.addEventListener("click", () => {
  const box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.remove();
  });
});
