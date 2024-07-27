import Navbar from "./components/navbar/Navbar"
import './App.css'
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Services from "./components/Services/Services"
import Skills from "./components/Skils/Skills"
import Projects from "./components/Porjects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
 

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App
