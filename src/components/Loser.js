import React from 'react';
import './Loser.css';
import CryingJordan from "../assets/images/crying-jordan.png";


class Loser extends React.Component {



    render() {

        return (
            <div className="loser-container">
        
        <div className="crying-jordan-container">
            <img src={CryingJordan}  className="trophy" alt="One hand with thumb down"/>
        </div>
    
        <button className="play-again" onClick={this.props.playAgain}>Play Again</button>
        </div>
        )
        
    }
    
    };
    
    export default Loser;