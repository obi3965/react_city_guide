import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import '../placeInfo/placeInfo.css'
import { Link } from 'react-router-dom'
/**
* @author
* @class NewsCard
**/

class NewsCard extends Component {
 
 render() {
     const {id, newsTitle, newsText } = this.props.item
  return(
   <InfoConsumer>
   { value => (
       <div className="col-md-4 col-s-6 col-xs-12">
       <div id="news-slider">
         <div className="post-slide">
           <div className="post-img">
             {/* <Link href="#"><img src={img} alt={headerTitle} /></Link> */}
           </div>
           <div className="post-content">
       <h3 key={id} className="post-title"><Link href="#">{newsTitle}</Link></h3>
             <p className="post-description">
               { newsText }
             </p>
             <ul className="post-bar">
               <li><i className="fa fa-calendar" /> June 7, 2016</li>
               <li>
                 <i className="fa fa-folder" />
                 <Link href="#">Mockup</Link>
                 <Link href="#">Graphics</Link>
                 <Link href="#">Flayers</Link>
               </li>
             </ul>
             
             <Link to="/details" className="read-more">read more</Link>
           </div>
         </div>
       </div>
     </div>
   )}
       
   
   </InfoConsumer>
    )
   }
 }



export default NewsCard