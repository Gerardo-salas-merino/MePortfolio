import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './shared/Footer';




function App() {
  


  return (
    
    <main className='dark:bg-bodyback dark:text-white text-black transition-colors w-[100%] overflow-hidden'>
      
      
      
      <Header/>
      <Home/>
      <About/>
      <Projects />
      <Contact />
      <Footer/>
      


    </main>
    
   
  )
}

export default App
