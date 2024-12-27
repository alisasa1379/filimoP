async function Products(){
    let products = null;
    let data = await fetch("https://alisasa1379.github.io/jsonServerP/db.json");
    let res = await data.json();
    products = res.products.map((elem) => {
      return `          <div class="product">
            <h1>${elem.title}</h1>
            <img src=${elem.img} alt="pro">
            <div class="description">${elem.description}</div>
              <div class="price">$ ${elem.price}</div>
              <a href="#">buy</a>
          </div>`;
    });
    document.querySelector("#products").insertAdjacentHTML("afterbegin",products.join(" "))
}

export default Products