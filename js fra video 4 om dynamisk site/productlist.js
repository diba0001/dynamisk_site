const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //logger og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //____console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kpoi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h1").textContent = product.productdisplayname;
  if (!product.discount) {
    // produktet er discounted
    copy.querySelector(".sale_header").remove();
    copy.querySelector(".discounted").remove();
    copy.querySelector(".discount").remove();
  }
  copy.querySelector("h1").textContent = product.productdisplayname;
  console.log(product.soldout);
  if (!product.soldout) {
    // produktet er udsolgt
    copy.querySelector(".udsolgt_header").remove();
    copy.querySelector("a.udsolgt").classList.remove("udsolgt");
  }

  copy.querySelector(".item_image_link").setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //append til DOM
  document.querySelector("main").appendChild(copy);
}

// object
/* id	1164
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Winter"
productionyear	2015
usagetype	"Sports"
productdisplayname	"Blue T20 Indian Cricket Jersey"
price	1595
discount	28
brandname	"Nike"
soldout	1 */
