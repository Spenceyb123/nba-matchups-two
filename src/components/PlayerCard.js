import React from 'react';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";


class PlayerCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    
    
        componentDidMount () {

            let loading = document.getElementsByClassName("loading-container-background")[0];

            setTimeout(function(){ 
            loading.style.display = "none";
            }, 300);


          }

        shouldComponentUpdate(nextProps, nextState) {

            //dont get new players if winnerComp showing 
            let winnerComp = document.getElementsByClassName("winnerComponent")[0];
            

            let loserComp = document.getElementsByClassName("loser-component")[0];
            
            if(this.props.countLeft >= 10 && window.getComputedStyle(winnerComp).display === "block") {
              return false;
            }

            if(this.props.countRight >= 10 && window.getComputedStyle(loserComp).display === "block") {
              return false;
            }

            // sets back to jordan kobe when left score hit
            if(this.props.countLeft >= 10 && this.props.jordanKobeInitial >= 1) {
              return true;
            }

            if(this.props.countRight >= 10 && this.props.jordanKobeInitial >= 1) {
              return true;
            }

          

            if (this.props.samePlayers === true) {
              console.log("same players");
              return true;

            } else if ( this.props.jordanKobeInitial <1 && this.props.bballNewPlayers == true ) {
                                
                return true;
                
            } else if (this.props.jordanKobeInitial === 1 && this.props.bballNewPlayers == true) {

                return true;
            

             } else if (nextProps.jordanKobeInitial > this.props.jordanKobeInitial) {
                return true;
             }
            return false;
          
          }

        
             
        render(){
             
            const { data, jordanKobe, random } = this.props;
            

            return (
                <div className="mtg-card-flex-container">
             
                <div className="mtg-card-container">
                    <img className="MTG-card" src={MTGCard} alt="player card"/>
                    
            <div className="name-container">{this.props.jordanKobeInitial < 1 ? jordanKobe.Player : data[random].Player}<span className="year">{this.props.jordanKobeInitial < 1 ? jordanKobe.Season : data[random].Season}</span></div>
                    <div className="player-image-container">
                        <img className="player-image" src={this.props.jordanKobeInitial < 1 ? jordanKobe.src : data[random].src} alt={this.props.jordanKobeInitial < 1 ? jordanKobe.alt : data[random].alt} />
                    </div>
                    <div className="stats">
                        <p className="stats-paragraph left PPG" >
                          <span className="stats-before-hover">PPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.PTS :  data[random].PTS}  </span>
                          <span className="stats-hover">Points Per Game</span>
                          </p>
                        <p className="stats-paragraph left TSP">
                          <span className="stats-before-hover">TSP: {this.props.jordanKobeInitial < 1 ? (jordanKobe.TSP * 100).toFixed(1) + "%" : (data[random].TSP * 100).toFixed(1) + "%"}</span>
    
                          <span className="stats-hover">True Shooting %</span>
                          </p>
                        <p className="stats-paragraph left APG">
                          <span className="stats-before-hover">APG: {this.props.jordanKobeInitial < 1 ? jordanKobe.AST : data[random].AST}</span>
                          <span className="stats-hover">Assists Per Game</span>
                          </p>
                        <p className="stats-paragraph left RPG">
                          <span className="stats-before-hover">RPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.TRB : data[random].TRB}</span>
                          <span className="stats-hover">Rebounds Per Game</span>
                          </p>
    
                        <div className="stats-right-container">
                        <p className="stats-paragraph right BPG">
                          <span className="stats-before-hover">BPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.BLK : data[random].BLK}</span>
                          <span className="stats-hover">Blocks Per Game</span>
                          </p>
                        <p className="stats-paragraph right SPG">
                          <span className="stats-before-hover">SPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.STL : data[random].STL}</span>
                          <span className="stats-hover">Steals Per Game</span>
                          </p>
                        <p className="stats-paragraph right TPG">
                          <span className="stats-before-hover">TPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.TOV : data[random].TOV}</span>
                          <span className="stats-hover">Turnovers Per Game</span>
                          </p>
                        </div>
                        
                        
                    </div>

               
                    
            
                </div>

    
    
    </div>
    
                );
            };
     
        }
        
    
    
    export default PlayerCard;