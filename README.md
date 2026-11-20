# Overview

Local web application developed in vanilla JavaScript designed to act as a strategic diagnostic engine, helping researchers overcome genealogical "brick walls" by evaluating incomplete information.

As a software engineer, my purpose for writing this software was to practice the JavaScript language and its syntax while building a useful tool.

Version Features (W01):

- Semantic HTML structure and clean design.
- Modern JavaScript logic using events (`addEventListener`).
- Dynamic DOM manipulation.

Version Features (W02):

- Conditional logic (if/else) that picks the research steps for each obstacle.
- Ancestors stored as objects inside an array.
- Data saved with localStorage and JSON, so it stays after reloading.
- Filter cards by obstacle type and delete cards you no longer need.
- Recursion (a function that calls itself) to add each research step, and the Day.js library to format dates.

[Software Demo Video (W02)](https://youtu.be/V7f5Y6iLg_8)

[Software Demo Video (W01)](https://youtu.be/_eBUE-n2CJo)

# Development Environment

- HTML5 / CSS3
- JavaScript (ES6+)
- Day.js (external library, loaded from a CDN)

How to Run:

1. Download or clone this repository.
2. Open `index.html` in your browser.

# Useful Websites

- [Day.js Documentation](https://day.js.org/)

# Future Work

- Add a button to edit an existing ancestor.
- Add more types of brick walls.
- Let the user mark each research step as done.
