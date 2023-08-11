import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import photo from "../images/corporate.jpg";
import * as Icon from 'react-bootstrap-icons'
import './KnowMore.css'

function KnowMore() {
    
  return (
    <div style={{ backgroundColor: "white", padding:'5%' }}>
      <Container style={{ display: "flex" }}>
      <Row>
      <Col xs={12} md={6}>
      <div style={{paddingBottom:'5%'}}>
          <h2>
            <strong>
              We have Many Year Experience in <br /> Consultent Business
            </strong>
          </h2>

          <p style={{marginTop:'5%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            libero diam, <br />
            vulputate eu velit vitae, molestie congue arcu. Lorem ipsum dolor
            sit amet,
            <br /> consectetur adipiscing elit.Pellentesque cursus placerat
            ligula id suscipit.
          </p>
          <Button
            variant="primary"
            style={{ backgroundColor: "#00a8f9", borderColor: "#00a8f9",marginTop:'5%' }}
          >
            Know More
          </Button>
        </div>
      </Col>


        <Col xs={12} md={6}>
        <div style={{position:'relative'}}>
          <Image src={photo} fluid />
          <Icon.PlayCircleFill className="play-btn"  color="#03abf3" size={'25%'}/>
        </div>
        </Col>

      </Row>
        
        
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon.GearWideConnected  size={48} />
        <h4>Construction</h4>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Icon.CloudsFill  size={48} />
        <h4>DummyLogo</h4>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Icon.Sunglasses  size={48} />
        <h4>RandomLogo</h4>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Icon.Tools  size={48} />
        <h4>RandomBrand</h4>
      </div>
    </div>
    </div>
  );
}

export default KnowMore;
