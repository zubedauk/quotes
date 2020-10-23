import React, { Component} from 'react';

import './App.css';

//
class App extends Component {
  
  constructor(props){
    
    super(props);
    
    this.state = { apiResponse: "" };
    //this.state = { apiResponse: "" };
  }
  
  callAPI() {
    
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
 dd(){
   document.getElementById("img").style.display="inline"
  fetch("http://localhost:9000/testAPI")
  .then(function(res){
    return res.text()
  })
  .then(function(data){
    let quote=data.split("=");
    document.getElementById("para").textContent=quote[0];
    document.getElementById("author").textContent=quote[1];

  })
 }
  render(){
    
    
    return(

    <div className="App" style={{textAlign:'left',fontStyle:'italic',fontSize:'22px', padding:'1rem',backgroundColor:'#CDCDCD' ,width:'80%',marginLeft:'auto',marginRight:'auto',marginTop:'2rem'}} >
      <div style={{color:'#505050'}}>
      <p id="head">Enjoy the positive quotes.<br/>These makes a positive impact on our life.Click on Quote please.</p>
      <img id="img" style={{display:'none',width:'2rem'}} alt="" src="https://img.pngio.com/collection-of-free-transparent-white-quotation-marks-download-on-quotation-marks-transparent-492_395.png"/>
        <p  style={{marginLeft:'1rem',display:'inline'}} id="para"></p>
        <p id="author"></p>
        <button style={{width:'6rem',height:'3rem',fontWeight:'bold',fontSize:'16px'}} onClick={this.dd}>Quote</button>
      </div>
      
    </div>
  );
    }
}

export default App;
