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
}

function decrement() {
    itemCount -= 1;
    itemNum.innerHTML = `${itemCount}`;
}