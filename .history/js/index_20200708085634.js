// Your code goes here
/*
* [x] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
* [x] `mouseover`
* [x] `keydown`
* [x] `wheel`
* [x] `drag / drop`
* [x] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
*/

// One: Nav links change color when hovered over
const navLinks = document.querySelectorAll('.nav-link')
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green'
  })
  navLinks[i].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
  })
}

// Two: Keydown spacebar changes the text color and background color
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    event.target.style.backgroundColor = 'grey'
    event.target.style.color = 'aqua'
  }
})

// Three: Scroll on and off picture borders
const allImages = document.querySelectorAll('img')

for (let i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('wheel', (event) => {
    if (event.target.style.border === '') {
      event.target.style.border = '2px solid black'
    } else { event.target.style.border = '' }
  })
}

// Four: Dragging picture changes opacity
for (let i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('drag', (event) => { event.target.style.opacity = '0.0' })
  allImages[i].addEventListener('dragend', (event) => { event.target.style.opacity = '1.0' })
}

// Five: When page loads alert box welcomes user to the page
window.addEventListener('load', () => { alert('Welcome to the F') })

// Six: When focus in on sign me up button 