import Scrollbar from 'smooth-scrollbar'

import Banner from './section/Banner'
import Header from './section/Header'
import About from './section/About'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
    </div>
  )
}

export default App
