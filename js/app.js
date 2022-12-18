/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const section_Elements = document.querySelectorAll('section');
const navElement = document.querySelector('nav');
const ulElement = document.querySelector('ul');
const anchorElement = document.getElementsByTagName('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navStyling(a, li) {
  navElement.style.cssText = 'background-color: #201668; box-shadow: 0px 0px 20px 0px #6d6894; text-transform: capitalize';
  ulElement.style.cssText = 'height: 100%; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-evenly; font-family: "Merriweather", serif;color: #fff';

  a.style.cssText = 'color: white; text-decoration: none';
  li.style.cssText = 'cursor: pointer'
}

/**
 * End Helper Functions
 * Begin Main Functions
*/

// build the nav

// styling and building the nav and the unorderd list
function buildNavbar(sec) {
  const data = sec.getAttribute('data-nav');
  const id = sec.id;

  const listItem = document.createElement('li');
  const newAncher = document.createElement('a');

  newAncher.textContent = data;
  listItem.className = `menu__link ${id}`;
  newAncher.href = `#${id}`;
  navStyling(newAncher, listItem);

  listItem.appendChild(newAncher);
  document.querySelector('ul').appendChild(listItem);

}

// Add class 'active' to section when near top of viewport
function view() {
  for (const sec of section_Elements) {
    if (sec.firstElementChild.firstElementChild.getBoundingClientRect().top <= 400 && sec.firstElementChild.firstElementChild.getBoundingClientRect().top >= 0) {
      sec.classList.add("your-active-class");
      document.getElementsByClassName(`${sec.id}`)[0].classList.add("active");
    } else {
      sec.classList.remove("your-active-class");
      document.getElementsByClassName(`${sec.id}`)[0].classList.remove("active");
    }
  }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(evt) {
  evt.preventDefault();
  if (evt.target.nodeName.toLowerCase() === 'a') {
    document.querySelector(`section${evt.target.getAttribute("href")}`).scrollIntoView(
      {
        behavior: "smooth",
        block: "end"
      }
    )
  } else if (evt.target.nodeName.toLowerCase() === 'li') {
    // different querySelector for li's
    document.querySelector(`section${evt.target.firstElementChild.getAttribute("href")}`).scrollIntoView(
      {
        behavior: "smooth",
        block: "end"
      }
    )
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// creating the anchers in the listItems of the unorderd list
for (const sec of section_Elements) {
  buildNavbar(sec);
}

// Scroll to section on link click
/* With Smooth Transition Between Sections */
ulElement.addEventListener("click", scrollToSection);

// Set sections as active
window.addEventListener("scroll", view)

