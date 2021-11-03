
# Derby City Drip 

source code for Code Louisville's Front-end Web Development Sept. 2021 cohort final project, a build out of a design by Don Hansen

---



### etc.

#### fonts

fonts used are [Quantico](https://fonts.google.com/specimen/Quantico?query=quantico) and [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans). i converted the .ttf files to .woff2 as the later is much smaller in size. i used [woff2](https://github.com/google/woff2) from google so the conversion didn't "break the axes needed to interpolate between font variation settings." [1][1]


#### reset

i am using [The New CSS Reset](https://elad2412.github.io/the-new-css-reset/) by [Elad Shechter](https://twitter.com/eladsc). i saved it as a SASS partial & ```@use``` it w/ my main.scss.

#### favicon

i pulled the xml code of the coffee cup from the logo svg in the provided assets folder & designed a simple 32x32 svg using Figma, then used [Convertio](https://convertio.co/svg-ico/) to convert the .svg file into a .ico file for the browser to discover in the root of the project folder.



[1]: https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/ "How to Convert Variable ttf font files to woff2"
