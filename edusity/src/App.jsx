import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Program />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Students Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer/>


      </div>
      
      
    </div>
  )
}
