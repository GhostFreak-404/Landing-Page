# Landing Page Project

## Table of Contents

* [Introduction](#Introduction)
* [Changes in HTML File](#HTML)
* [Changes in CSS File](#CSS)
* [Creating Interactivity in JavaScript File](#JavaScript)

## Introduction

This project has some changes to the Original HTML, CSS Files for the best view
and was built with alot of research and over alot of long working night hours.

This is the changes in Detail :


## HTML
1- Fixed bad written HTML Doctype.
2- Added an offline version of the Merriweather font for offline testing.
3- Adding couple of section to test the new dynamic navbar.
4- Changed their id and gave them no classes what so ever so i can do it with js better later.
5- Added script tag after the footer to link js with html.
  NOTE: I would've added it in header tag put i want it to write as little code in js file as possible.


## CSS
1- Added more styling to header elements to make it more brand.
2- Added responsive styling to the navbar for mobiles and small screen tablets.
3- Formated the rest of the code with vscode standers.
  Note: 
      At the beginning of the file added style to html element to make scroll smoth 
      but decided to do it with js better so i commented it and lefted for reference later.



## JavaScript
1- I Put all the Global Variables on Top Selecting all Header Elements.
2- Built a Helper function giving inline css styling for nav, ul, also the anchers and li that will be created later.
3- Built 3 main functions:
  -- First one for building the actual navbar and setting all attributes and firing up the helper function inside it.
  -- Second one Checks if Element is in the viewport or not and sets active class if it is.
  -- Third one preventDefault for anchers and make the scroll to section event to the parent go smooth and effective.

4- invoking all the event and functions For the creation process of building the navbar:
  -- First i for looped on all section building the navbar one ancher at a time.
  -- Second i added scrollToSection function to the click parent ul event "Yes One Click event of the Hole navbar".
  -- Third added the window scroll event with the main function view.

