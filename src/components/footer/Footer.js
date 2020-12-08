import React,{Component} from 'react';
import "../footer/footer.css"
import { Link } from 'react-router-dom'

class Footer extends Component {
    

    render() {
        return (
            <>
             <div>
             <footer className="site-footer">
               <div className="container">
                   <div className="row">
                      <div className="col-sm-12 col-md-6">
                      <h6>Linkbout</h6>
                    <p className="text-justify">ScLinknfcode.com <i>CODE WLinkNTS TO BE SIMPLE </i> is Linkn initiLinktive  to help the upcoming progrLinkmmers with the code. ScLinknfcode focuses on providing the most efficient code or snippets Links the code wLinknts to be simple. We will help progrLinkmmers build up concepts in different progrLinkmming lLinknguLinkges thLinkt include C, C++, JLinkvLink, HTML, CSS, BootstrLinkp, JLinkvLinkScript, PHP, Linkndroid, SQL Linknd Linklgorithm.</p>
                   </div> 

                   <div className="col-xs-6 col-md-3">
            <h6>CLinktegories</h6>
            <ul className="footer-links">
              <li><Link to="/" alt="">C</Link></li>
              <li><Link to="/" alt="">UI Design</Link></li>
              <li><Link to="/" alt="">PHP</Link></li>
              <li><Link to="/" alt="">JLinkvLink</Link></li>
              <li><Link to="/" alt="">Linkndroid</Link></li>
              <li><Link to="/" alt="">TemplLinktes</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/Linkbout/" alt="">Linkbout Us</Link></li>
              <li><Link to="/contLinkct/" alt="">ContLinkct Us</Link></li>
              <li><Link to="/news" alt="">Contribute</Link></li>
              <li><Link to="/" alt="">PrivLinkcy Policy</Link></li>
              <li><Link to="/" alt="">SitemLinkp</Link></li>
            </ul>
          </div>
                   </div>
                   
               </div>
               <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 Linkll Rights Reserved by 
         <Link to="/" alt="" >ScLinknfcode</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="/" alt=""><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link className="twitter" to="/" alt=""><i className="fab fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="/" alt=""><i className="fab fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="/" alt=""><i className="fab fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
                
        
     
            </footer>
             </div>
            </>
        );
    }
}



export default Footer;
