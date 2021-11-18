module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'coffee-beans': "url('/dist/img/backgrounds/coffee-beans-bg.jpg')"
      },
      backgroundSize: {
        'hero-b': '65rem'
      },
      colors: {
        'light-green-bg': 'hsl(184, 20%, 85%)', // hero background
        'green-bg': 'hsl(172, 40%, 19%)', // cta background
        'dark-green-bg': 'hsl(195, 20%, 16%)', // location-hours,footer, nav-menu background, h2 product-menu text
        'darkest-green-bg': 'hsl(193, 46%, 8%)', //  sub-footer background
        'light-brown-button': 'hsl(26, 52%, 40%)', // cta button bg
        'dark-brown-button': 'hsl(20, 56%, 15%)', // hero button bg
        'dark-brown-text': 'hsl(22, 39%, 11%)', // hero, also h3 & p product-menu text 
        'white-color': 'hsl(0, 0%, 100%)', // bean, location-hours, cta, footer, sub-footer & button text, also menu background *socials svg background before opacity filter*
        'menu-active-bg': 'hsl(28, 39%, 50%)', // nav-menu *focus* background
        'hamburger-menu': 'hsl(21, 40%, 11%)' //hamburger svg fill
      },
      fontFamily: {
        'quantico': ['Quantico', 'monospace'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        'button-view-menu': '1.45rem',
        'hero-b-h2': '2rem'
      },
      letterSpacing: {
        'paragraph': '0.35px'
      },
      lineHeight: {
        '2.5': '2.5'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'hamburger-menu': '2.75rem'
      },
      spacing: {
        'button-px': '2.15rem',
        'days': '4.25rem',
        '18': '4.5rem',
        'location-h2': '7.5rem'
      },
      transitionProperty: {
        'background-color': 'background-color',
        'height': 'height',
        'display': 'display'
      },
    },
    variants: {
      extend: {},
    }
  }
}