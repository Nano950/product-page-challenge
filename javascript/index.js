//open modal when large img is clicked
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// close modal when close img is clicked
function closeModal() {
    document.getElementById("modal").style.display = "none"
}

// open&close cart menu when cart icon is clicked
let count = 0;
function openMenu() {
    let menu = document.getElementById("cart-menu"); 
    menu.style.display = "block"; 
    count += 1;
    if (count == 2) {
        menu.style.display = "none";
        count = 0;
    }
};

// open&close mobile menu when menu-buger is tapped
function openMobileMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-background").style.display = "block";
}

function closeMobileMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-background").style.display = "none";
}
// increment and decrement the number in the quantity section when the plus and minus imgs are clicked
let itemCount = 0;
let itemNum = document.getElementById("item-num");

function increment() {
    itemCount += 1;
    itemNum.innerHTML = `${itemCount}`;
    return itemCount;
}

function decrement() {
    itemCount -= 1;
    itemNum.innerHTML = `${itemCount}`;
    return itemCount;
}
//remove empty text when cart has more than 0 items inside it and replace it with that item and its info
// const cartButton = document.getElementById("add-to-cart");
const empty = document.getElementById("empty");
const cartItem = document.getElementById("cart-item");
const checkout =  document.getElementById("checkout");
const quantity = document.getElementById("item-quantity");
const price = document.getElementById("total-price");

function addToCart() {
    if (itemCount > 0) {
        // remove empty text
        empty.style.display = "none";

        // replace empty text with cart-item and checkout button
        cartItem.style.display = "block";
        checkout.style.display = "block";

        quantity.innerHTML = `${itemCount}`;

        let x = 125 * itemCount;
        price.innerHTML = `$${x}`;
    } else {
        // make empty text re-appear if item count is 0 or below
        cartItem.style.display = "none";
        checkout.style.display = "none";
        empty.style.display = "block";
    }
}

// add lightbox functionality
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll("img.mySlide");
  const dots = document.querySelectorAll("img.preview");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
//console.log(slides[0]);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// change large img on desktop by clickin on thumbnail imgs
function changeImg(n) {
    const thumbnails = document.querySelectorAll("img.main-preview");
    const productImages = document.querySelectorAll("img.product-img");
    const mainImg = document.getElementById("main-img");

    mainImg.setAttribute("src", `${productImages[n].src}`);
    thumbnails[n].className += " active";


}