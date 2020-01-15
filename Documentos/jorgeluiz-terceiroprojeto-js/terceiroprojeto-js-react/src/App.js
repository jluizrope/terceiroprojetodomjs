import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      imagesList:[
      "https://cdn.pixabay.com/photo/2017/01/23/09/21/learn-2001838_960_720.jpg",
      // 'assets/imag02terceiroprojeto',
      // 'assets/imag03terceiroprojeto',
      // 'assets/imag04terceiroprojeto'
      ], 
      counter: 0
    }
  }          
    // let left=document.getElementById('left')
    // let img=document.getElementById('img')
    // let right=document.getElementById('right')
    
    left = (event) =>{
      if (this.state.counter > 0) {
        this.setState({counter: this.state.counter - 1})
        }else {
          this.setState({counter: 3})
        }
        document.getElementById('img').setAttribute('src', this.state.imagesList[this.state.counter]);
    }
    
    right = (event) => {
      if (this.state.counter < 3) {
        this.setState({counter: this.state.counter + 1})        
      } else {
        this.setState({counter: 0})
      }
      document.getElementById('img').setAttribute('src', this.state.imagesList[this.state.counter]);
    } 
    
  render(){
    return (
      <div className="App">
        <body class="body" id="segundoprojeto">
          <header></header>
          <main class="main">
            <bottom onClick={this.left}>left</bottom>
            <img class='mainimag01' id="img" src="https://cdn.pixabay.com/photo/2017/01/23/09/21/learn-2001838_960_720.jpg" />
            <bottom onClick={this.right} id="right">right</bottom>
            {/* <img src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg" />
            <img src="assets/imag03terceiroprojeto" />
            <img src="assets/imag04terceiroprojeto" /> */}
          </main>
          <script type="text/javascript" src="main.js"></script>
        </body>
      </div>
    );
  }
}

export default App;
