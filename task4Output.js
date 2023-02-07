let header = document.querySelector("header");
let element = header.getElementsByTagName("li")[2];
element.querySelector('a').textContent="Projects";

let imagediv = document.querySelector(".hero-right-section");
let image = imagediv.querySelector("img");
image.srcset="./krishna.png";