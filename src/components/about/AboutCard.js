import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { InfoConsumer } from '../Context';
import '../about/about.css'



class AboutCard extends Component {
    state = {
        about : [
            {
             id: 1,
             aboutTitle: "about our tours",
             aboutDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aut omnis earum laudantium sint facilis amet ipsam alias asperiores nobis veniam numquam est voluptatibus accusamus beatae, voluptatem eveniet deserunt nesciunt.",
             aboutImg: ".././images/tajMahal.jpg",
          
            },
            {
              id: 2,
              aboutTitle: "about our tours",
              aboutDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aut omnis earum laudantium sint facilis amet ipsam alias asperiores nobis veniam numquam est voluptatibus accusamus beatae, voluptatem eveniet deserunt nesciunt.",
              aboutImg: ".././images/tajMahal.jpg",
           
             },
             {
              id: 3,
              aboutTitle: "about our tours",
              aboutDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aut omnis earum laudantium sint facilis amet ipsam alias asperiores nobis veniam numquam est voluptatibus accusamus beatae, voluptatem eveniet deserunt nesciunt.",
              aboutImg: ".././images/tajMahal.jpg",
           
             }
          ]
    }

    render() {
         
        return (
            
            <div>
             
              <div className="underline"></div>
              <div className="row offset-md">
              {this.state.about.map((item, index) => {
                  
              
             return (
               <div key={index} className="col-sm-12 col-md-12 col-lg-12">
                   
                 <div className="box-1">
                   <div className="box-1-items">
                     <img src={ item.aboutImg } alt="foods" />
                     <div className="box-1-desc">
                       <h3>{ item.aboutTitle }</h3>
                       <p>{ item.aboutDesc } </p>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
            </div>
            </div>
            
          );
    }
}


export default AboutCard;
