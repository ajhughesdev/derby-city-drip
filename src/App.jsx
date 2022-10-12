import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Hours from './components/Hours'
import Location from './components/Location'
import Newsletter from './components/Newsletter'
import ProductMenu from './components/ProductMenu/ProductMenu'
import SubFooter from './components/SubFooter'

function App() {
  return (
    <>
      <Header />
      <h1>Experience the best cup in town</h1>
      <p>
        Single origin mazagran, half and half robust pumpkin spice aged con
        panna. Sugar shop ut a single shot steamed half and half.
      </p>
      <button type='button'>Order Online</button>
      <About />
      <Location />
      <Hours />
      <ProductMenu />
      <Newsletter />
      <Footer />
      <SubFooter />
    </>
  )
}

export default App
