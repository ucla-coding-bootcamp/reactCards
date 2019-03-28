import React, { Component } from 'react';
import Card from './components/card/index';
import Navbar from './components/navbar/index'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

let pictures = require('./pictures.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linksArray: [],
      currentScore: 0,
      maxScore: 0,
      lastCard: [] };
  }

  counter = (clicked_card) => {
    

    if(!this.state.lastCard.includes(clicked_card)){
      let previousCards = this.state.lastCard;
      previousCards.push(clicked_card);

      let new_score = this.state.currentScore + 1;

      this.setState({
        currentScore: new_score,
        lastCard: previousCards
      });

      
      if(this.state.maxScore<new_score){
        this.setState({
          maxScore:new_score
        })
      }
      
    } else if (this.state.lastCard.includes(clicked_card)){
      this.setState({
        currentScore: 0,
        lastCard: []
      });
      
      alert('Thanks for playing!');
    }

  }

  shuffle = (clicked_card) => {
    
    this.counter(clicked_card);
    this.setCards();
  
  }

  setCards = () => {
    let selectedNumbers = [];
    let shuffledDeck = [];

    while (selectedNumbers.length<8){
      let randomNumber = Math.floor(Math.random() * pictures.length );
      if (!selectedNumbers.includes(randomNumber)){
        selectedNumbers.push(randomNumber);
        shuffledDeck.push(<Card key={randomNumber} identification={randomNumber} shuffle={this.shuffle} link={pictures[randomNumber].link}/>);
      }
    }

    this.setState({
      linksArray: {shuffledDeck}
    });
  }

  componentDidMount() {
    this.setCards();
  }




  render() {
    
    return (
      
      <div>
        <Navbar currentScore={this.state.currentScore} maxScore={this.state.maxScore}/>    
          <br></br>
            <div className="row">
                <div className="col">
                </div>

                <div className="col-11">
                <div className="jumbotron jumbotron-fluid">
                  <div className="imageContainer">

                        {this.state.linksArray.shuffledDeck}
                              
                  </div>
                </div>
                </div>

                <div className="col">
                </div>
            </div>
      </div>

    );
  } 
}

export default App;
