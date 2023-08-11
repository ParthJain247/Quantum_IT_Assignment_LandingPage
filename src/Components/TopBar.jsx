import React from "react";
import * as Icon from "react-bootstrap-icons";
function TopBar() {
  return (
    <div
      style={{
        backgroundColor: "#06a8f2",
        display: "flex",
        justifyContent: "space-between",
        padding:'0.5vw 5vw 0.5vw 5vw'
      }}
    >
      <div style={{display:'flex'}}>
        <div>
          <Icon.Clock color="white" />
          <a style={{ color: "white",marginLeft:'0.2vw',fontSize:'75%' }} href="www.google.com">
            We are open 24/7   
          </a>
        </div>
        <span style={{marginLeft:'0.5vw',color:'white'}}>|</span>
        <div style={{marginLeft:'0.5vw'}}>
          <Icon.Envelope color="white" />
          <a style={{ color: "white",marginLeft:'0.2vw',fontSize:'75%'}} href="www.google.com">
            mail.gmail.com
          </a>
        </div>
      </div>

      <div>
        <Icon.Instagram color="white"  />
        <Icon.Facebook color="white" style={{marginLeft:'1vw'}}/>
        <Icon.Twitter color="white" style={{marginLeft:'1vw'}}/>
        <Icon.Linkedin color="white" style={{marginLeft:'1vw'}}/>
      </div>
    </div>
  );
}

export default TopBar;
