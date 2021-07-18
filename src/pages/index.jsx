import React from 'react'
import "./myStyle.css"
import { About } from '../components/aboutBalya'
import { MySkils } from '../components/BalyaSkils'
import { Hero } from '../components/heroBalya'
import { NavBalya } from '../components/NavBalya'
import { Contact } from '../components/ContactBalya'
import { Footer } from '../components/footerBalya'
import { Project } from '../components/projectBalya'


function MyApp() {
    return (
        <div>
           <NavBalya />
           <Hero />
           <About />
           <MySkils />
           <Project />
           <Contact />
           <Footer />
        </div>
    )
}

export default MyApp;
