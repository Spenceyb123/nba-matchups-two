import React from 'react';
import './Info.css';

class Info extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="info-container">
                <div className="close-info">
                    x
                </div>
               <p className="info-para">
                Welcome to NBA Matchups!! <br/> <br/>

                The two player cards compare some of the best statistical seasons NBA players have had! <br/> <br/>

                You are on Team Jordan, click the "Start Game" button to get your first player matchup, and click "Jump Ball" to see who wins the matchup. <br/> <br/>

                First team to 10 wins... good luck! <br/> <br/>

                Tip: You can hover over a stat if you are not sure what it stands for
               </p>
            </div>
        );
    }




};

    export default Info;
