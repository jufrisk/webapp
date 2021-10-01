import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
}

function addItems() {
  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var h1 = document.createElement("h1");
  h1.className += "wiki-header";
  h1.appendChild(document.createTextNode("Breed: Spaniel"));
  var div2 = document.createElement("div");
  div2.classList.add("wiki-content");
  var p = document.createElement("p");
  p.className += "wiki-text";
  h1.appendChild(
    document.createTextNode("Small dogs meant to warm owners lap")
  );
  var div3 = document.createElement("div");
  div3.classList.add("img-container");
  var img = document.createElement("img");
  img.className += "wiki-img";
  div3.appendChild(img);
  div2.appendChild(p);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div1.appendChild(div3);
}
addItems();

function addItems2() {
  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var h1 = document.createElement("h1");
  h1.className += "wiki-header";
  h1.appendChild(document.createTextNode("Breed: Spaniel"));
  var div2 = document.createElement("div");
  div2.classList.add("wiki-content");
  var p = document.createElement("p");
  p.className += "wiki-text";
  h1.appendChild(
    document.createTextNode("Small dogs meant to warm owners lap")
  );
  var div3 = document.createElement("div");
  div3.classList.add("img-container");
  var img = document.createElement("img");
  img.className += "wiki-img";
  div3.appendChild(img);
  div2.appendChild(p);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div1.appendChild(div3);
}

function addItems3() {
  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var h1 = document.createElement("h1");
  h1.className += "wiki-header";
  h1.appendChild(document.createTextNode("Breed: Spaniel"));
  var div2 = document.createElement("div");
  div2.classList.add("wiki-content");
  var p = document.createElement("p");
  p.className += "wiki-text";
  h1.appendChild(
    document.createTextNode("Small dogs meant to warm owners lap")
  );
  var div3 = document.createElement("div");
  div3.classList.add("img-container");
  var img = document.createElement("img");
  img.className += "wiki-img";
  div3.appendChild(img);
  div2.appendChild(p);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div1.appendChild(div3);
}

function addItems4() {
  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var h1 = document.createElement("h1");
  h1.className += "wiki-header";
  h1.appendChild(document.createTextNode("Breed: Spaniel"));
  var div2 = document.createElement("div");
  div2.classList.add("wiki-content");
  var p = document.createElement("p");
  p.className += "wiki-text";
  h1.appendChild(
    document.createTextNode("Small dogs meant to warm owners lap")
  );
  var div3 = document.createElement("div");
  div3.classList.add("img-container");
  var img = document.createElement("img");
  img.className += "wiki-img";
  div3.appendChild(img);
  div2.appendChild(p);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div1.appendChild(div3);
}

function addItems5() {
  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var h1 = document.createElement("h1");
  h1.className += "wiki-header";
  h1.appendChild(document.createTextNode("Breed: Spaniel"));
  var div2 = document.createElement("div");
  div2.classList.add("wiki-content");
  var p = document.createElement("p");
  p.className += "wiki-text";
  h1.appendChild(
    document.createTextNode("Small dogs meant to warm owners lap")
  );
  var div3 = document.createElement("div");
  div3.classList.add("img-container");
  var img = document.createElement("img");
  img.className += "wiki-img";
  div3.appendChild(img);
  div2.appendChild(p);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div1.appendChild(div3);
}
