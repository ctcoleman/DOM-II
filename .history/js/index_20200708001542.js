// Your code goes here
/*
* [x] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
* [ ] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
*/

// Nav links change opacity when hovered over
const navLinks = document.querySelectorAll('.nav-link')
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseover', (event) => {
    event.target.style.opacity = '0.6'
  })
  navLinks[i].addEventListener('mouseleave', (event) => {
    event.target.style.opacity = '1.0'
  })
}

//Pressing tab key goes to different headings
const allHeadings = document.querySelectorAll('h2')

document.addEventListener('keydown', )