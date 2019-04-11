import React, { Component } from 'react';
import { withRouter } from "react-router-dom"; 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import NavLinkRaw from "./NavLink";

class Navigation extends Component {
  render () {
    const NavLink = withRouter(props => {
      const { staticContext, ...rest } = props;

      return <NavLinkRaw {...rest} />;
    });

    return (
    <nav className="navbar navbar-expand-lg navbar-header">
      <div className="collapse navbar-collapse ">
        <ul className="navbar-nav">
          <NavLink to="/" >אזור אישי</NavLink>
          <NavLink to="/1" >עובר ושב</NavLink>
          <NavLink to="/2" >כרטיסי אשראי</NavLink>
          <NavLink to="/3" >פיקדונות וחסכונות</NavLink>
          <NavLink to="/4" >שוק ההון</NavLink>
          <NavLink to="/5" >הלוואות ומשכנתאות</NavLink>
          <NavLink to="/marketing">שיווק לעסקים קטנים</NavLink>
        </ul>
      </div>
    </nav>);
  }
}

export default  Navigation;