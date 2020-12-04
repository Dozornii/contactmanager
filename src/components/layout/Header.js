import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPlus,faQuestion } from '@fortawesome/free-solid-svg-icons'

library.add(faHome,faPlus,faQuestion)

const Header =(props) => {
    const {branding} = props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">

          <div className="container">
              <a href="/" className="navbar-brand">{branding}</a>
              <div>
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">
                             <FontAwesomeIcon  icon={['fas', 'home']}/>   Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contact/Add" className="nav-link">
                          <FontAwesomeIcon  icon={['fas', 'plus']}/>   Add
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/about" className="nav-link">
                          <FontAwesomeIcon  icon={['fas', 'question']}/>   About
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


    )
}

Header.defaultProps={
    branding: "My App"
};
Header.propTypes ={
    branding: PropTypes.string.isRequired
}
const headingStyle={
    color:'red',
    fontSize:'30px'

}
export default Header;