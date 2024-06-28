const fetchBtn = document.getElementById("fetchJoke");
const jokeTxt = document.getElementById("joke");
const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const counter = document.getElementById("counter");
fetchBtn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      jokeTxt.textContent = data.value;
    });
});

likeBtn.addEventListener("click", () => {
  counter.textContent++;
});
dislikeBtn.addEventListener("click", () => {
  counter.textContent--;
});
