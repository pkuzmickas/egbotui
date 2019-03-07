import React, { Component } from "react";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
              <h1>
                <Link to='/'>
                <div class="navbar-brand no-hover" onClick={()=>{this.props.history.push('/')}}>
                  -<span class="eg">EG</span>
                  <span class="bot">BOT</span>-
                </div>
                </Link>
              </h1>
              <h3>
                <span class="sub-title left">a question & answer site</span>
              </h3>
              <h3>
                <span class="sub-title right">for your math needs!</span>
              </h3>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
