import React from 'react';
import './style.css';

class Card extends React.Component {
  
  
  countCard = () => {
    
    this.props.shuffle(this.props.identification);
   
  }


  render() {
    
      return (
        <div >
            <img className="card" onClick={() => this.countCard()} src={this.props.link}  key= {this.props.id} alt="card"/> 
        </div>
      );
    }
  }
  
  export default Card;

