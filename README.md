# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./Screenshot%202022-07-20%20205134.png)
![](./Screenshot%202022-07-20%20205221.png)

### Links

- Solution URL: [](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub/ecommerce-product-page-7GVzewmNlU)
- Live Site URL: [](https://nano950.github.io/product-page-challenge/)

## My process

- create repo
- plan webiste
- add html content
- style website
- add responsiveness
- add interactivity
- make project live

### Built with


- CSS custom properties
- Flexbox
- Sass
- javascript
- responsive design
- Mobile-first workflow

### What I learned

I am unsure if I can say that I ran into any major issue when making this website. An important thing that I believe I have internalized is that a shorter amount of high-foucs and effort work is MUCH better than lots of low focus, low energy work. Within that las 3 days, I have finished over 50% of this project, as opposed to the week before (I tool lots of day-long breaks).

```js
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
```

I am proud of this function becuase it worked on the first try.

### Continued development

- when you try to add a negative number of items to your cart, the counter stays at zero
- when the lightbox on desktop is opened, all other menus close automatically
- the number of items in your cart remains after the page is refreshed
- the function that is used to add items to the cart is too specific, it could be generalized to improve usability
- thumbnail images do not affect other thumbnails when they are hovered over, this happens in the first because I used a flexbox to arrange them.

### Useful resources

- [Example resource 1](https://www.w3schools.com) - W3Schools helped me understand how to create a lightbox, as well as a slideshow.\

## Author

- Frontend Mentor - [@Nano950](https://www.frontendmentor.io/home)