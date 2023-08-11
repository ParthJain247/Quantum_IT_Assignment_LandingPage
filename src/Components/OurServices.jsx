import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import report from '../images/report.png'
import { Button } from 'react-bootstrap';


function OurServices() {
  const imageStyle={
    width:'20%',
    position:'absolute',
    top:'-2vw',
    right:'40%'
  }

  const containerStyle = {
    backgroundColor: 'white',
    padding: '5%',
    border: '2px solid #00adf5',
    marginBottom:'10%',
    position:'relative',
    boxShadow: '0 4px 6px rgba(0, 173, 245, 0.5)',
  };
  return (
    <div style={{backgroundColor:'#f7fcff',padding:'5%',textAlign:'center'}}>
          <div >
            <h1 style={{display:'inline',paddingBottom:'1%', borderBottom:'6px dotted #dfe9ed'}}><strong>Our Services</strong></h1>
          </div>
          <div style={{marginTop:'8vw',paddingBottom:'2vw'}}>
            <h6 > Lorem ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </div>
          
          <Container style={{ display: "flex",marginTop:'5vw' }}>
      <Row>
      <Col xs={12} md={12} lg={4}>
      <div style={{backgroundColor:'white',padding:'5%',marginBottom:'10%',position:'relative'}}>
          <h3 style={{paddingTop:'15%'}}>Financial Consulting</h3>
          <h6 style={{paddingTop:'2.5%'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</h6>
          <img style={imageStyle} src={report} alt='report'/>
        </div>
      </Col>

      <Col xs={12} md={12} lg={4}>
      <div style={containerStyle}>
          <h3 style={{paddingTop:'15%'}}>Content Marketing</h3>
          <h6 style={{paddingTop:'2.5%'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</h6>
          <img style={imageStyle} src={report} alt='report'/>
        </div>
      </Col>


        <Col xs={12} md={12} lg={4}>
        <div style={{backgroundColor:'white',padding:'5%',marginBottom:'10%',position:'relative'}}>
          <h3 style={{paddingTop:'15%'}}>Finance Advice</h3>
          <h6 style={{paddingTop:'2.5%'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</h6>
          <img style={imageStyle} src={report} alt='report'/>
        </div>
        </Col>

      </Row>
        
        
      </Container>

      <div style={{marginTop:'3%'}}>
      <Button variant="primary" style={{backgroundColor: '#00a8f9',
    borderColor: '#00a8f9'}}>All Services</Button>
      </div>

    </div>
  )
}

export default OurServices