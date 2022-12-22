import './App.css';
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LGraph, LGraphCanvas, LiteGraph} from 'litegraph.js';
import 'litegraph.js';
import 'litegraph.js/css/litegraph.css';
//import * as d3 from 'd3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: '',
      criteriaArray: [],
      featureArray: []
    }
    this.setCriteria = this.setCriteria.bind(this);
    this.myRef = React.createRef;
    this.snipCriteria = this.snipCriteria.bind(this);
    this.renderSVG = this.renderSVG.bind(this);
    this.featureSpan = this.featureSpan.bind(this);
  }

  setCriteria (event) {
    event.preventDefault() ;
    console.log("setting criteria");
    this.element.value.split(' ').forEach((x) => {
      this.state.criteriaArray.push(x)
    })
    this.setState({criteria: this.element.value})
    console.log(this.state.criteriaArray);
    this.renderSVG();
  }

  featureSpan (x, i) {
    return(
      <span className="feature" id={'feature-' + i.toString()} onClick={(e) => {this.snipCriteria(e)}} >
        {x}
      </span>
    )
  }

renderSVG () {
    if (this.state.criteriaArray.length > 0) {
      this.state.criteriaArray.forEach((x, i) => {
        this.state.featureArray.push(this.featureSpan(x,i));
      })
    }
  }

  snipCriteria(el) {
    // element id is in el.target.id
    let idx = el.target.id.split('-')[1];
    console.log("SNIP SNIP!");
    console.log(el.target.id);
    console.log(this.state.criteriaArray[idx]);
  }

  componentDidMount() {
    console.log("Mounting!!");
    console.log(this.myRef);
    console.log(this.state.criteriaArray)

    var graph = new LGraph();

    var canvas = new LGraphCanvas("#mycanvas", graph);

    var node_const = LiteGraph.createNode("basic/const");
    node_const.pos = [200,200];
    graph.add(node_const);
    node_const.setValue(4.5);

    var node_watch = LiteGraph.createNode("basic/watch");
    node_watch.pos = [700,200];
    graph.add(node_watch);

    node_const.connect(0, node_watch, 0 );

    graph.start()


  }

  render () {
    return (
      <Container>
          <Row>
            <Col>
            <p>Criteria</p>
            <form onSubmit={this.setCriteria}>
                <input type='text' id='criteriaInput' ref={el => this.element = el}></input>
                <input type="submit" value="Submit"/>
            </form>
            </Col>
            <Col>
              <p>Workspace</p>
              <div>{this.state.criteriaArray}</div>
            </Col>
          </Row>
          <Row>
            <div id="wksp">{this.state.featureArray}</div>
          </Row>
        <div>
        <canvas  id='mycanvas' style={{height: '80vh',  border: 'solid 5px'}}></canvas>

        </div>
      </Container>
    );
  }
}

export default App;
