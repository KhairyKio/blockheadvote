import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import './scss/AppStyle.scss'
import './scss/VotingUtils.scss'
import './css/VotingUtils.css'

import {Navbar,Nav,NavDropdown, Container, Col, Row} from 'react-bootstrap'
import Candidate from './Components/Candidate'
import female from './assets/female.png'
import male from './assets/male.png'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')


export default function App() {

  let candidate1Desc = "BBM mag nanakaw wag nyo iboto mga bobo";
  let candidate2Desc = "Let leni lead tama ang mindset";

  return (
  <React.Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Container className='votingBooth'>
      <Row>
        <Col className='d-flex justify-content-center'><Candidate title={"BANO BBM"} description={candidate1Desc} picture={male}/></Col>
        <Col className='d-flex justify-content-center'>Voting Subject</Col>
        <Col className='d-flex justify-content-center'><Candidate title={"LENI BRODREDO"} description={candidate2Desc} picture={female}/></Col>
      </Row>
    </Container>
  </React.Fragment>
  )
}
 