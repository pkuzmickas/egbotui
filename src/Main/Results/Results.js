import React, { Component } from "react";
import "../../index";
import "./Results.css";
import { ok } from "assert";
import { Link, withRouter } from "react-router-dom";
import { browserHistory } from "react-router-dom";
import MathTopics from "../MathTopics";

class Results extends Component {

  specialWords = [];

  constructor(props) {
    super(props);
    this.state = {
      answ: null
    };
    let topic = this.formatUrl();
    this.getAnswer(topic);
    this.props.history.listen((location, action) => {
      topic = this.formatUrl(location.pathname);
      this.getAnswer(topic);
    });
    
    this.fillSpecialList();
  }

  fillSpecialList() {
    MathTopics.combinatoricsTopics.forEach(element => {
      this.specialWords.push(element.name + " combinatorics")
    });
    MathTopics.geometryTopics.forEach(element => {
      this.specialWords.push(element.name + " geometry")
    });
    MathTopics.logicTopics.forEach(element => {
      this.specialWords.push(element.name + " logic")
    });
    MathTopics.numberTheoryTopics.forEach(element => {
      this.specialWords.push(element.name + " number theory")
    });
    MathTopics.calculusTopics.forEach(element => {
      this.specialWords.push(element.name + " calculus")
    });
    MathTopics.algebraTopics.forEach(element => {
      this.specialWords.push(element.name + " algebra")
    });
  }

  formatExample(example) {
    let newExample = [];
    let markers = {};
    this.specialWords.forEach(element => {
      let i = example.toLowerCase().indexOf(element.toLowerCase());
      if(i != -1) {
        markers[i] = element;
      }
    });
    let lastInd = 0;
    for(let i=0; i<example.length; i++) {
      if(markers[i]!=undefined) {
        newExample.push(example.substring(lastInd, i));
        newExample.push(<Link className="links" to={'/results/' + markers[i]}>{example.substring(i, i+markers[i].length)}</Link>)
        lastInd=markers[i].length + i;
        i+=markers[i].length-1;
      } 
    }
    newExample.push(example.substring(lastInd, example.length));
    return newExample;
  }

  handleClick = event => {
    if (event.target.classList[0] == "positive") {
      if (event.target.style.color == "green") {
        event.target.style.color = "black";
      } else {
        event.target.style.color = "green";
        this.refs.thumbsdown.style = "black";
      }
    }
    if (event.target.classList[0] == "negative") {
      if (event.target.style.color == "red") {
        event.target.style.color = "black";
      } else {
        event.target.style.color = "red";
        this.refs.thumbsup.style = "black";
      }
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
        <span onClick={this.handleClick} class="negative thumbs fa">
          &#xf088;
        </span>
      </div>
      <hr class="info" />
    </div>
  );

  examples = [];

  showRelated = relatedList => {
    let list = [];
    for (let i = 0; i < relatedList.length; i++) {
      list.push(
        <div>
          <button
            class="related gray-border blue-background not-button"
            id="examples"
            type="button"
            data-toggle="collapse"
            data-target={"#collapse" + i}
            aria-expanded="false"
            aria-controls={"collapse" + i}
          >
            <p class="info">{this.formatMarkdown(relatedList[i].title)}</p>
          </button>
          <div class="collapse" id={"collapse" + i}>
            <a
              class="card card-body not-link not-button"
              href={relatedList[i].link}
              target="_blank"
            >
              {this.formatMarkdown(relatedList[i].body_markdown)}
            </a>
          </div>
        </div>
      );
    }
    return list;
  };

  formatMarkdown(text) {
    //let markdown = [""];

    text = text.replace(new RegExp("&#39;", 'g'), "\'");
    text = text.replace(/\**/g, "")

    // text = text.split('$');
    // for(let i=0; i<text.length; i++) {
    //   if(text[i]=='') continue;

      

    //   markdown.push(text[i]);
    //   i++;
    //   while(text[i]=='' || text[i]==' ') i++;
    //   markdown.push(<div lang="latex">{text[i]}</div>);
    // }
    // return markdown;
    return text;
  }

  formatUrl(url = null) {
    if (!url) {
      url = this.props.location.pathname.split("/");
    } else {
      url = url.split("/");
    }
    if (url.length == 3) return url[2];
    else if (url.length == 4) {
      return url[3] + " " + url[2];
    } else {
      return "";
    }
  }

  getAnswer(query) {
    let url = "https://egbot.good-loop.com/ask?q=" + query;
    return fetch(url)
      .then(resp => resp.ok ? resp.json() : null)
      .then(rjson => {
        if(rjson) {
          this.setState({
            answ: rjson
          });
        }
        else {
          this.setState({
            answ: null
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let related;
    let example;
    if (!this.state.answ) {
      related = <div />;
      example = 
      <div>
        <h5>Unable to generate example...</h5>
        Please try:<br/> 
        <Link to="/results/Give me an example of a conditional probability problem">"Give me an example of a conditional probability problem."</Link>
        <br/>
        <Link to="/results/What is a Bayesian network?">"What is a Bayesian network?"</Link>
      </div>;
    } else {
      related = this.showRelated(this.state.answ.data.relatedQs);
      example = this.state.answ.data.generatedAnswer;
      example = this.formatExample(example);
    }
    return (
      <div>
        <div class="row">
          <div id="response">
            <div class="example">
              <p class="info no-mg-top">
                <span class="bigger">Viewing results for: </span>{" "}
                {this.formatUrl()}
              </p>
              <hr />
              <p class="info">
                <span class="bigger">Examples </span>{" "}
              </p>
            </div>
            <div class="example gray-border greenish" id="examples">
              <div>
                <p class="info">
                  {example}
                  <br />
                </p>
                <div class="feedback">
                  <i>Was this example helpful?</i>{" "}
                  <span
                    onClick={this.handleClick}
                    class="positive thumbs fa"
                    ref="thumbsup"
                  >
                    &#xf087;
                  </span>{" "}
                  <span
                    onClick={this.handleClick}
                    class="negative thumbs fa"
                    ref="thumbsdown"
                  >
                    &#xf088;
                  </span>
                </div>
                {/* <hr class="info" /> */}
              </div>
            </div>

            <div class="example">
              <p class="info">
                <span class="bigger">Related queries </span>{" "}
              </p>
              {related}
              {/* <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Button with data-target
              </button> */}
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          id="genbutton"
          class="btn btn-success"
          onClick={() => {
            this.generate();
            this.forceUpdate();
          }}
        >
          GENERATE MORE
        </button> */}
      </div>
    );
  }
}

export default withRouter(Results);
