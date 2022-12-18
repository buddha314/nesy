import { Component } from "react";
import {Col} from 'react-bootstrap';

class Criteria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: ''
        }
        this.setCriteria = this.setCriteria.bind(this);
    }
    render () {
        return (
            <Col>
            <div>
                I'm the criteria
            </div>
            <form onSubmit={this.setCriteria}>
                <input type='text' id='criteriaInput' ref={el => this.element = el}></input>
                <input type="submit" value="Submit"/>
            </form>
            </Col>
        )
    }    
    setCriteria (event) {
        event.preventDefault() ;
        console.log("setting criteria");
        this.setState({criteria: this.element.value})
    }
}

export default Criteria;