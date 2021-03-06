import React, { Component } from 'react';
import images1 from './images/antelope.jpeg';
import images2 from './images/bird.jpeg';
import images3 from './images/cats.jpeg';
import images4 from './images/chihuahua.jpeg';
import images5 from './images/elephant.jpeg';
import images6 from './images/horse.jpeg';
import images7 from './images/kittens.jpeg';
import images8 from './images/lamb.jpeg';
import images9 from './images/lion.jpeg';
import images10 from './images/parrots.jpeg';
import images11 from './images/rabbits.jpg';
import images12 from './images/tiger.jpeg';
import './App.css';


function shuffle (array) {
    array.sort(() => Math.random() - 0.5);
  }

class App extends Component {
  constructor() {
    super();

    this.state = {
      imageArr :[
        images1,
        images2,
        images3,
        images4,
        images5,
        images6,
        images7,
        images8,
        images9,
        images10,
        images11,
        images12
      ],
      clicked: [],
      topScore: 0,
      score: 0,
      guessText: "Click an image to begin!",
      isShaking: ""
    }
  }

  clickImage = (event) => {

    event.preventDefault();

    let clicked = [...this.state.clicked]
    // console.log(clicked);

    let images = [...this.state.imageArr]
    // console.log(images);

    let score = this.state.score
    let topScore = this.state.topScore

    let guessText = this.state.guessText

    let isShaking = this.state.shake

    if ((clicked.includes(event.target.src))&& (score <= 11)) {
      clicked = [];
      score = 0;
      guessText = "Wrong guess";
      isShaking = "shake";

    }else {

      isShaking = "";

      clicked.push(event.target.src);
      // console.log(event.target.src);
      if (score <=11) {

        score ++
        guessText = "You guessed correctly"

      }else if ((score === 12)){

        clicked = [];
        guessText = "You Win!"
        score = 0;

      }

      if (score > topScore){

          topScore ++

        }else 

          topScore = this.state.topScore;

    }

    shuffle(this.state.imageArr);
    // this.setState({});

    this.setState( {
      images, 
      clicked, 
      topScore, 
      score,
      guessText,
      isShaking
    })

   // console.log("you clicked")

  }

render(){
  return (
      <div className="App">

      <nav className="navbar">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item"> <a href="./index.html">Clicky Game</a> </li>
        </ul>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item guess">{this.state.guessText}</li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item navbar-text">Score : <span className="scoreSpan"> {this.state.score} </span> Top Score : <span className="topScoreSpan"> {this.state.topScore}</span></li>
        </ul>

      </nav>

      <header className="header">

        <h1>CLICKY GAME</h1>
        <h2>Click on an image to earn points, but don't click on it any more than once!</h2>

      </header>

      <div className="container">

        {this.state.imageArr.map((object, ind) => {
            return <img key={ind} src={object} className={`${this.state.isShaking} Image-style`} alt={`${ind}animal`} onClick={this.clickImage} />
          })}

      </div>

      <footer className="footer">

        <div className="bottom">
          Clicky Game &copy; 2019 Juthika Shetye
        </div>

      </footer>  

      </div>
    );
  }
}
export default App;
