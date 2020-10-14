import React from 'react';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";


class PlayerCard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    constructor(props) {
        super(props);

        // this.state = {
        //     jordanKobeInitial : 0    
        //  };
    }
    
    
    
        componentDidMount () {
            console.log('ChildDiv did mount');
           
          }

          shouldComponentUpdate(nextProps, nextState) {

            if( this.props.jordanKobeInitial <1 && this.props.bballNewPlayers == true ) {
                
                console.log(this.props.jordanKobeInitial, this.props.bballNewPlayers);
                
                return true;
                
            } else if (this.props.jordanKobeInitial === 1 && this.props.bballNewPlayers == true) {

                console.log(this.props.jordanKobeInitial, this.props.bballNewPlayers);
                return true;
            

             } else if (nextProps.jordanKobeInitial > this.props.jordanKobeInitial) {
                console.log(this.props.jordanKobeInitial, this.props.bballNewPlayers);
                return true;
             }
            console.log(this.props.jordanKobeInitial, this.props.bballNewPlayers); 
            return false;
          
          }
    
        componentDidUpdate() {
            // let self = this;
            console.log('PlayerCard Updated');

        }

        
             
        render(){
 
            console.log("PlayerCard render", this.props.jordanKobeInitial);
            
            const { data, jordanKobe, random } = this.props;
            console.log(data);
            

         
         
    
           
            return (
                <div>
             
                <div className="mtg-card-container">
                    <img className="MTG-card" src={MTGCard} alt="player card"/>
                    
            <div className="name-container">{this.props.jordanKobeInitial < 1 ? jordanKobe.Player : data[random].Player}<span className="year">{this.props.jordanKobeInitial < 1 ? jordanKobe.Season : data[random].Season}</span></div>
                    <div className="player-image-container">
                        <img className="player-image" src={this.props.jordanKobeInitial < 1 ? jordanKobe.src : data[random].src} alt={this.props.jordanKobeInitial < 1 ? jordanKobe.alt : data[random].alt} />
                    </div>
                    <div className="stats">
                        <p className="stats-paragraph left PPG" >
                          <span className="stats-before-hover">PPG: {this.props.jordanKobeInitial < 1 ? jordanKobe.PTS : data[random].PTS} </span>
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