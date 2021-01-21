import React from 'react';
import './App.css';
import myImag1 from './imageInPublic.jpg';
import myImage2 from './imageInSrc.jpg';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">Your name here</h1>
      <img src={myImag1} alt="iamge public"></img>
      <img src={myImage2} alt=" mage linux"></img>

      </div>
     
      <ReactPlayer   style={{marginLeft:"400px", marginTop:"50px"}} url="https://www.youtube.com/watch?v=mxK8b99iJTg" />
     
      
   
    </div>
  );
}

export default App;
