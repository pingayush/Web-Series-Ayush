const div = document.querySelector(".img");
const form = document.querySelector("form");
const inp = document.querySelector("input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const movsearched = inp.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${movsearched}`
  );
  makeimg(res);
});

const makeimg = (res) => {
  for (let i = 0; i < 10; i++) {
    if (res.data[i].show.image) {
      const img = document.createElement("img");
      img.classList.add("col-3", "my-4", "image-fluid","rounded");
      img.src = res.data[i].show.image.medium;
      div.append(img);
      img.style.opacity = 0.5;
      img.addEventListener("mouseover", (eve) => {
        setTimeout(() => {
          img.style.opacity = "1";

        }, 100);
      });
      inp.addEventListener("keyup", (eve) => {
        if (inp.value === "") {
          div.removeChild(img);
        }
      });
    }
  }
};
