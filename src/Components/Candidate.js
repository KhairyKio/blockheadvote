import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'

class Candidate extends Component {
    render() {
        return (
            <div>
            <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.picture} />
                <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">VOTE</Button>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default Candidate;