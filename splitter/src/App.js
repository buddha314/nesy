import './App.css';
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: '',
      criteriaArray: []
    }
    this.setCriteria = this.setCriteria.bind(this);
    this.myRef = React.createRef;
  }

  setCriteria (event) {
    event.preventDefault() ;
    console.log("setting criteria");
    let arr = '<span>' + this.element.value.split(' ').join('</span><span>') + '</span>';
    /*
    this.element.value.split(' ').forEach((x) => {
      this.state.criteriaArray.push(<h3 className='feature'>{x}</h3>)
    })
     */
    this.setState({criteria: this.element.value, criteriaArray: this.element.value.split(' ')})
  }

  componentDidMount() {
    console.log("Mounting!!");
    console.log(this.myRef);
    d3.select('#wksp')
      .append('p')
      .text('Hello from D3');
    let svg = d3.select('#wksp')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);
    
    svg.selectAll('rect')
      .data(this.state.criteriaArray)
      .enter()
      .append('rect')
      .attr('x', (d,i) => 5 + i*(95+5) )
      .attr('y', d=> 500-d)
      .attr('height', d=>d)
      .attr('fill', 'teal')
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
              <div id="wksp"></div>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default App;
