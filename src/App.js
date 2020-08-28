import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Home from './components/Home';
import Places from './components/Places';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route path='/places' component={Places} />
        <Route path='/contact' component={Contact} />
        {/* <Route component={Error} /> */}
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
