import React, { Component } from 'react'
import { InfoConsumer } from '../Context'
import ReviewsCard from './ReviewsCard'

/**
* @author
* @class Reviews
**/

class Reviews extends Component {

 render() {
  return(
   <InfoConsumer>
       { data => {
           return data.reviews.map(person => {
               return <ReviewsCard key={person.id} person={person}/>
           })
       }}
   </InfoConsumer>
    )
   }
 }



export default Reviews