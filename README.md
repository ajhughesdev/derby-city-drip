
# Derby City Drip 

source code for Code Louisville's Front-end Web Development Sept. 2021 cohort final project, a build out of a design by Don Hansen

https://ajhughesdev.github.io/derby-city-drip/dist/

---

## media queries

i am fulfilling the media query requirement by serving three different stylesheets depending on device width. a width of 767px or less reveals my initial mobile-first design, while 768px - 1919px shifts the layout & styles the page for tablets. at 1920px & above, the layout shifts again to provide a new UI experience for wider monitors. the media attribute is used in the ```<link>``` tags in the head of the site to achieve these changes.

## css feature 

to satisfy the css requirements, i have written a responsive nav bar w/ a hamburger menu that appears on screens which widths are 767px or less. it includes animation transitions to create a smooth drop-down menu & a background color change when hovering over w/ a mouse. it is also fixed to remain at the top of the page when a user scrolls down through the site's content.

the "desktop" layout is achieved using css grid & sub-grid. the hero, location-hours, product-menu, & footer sections especially utilize the grid as there are significant layout shifts once a device's viewport is 1920px or wider.

## javascript feature

when a user submit's their name & email address in the form at the bottom of the page, a message appears above the form welcoming them by name. if either the name field or email field is left empty, a pop-up alert reminds the user that both fields are required before submitting. this is accomplished by a function that fires onclick that checks the validity & if a value is missing changes the innerText of a div that is empty when first loading the page.

## additional features

continuing w/ javascript, i query the current width of the device & if under 767px (aka the mobile view) clicking on the hamburger menu will push the remaining content down to reveal a menu w/ several options that link to different sections of the page. the menu will close when the user clicks or taps anything that is not the menu. i achieve this by changing styling properties of two elements as you can see from the two functions written to fire upon certain events. the script isn't effective when the device's width is 768px or more as the navigation menu disappears on tablet & desktop views, as described in the media query & css feature sections.

when the viewport width is targeting mobile devices, the button in the hero section states "order online" but once the user's device is 768px or wider, the text dynamically changes to "view menu" and the margin & padding adjust to a larger styling. 

i am using a short script to keep the copyright year in the sub-footer up-to-date, while hardcoding the year in the html for users who may have javascript disabled. the script changes the inner text of the specific element & is included in the main js file for the site. initially, i used ```document.write(new Date().getFullYear());``` inline to achieve this but after reading about performance issues when dynamically injecting scripts i chose the current solution.

### etc.

#### scss, postcss, node.js, parcel, etc...

if you look through my commit history you may notice my experimentation in various preprocessors & developement environments. through the writing of this project, i tried to focus on scalability & a dev environment that could be easily understood & shared amongst a group of coworkers. i hope to continue to learn more about production including developing a personal component library as i think the industry is continuing to move to more stand-alone modular features that can be dropped into a project & easily styled within the constraints of a client's branding. experimenting with tailwindcss, bootstrap 5, BEM, etc has got me especially jazzed about writing my own utility classes in css as well.  

#### fonts

fonts used are [Quantico](https://fonts.google.com/specimen/Quantico?query=quantico) and [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans). i converted the .ttf files to .woff2 as the later is much smaller in size. i used [woff2](https://github.com/google/woff2) from google so the conversion didn't "break the axes needed to interpolate between font variation settings." [1][1]


#### reset

i am using [The New CSS Reset](https://elad2412.github.io/the-new-css-reset/) by [Elad Shechter](https://twitter.com/eladsc). i saved it as a SASS partial & ```@use``` it w/ my main.scss.

#### favicon

i pulled the xml code of the coffee cup from the logo svg in the provided assets folder & designed a simple 32x32 svg using Figma, then used [Convertio](https://convertio.co/svg-ico/) to convert the .svg file into a .ico file for the browser to discover in the root of the project folder.



[1]: https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/ "How to Convert Variable ttf font files to woff2"
