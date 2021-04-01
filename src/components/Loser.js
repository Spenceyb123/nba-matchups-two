import React from 'react';
import './Loser.css';


class Loser extends React.Component {



    render() {
        console.log("loser comp right after render");
        return (
            <div className="container">
        
        <div className="trophy-container">
            <img  className="trophy" alt="One hand with thumb down"/>
        </div>
    
        <button className="play-again" onClick={this.props.playAgain}>Play Again</button>
        </div>
        )
        
    }
    
    };
    
    export default Loser;