import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar,  Feedback,Experience ,Tech,Works ,StarsCanvas} from './components'
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>

      <div className='relative z-0 primary w-full'>
      
        <div className='bg-hero-pattern bg-cover w-full w-vh bg-no-repeat '>
        <Navbar />
          <Hero />
        </div>

        <div>
           <About />
          <Experience/>
          <Tech/>
          <Works/>
          <Feedback/> 

          <div>
            <Contact />
            <StarsCanvas/>
            
          </div>

        </div>



      </div>
    </BrowserRouter>
  )
}

export default App
