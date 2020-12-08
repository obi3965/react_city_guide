
import AboutCard from '../about/AboutCard'
import Hero from '../hero/Hero'
 import { InfoConsumer } from '../Context'




import React, { Component } from 'react'
import About_Banner from '../about/About_Banner'

class About extends Component {

 render() {
  return(
   <div>
           <About_Banner/>
            <div className="container">
               <div className="row">
                   <AboutCard/>
                
               </div>
           </div>
   </div>
    )
   }
 }



export default About