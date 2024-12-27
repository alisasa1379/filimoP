async function Slider() {
  let slider = null;
  let data = await fetch("https://alisasa1379.github.io/jsonServerP/db.json");
  let res = await data.json();
  slider = res.slider.map((elem) => {
    return `
<div class="swiper-slide">
        <img src=${elem.src} alt=${elem.alt}>
    </div>
`;
  });
  console.log(slider);

  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("afterbegin", slider.join(" "));
}

export default Slider;
