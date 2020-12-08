import React, { Component } from 'react'
import { InfoConsumer } from '../Context'

/**
* @author
* @class Reviews
**/

class ReviewsCard extends Component {

 render() {
     const {id, name, avatar, comment } = this.props.person;
  return(
   <InfoConsumer> 
       { data => (
         <div className="media">
             <img src={avatar} alt=""/>
       <h5>{name}</h5>
       <p> {comment}</p>
         </div>
       )}
   </InfoConsumer>
    )
   }
 }



export default ReviewsCard