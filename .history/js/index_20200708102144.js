// Your code goes here
/*
* [x] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
* [x] `mouseover`
* [x] `keydown`
* [x] `wheel`
* [x] `drag / drop`
* [x] `load`
* [x] `focus`
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
navLinks.forEach(links => {
  links.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green'
  })
  links.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
  })
})

// Two: Keydown spacebar changes the text color and background color
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    event.target.style.backgroundColor = 'grey'
    event.target.style.color = 'aqua'
  }
})

// Three: Scroll on and off picture borders
const allImages = document.querySelectorAll('img')

allImages.forEach( images => {
  images.addEventListener('wheel', (event) => {
    if (event.target.style.border === '') {
      event.target.style.border = '2px solid black'
    } else { event.target.style.border = '' }
  })
})

// Four: Dragging picture changes opacity
allImages.forEach(images => {
  images.addEventListener('drag', (event) => { 
    event.target.style.opacity = '0.0' 
  })
  images.addEventListener('dragend', (event) => { 
    event.target.style.opacity = '1.0' 
  })
})

// Five: When page loads alert box welcomes user to the page
window.addEventListener('load', () => { alert('Welcome to the FUN BUS!') })

// Six: When focus in on nav links the links grow and shrink

navLinks.forEach(links => {
  links.addEventListener('focus', (event) => {
    event.target.style.fontSize = '20px'
  })
  links.addEventListener('blur', (event) => {
    event.target.style.fontSize = '16px'
  })
}

// Seven: When mouse eneters the heading area it will turn black with white text and change back when mouse exits

const headerArea = document.querySelector('header')

headerArea.addEventListener('mouseenter', (event) => {
  event.target.style.color = 'black'
  event.target.style.backgroundColor = 'white'
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = 'black';
  }
})

headerArea.addEventListener('mouseleave', (event) => {
  event.target.style.color = 'white'
  event.target.style.backgroundColor = 'black'
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = 'white';
  }
})

