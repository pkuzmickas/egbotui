import React, { Component } from "react";
import "../../index";
import "./Results.css";
import { ok } from "assert";
import { Link, withRouter } from "react-router-dom";

class Results extends Component {
  handleClick = event => {
    // accessible
    if(event.target.classList[0]=="positive") {
        event.target.style.color = event.target.style.color == "green" ? "black" : "green"
    }
    if(event.target.classList[0]=="negative") {
        event.target.style.color = event.target.style.color == "red" ? "black" : "red"
    }
  };
  example = (
    <div>
      <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div class="feedback">
        <i>Was this example helpful?</i>{" "}
        <span onClick={this.handleClick} class="positive thumbs fa">
          &#xf087;
        </span>{" "}
        <span onClick={this.handleClick} class="negative thumbs fa">&#xf088;</span>
      </div>
      <hr class="info" />
    </div>
  );

  examples = [
    <div>
      <p class="info">
        <span class="bigger">Examples</span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
      </p>
      <div class="feedback">
        <i>Was this example helpful?</i>{" "}
        <span onClick={this.handleClick} class="positive thumbs fa">
          &#xf087;
        </span>{" "}
        <span onClick={this.handleClick} class="negative thumbs fa">&#xf088;</span>
      </div>
      <hr class="info" />
    </div>
  ];

  generate = () => {
    this.examples.push(this.example);
  };

  showExamples = () => {
    let list = [];
    for (let i = 0; i < this.examples.length; i++) {
      list.push(this.examples[i]);
    }
    return list;
  };

  formatUrl() {
    let url = this.props.location.pathname.split("/");
    if (url.length == 3) return url[2];
    else if (url.length == 4) {
      return url[3] + " " + url[2];
    } else {
      return "";
    }
  }

  render() {
    return (
      <div class="row">
        <div id="response">
          <div class="example">
            <p class="info">
              <span class="bigger">Viewing results for: </span>{" "}
              {this.formatUrl()}
            </p>
            <hr />
            <p class="info">
              <span class="bigger">Explanation</span>
              <br /> Lorem ipsum dolor sit amet,{" "}
              <Link to="/results/consectetur">consectetur</Link> adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea{" "}
              <Link to="/results/commodo%20consequat">commodo consequat</Link>.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <b>External links:</b> <a href="#">link1</a>,{" "}
              <a href="#">link2</a>, <a href="#">link3</a>
            </p>
          </div>
          <div class="example gray-border blue-background" id="examples">
            {this.showExamples()}
          </div>
        </div>
        <button
          type="button"
          id="genbutton"
          class="btn btn-success"
          onClick={() => {
            this.generate();
            this.forceUpdate();
          }}
        >
          {/* NEUZSIUPDATINA CJ REIK KAZKA SU REACT STATE RENDER IDK */}
          GENERATE MORE
        </button>
      </div>
    );
  }
}

export default withRouter(Results);
