import React from 'react';
import './Winner.css';
import Trophy from "../assets/images/nba-trophy.png";

//working on this....

class Winner extends React.Component {



render() {
    console.log("winner comp right after render");
    return (
        <div className="container">
    
    <div className="trophy-container">
        <img src={Trophy} className="trophy" alt="NBA Finals Trophy"/>
    </div>

    <button className="play-again" onClick={this.props.playAgain}>Play Again</button>
    </div>
    )
    
}

};

export default Winner;