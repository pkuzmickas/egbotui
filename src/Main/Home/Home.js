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
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 introduction">
            <p class="full-height rounded text-padding">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod. ok. */}
              Welcome to Egbot! This website is part of a research project interested
              in how examples are used mathematical research(<a href="https://discovery.dundee.ac.uk/en/publications/automating-human-like-example-use-in-mathematics" target="_blank">LINK</a>). We are curious
              whether we can create a machine which would be able to participate in 
              mathematical conversations in a meaningful way. The purpose of this website
              is to generate examples based on a search query that a user provides.
              We are using a machine learning model trained on the data from mathstackexchange(<a href="https://docs.google.com/document/d/1IGQnW_WT9LOiR69kUilRUCcUbGwbR_JHCxnyNiAkU9I/" target="_blank">LINK</a>). 
              Try exploring the website by clicking on various mathematical fields below.
              Also please provide feedback to the examples generated so we can improve them!
              We also provide links to related questions on mathstackexchange, so feel free
              to use them if our generated answer is not sufficient. Hopefully this website
              will be of use to you and feedback is always appreciated. Enjoy the website and if you
              wish to contact us, you can email us at <a href="mailto:pkuzmickas@dundee.ac.uk" target="_blank">pkuzmickas@dundee.ac.uk</a>.
            </p>
          </div>
        </div>
        <div class="row">
          <h3 class="site-text center padded15">EXPLORE</h3>
        </div>
        <div class="row tablemargin">{this.createTable()}</div>
      </div>
    );
  }
}

export default Home;
