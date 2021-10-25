import Scrollbar from 'smooth-scrollbar'

import Banner from './section/Banner'
import Header from './section/Header'
import About from './section/About'
import VidSect from './section/VidSect'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <VideSect />
    </div>
  )
}

export default App
