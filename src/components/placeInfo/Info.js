import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InfoConsumer } from '../Context'
import '../placeInfo/placeInfo.css'

/**
* @author
* @class Info
**/

class Info extends Component {
 state = {}
 render() {

  const {
    id,
    headerTitle,
    headerSubTitle,
    headerText,
    img
  } = this.props.item
  return(
    

          
    
        <InfoConsumer>
  {value => (
  <div className="col-md-4 col-s-6 col-xs-12">
  <div id="news-slider">
    <div className="post-slide">
      <div className="post-img">
        <Link href="#"><img src={img} alt={headerTitle} /></Link>
      </div>
      <div className="post-content">
  <h3 className="post-title"><Link href="#">{headerTitle}</Link></h3>
        <p className="post-description">
          { headerText }
        </p>
        <ul className="post-bar">
          <li><i className="fa fa-calendar" /> {headerSubTitle }</li>
          <li>
            <i className="fa fa-folder" />
            <Link href="#">Mockup</Link>
            <Link href="#">Graphics</Link>
            <Link href="#">Flayers</Link>
          </li>
        </ul>
        
        <Link onClick={() => value.handleDetail(id)} to="/details" className="read-more">read more</Link>
      </div>
    </div>
  </div>
</div>

          )}
          
          
        

        </InfoConsumer>
      
    )
   }
 }



export default Info