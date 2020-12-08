import React, { Component } from 'react'
import Hero from '../hero/Hero'
import NewsCard from '../news/NewsCard'
import { InfoConsumer } from '../Context'

 class News extends Component {
    

    render() {
        return (
            <>
            <Hero/>


           <div className="container">
               <div className="row">
                   <InfoConsumer>
                { value => {
                    return value.news.map(item => {
                        return <NewsCard key={item.id} item={item} />
                    })
                }}
            </InfoConsumer>
               </div>
           </div>
            
              
            </>
        )
    }
}
export default News