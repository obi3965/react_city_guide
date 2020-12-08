import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import Reviews from '../reviews/Reviews';


/**
* @author
* @class Details
**/

class Details extends Component {
 state = {}
 render() {
 
  return(
    <InfoConsumer>

      {data => {

     
    const {
    id,
    headerTitle,
    headerSubTitle,
    headerText,
    img,
    title,
    maps,
    description
  } = data.detailInfo;
     return (
       <div>
         <div className="container">
           <div className="row">
           <div className="col-6">
             <div className="details">
                <img src={img} alt=""/>
            <p>{headerTitle}</p>
            <p>{headerSubTitle}</p>
             </div>
            
           </div>
           </div>
         </div>

         <div className="container">
         
           
           <ul className="nav nav-tabs" role="tablist">
             <li className="nav-item">
               <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">about place</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">reviews</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">maps</a>
             </li>
           </ul>{/* Tab panes */}
           <div className="tab-content">
             <div className="tab-pane active" id="tabs-1" role="tabpanel">
               <div className="tab-1">
                 <img src={img} alt=""/>
                 <h1>{title}</h1>
                 <p>{description}</p>

               </div>
              
             </div>
             <div className="tab-pane" id="tabs-2" role="tabpanel">
                <Reviews />
             </div>
             <div className="tab-pane" id="tabs-3" role="tabpanel">
               <div className="tab-3">
                 <iframe src={maps} frameborder="0"></iframe>
               </div>
             </div>
           </div>
         
               </div>
         </div>
       
       
     )
    }}
   </InfoConsumer> 
    )
   }
 }



export default Details