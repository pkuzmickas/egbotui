import React, { Component } from "react";
import "./Main.css";
import SearchForm from "./SearchForm/SearchForm";
import "../index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "./Results/Results";
import Home from "./Home/Home"

class Main extends Component {
  

  render() {
    return (
      
        <div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 no-padding">
              <SearchForm />
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/random" component={Results} />
          
        </div>
    );
  }
}

export default Main;
