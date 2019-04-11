import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import PropTypes from 'prop-types';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class NavLink extends Component {
  render() {
      const { pathname } = this.props.location;
      const isActive = pathname === this.props.to;
      const liClassName = isActive ? "nav-item active" : "nav-item";

      return(
        <li className={liClassName}>
          <Link  className="nav-link" {...this.props}>
            {this.props.children}
          </Link>
        </li>
      );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;