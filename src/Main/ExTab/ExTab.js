import React, { Component } from "react";
import "./ExTab.css";
import "../../index";
import { Link } from "react-router-dom";

class Extab extends Component {
  name = "";
  topics = [];

  constructor(props) {
    super(props);
    this.name = props.name;
    this.topics = props.topics;
  }

  createTable = () => {
    let table = [];
    for (let i = 0; i < this.topics.length; i++) {
      table.push(
        <Link
          to={"/random/" + this.name + '/' + this.topics[i].name}
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <p class="mb-1 center">{this.topics[i].name}</p>
        </Link>
      );
    }
    return table;
  };

  render() {
    return (
      <div>
        <div class="list-group">
          <div class="list-group-item flex-column align-items-start site-brown">
            <h5 class="mb-1 center">{this.name}</h5>
          </div>
          {this.createTable()}
        </div>
      </div>
    );
  }
}

export default Extab;
