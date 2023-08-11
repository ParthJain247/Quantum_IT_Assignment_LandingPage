import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css'
import { Button, Form } from 'react-bootstrap';
function Footer() {
  return (
    <div className='footer_backdrop'>

      <Row>
      <Col xs={12} md={6}>
      <div style={{paddingBottom:'5%'}}>
          <h2>
            <strong>
              Subscribe Our Newsletter <br/> For More Update
            </strong>
          </h2>

          <p style={{marginTop:'5%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            libero diam, <br />
            vulputate eu velit vitae, molestie congue arcu. Lorem ipsum dolor
            sit amet,
          </p>
        </div>
      </Col>


        <Col xs={12} md={6}>
        <div style={{}}>
        <Form >
      <Form.Group controlId="emailInput" className="mb-4">
      <Form.Control type="email" placeholder="Enter your mail" className="transparent-input" />
      </Form.Group>
      <Button style={{backgroundColor: '#00a8f9',
    borderColor: '#00a8f9'}} variant="primary" className="btn-block">
        Subscribe
      </Button>
    </Form>
          
        </div>
        </Col>

      </Row>
        
        
     
    </div>
  )
}

export default Footer