import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import CardsComponent from './Components/Services/CardsComponents'
import DigitalCommerce from './Components/Digital Commerce/DigitalCommerce'

const App = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <CardsComponent />
                <DigitalCommerce />
                <Title subTitle='Contact Us' title='Get In Touch' />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}
export default App 
