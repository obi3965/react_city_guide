import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import Hero from '../hero/Hero'
import Info from '../placeInfo/Info'
import Services from '../services/Services'

 class Home extends Component {
    render() {
        return (
            <div>
              <Hero />
              <Services />

           <div className="place_info"> 
           <div className="place">
               <h1>places information</h1>
           </div>
          <div className="container">
              <div className="row">
                   <InfoConsumer>
                  {value =>{
                      return value.info.map(item =>{
                          return <Info key={ item.id } item={item} />
                      })
                  }}
              </InfoConsumer>  
              </div>
          </div>
          </div>   
                 </div>
             
           
                
        )
    }
}
export default Home