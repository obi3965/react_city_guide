import React from 'react'
import '../services/service.css'
/**
* @author
* @function Services
**/

const Services = (props) => {
  return(
    <div className="service">
        <div className="service-title">
            <h1>our services</h1>
            <div className="underline1"></div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="serviceBox">
              <div className="service-content">
                <div className="service-icon">
                  <span><i className="fa fa-globe" /></span>
                </div>
                <h3 className="title">help desk</h3>
              </div>
              <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="serviceBox blue">
              <div className="service-content">
                <div className="service-icon">
                  <span><i className="fas fa-user"></i></span>
                </div>
                <h3 className="title">customers</h3>
              </div>
              <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="serviceBox blue">
              <div className="service-content">
                <div className="service-icon">
                  <span><i className="fa fa-home" /></span>
                </div>
                <h3 className="title">travel guide</h3>
              </div>
              <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   )

 }

export default Services