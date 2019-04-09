import React, { Component } from "react";
import "./SearchForm.css";
// import './App.css';
import "../../index";
import { BrowserRouter as Link, withRouter} from "react-router-dom";



class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ""}
  }
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
  keyPressed = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  }
  search() {
    if(this.state.inputValue)
      this.props.history.push('/results/' + this.state.inputValue)
  }
  render() {
    return (
      <div class="container main-container">
        <div class="main-section" id="mainsec">
          <hr />
          <div class="input-group">
            <input
              id="search"
              type="text"
              class="form-control border"
              placeholder="What do you want to know about?"
              onChange={this.updateInputValue}
              onKeyPress={this.keyPressed}
            />
            <span class="input-group-btn">
              <button
                type="button"
                class="btn brown-bg-border"
                onClick={() => {
                  this.search();
                }}
              >
                GO
              </button>
            </span>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchForm);
