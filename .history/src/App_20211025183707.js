import Scrollbar from 'smooth-scrollbar'

import Banner from './section/Banner'
import Header from './section/Header'
import About from './section/About'
import VidSect from './section/VidSect'
import Footer from './section/Footer'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <VidSect />
      <Footer />
    </div>
  )
}

export default App
