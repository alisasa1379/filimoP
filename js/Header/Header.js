async function Header() {
  let Header = null;
  let btns = null;
  let data = await fetch("https://alisasa1379.github.io/jsonServerP/db.json");
  let res = await data.json();
  Header = res.menu.map((elem) => {
    return `<li key=${elem.id}>
            ${elem.icon?`<img src=${elem.icon} alt="icon">`:''}
            <a href=${elem.href}>${elem.name}</a>
            </li>`;
  });
  document
    .querySelector("#menuRight>nav>ul")
    .insertAdjacentHTML("afterbegin", Header.join(""));

  let btnData = await fetch("https://alisasa1379.github.io/jsonServerP/db.json");
  let btnRes = await btnData.json();
  btns = btnRes.menuBtns.map((elem) => {
    return `<button class="${elem.id === 1 || elem.id === "1" ? "sub" : "login"}">${
      elem.name
    }</button>`;
  });
  document
    .querySelector("#menuLeft")
    .insertAdjacentHTML("afterbegin", btns.join(""));
}

export default Header;
