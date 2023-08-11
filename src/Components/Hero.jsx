import React from "react";
import "./Hero.css";
import Button from 'react-bootstrap/Button';
function Hero() {
  return (
    <div className="hero_backdrop">
      <div style={{ position: "absolute", padding:'2%',marginLeft:'5%',marginRight:'5%',marginTop:'10%',backgroundColor:'rgba(255, 255, 255, 0.16)' ,borderRadius:'15px'}}>
        <h5>We Are What We Think</h5>
        <h2>
          {" "}
          <strong>
            We are Consulting For Your <br /> Business Finances
          </strong>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero
          diam, vulputate eu velit vitae, molestie congue <br /> arcu. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
          placerat ligula id suscipit.
          <br /> Duis pharetra eleifend tortor, eget eleifend tortor euismod
          sed.Maecenas convallis nulla ac mauris vehicula sollicitudin.
        </p>
        <Button variant="primary" style={{backgroundColor: '#00a8f9',
    borderColor: '#00a8f9'}}>Start Now</Button>
      </div>
    </div>
  );
}

export default Hero;
