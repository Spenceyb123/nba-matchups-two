import React from 'react';
import './Winner.css';
import Trophy from "../assets/images/nba-trophy.png";

//working on this....

class Winner extends React.Component {



render() {
    return (
        <div className="container"> 
    <p className="hell-ya">Hell ya, you win, thanks for playing!!</p>
    
    <div className="trophy-container">
        <img src={Trophy} className="trophy" alt="NBA Finals Trophy"/>
    </div>

    <button className="play-again">Play Again</button>
    </div>
    )
    
}

};

export default Winner;