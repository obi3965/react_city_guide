
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Footer from './components/footer/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>

      <Navbar/>
      
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/news' exact component={News} />
      
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/details" exact component={Details} />
      <Route component={NotFound} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
