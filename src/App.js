import React from 'react';
import {HashRouter as Router, Route,  Switch } from 'react-router-dom';

import Contact from './components/contacts/Contact.js';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header.js';
import About from './components/pages/About.js';
import NotFound from './components/pages/NotFound.js';
import Test from './components/test/Test.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Provider} from './context.js';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
     <Header branding="Contact Manager1"/>
     <div className="container">
        <Switch>
          <Route exact path="/" component = {Contact}/>
          <Route exact path="/contact/add" component = {AddContact}/>
          <Route exact path="/contact/edit/:id" component = {EditContact}/>
          <Route exact path="/about" component = {About}/>
          <Route exact path="/test" component ={Test}/>
          <Route component ={NotFound}/>
          
        </Switch>
       </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
