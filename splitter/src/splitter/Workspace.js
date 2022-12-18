import { Component } from "react";
import {Col} from 'react-bootstrap';

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: '',
            criteriaArray: ''
        }
    }
    render () {
        return (
            <Col>
                <div>Workspace!</div>
                <div>{this.state.criteria}</div>
            </Col>
        )
    }
}

export default Workspace;