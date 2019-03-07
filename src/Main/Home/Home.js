import React, { Component } from "react";
import "../../index";
import "./Home.css";
import MathTopics from "../MathTopics";
import Extab from "../ExTab/ExTab";

class Home extends Component {

  mathTopics = [
    { name: "Algebra", topics: MathTopics.algebraTopics },
    { name: "Calculus", topics: MathTopics.calculusTopics },
    { name: "Geometry", topics: MathTopics.geometryTopics },
    { name: "Combinatorics", topics: MathTopics.combinatoricsTopics },
    { name: "Logic", topics: MathTopics.logicTopics },
    { name: "Number Theory", topics: MathTopics.numberTheoryTopics }
  ];

  createTable = () => {
    let table = [];
    for (let i = 0; i < 6; i++) {
      table.push(
        <div class="col-sm-4 col-md-4 col-lg-4 no-padding">
          <Extab
            name={this.mathTopics[i].name}
            topics={this.mathTopics[i].topics}
          />
          <div class="clearfix" />
        </div>
      );
    }
    return table;
  };

  render() {
    return (
      <div>
        <div class="row">
          <h3 class="site-text center padded">INTRODUCTION</h3>
        </div>
        <div class="row introduction">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <iframe
              class="rounded"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5urUZUWoTLo"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <p class="full-height rounded text-padding">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="row">
          <h3 class="site-text center padded15">EXPLORE</h3>
        </div>
        <div class="row">{this.createTable()}</div>
      </div>
    );
  }
}

export default Home;
