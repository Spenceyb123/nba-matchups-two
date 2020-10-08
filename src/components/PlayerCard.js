import React from 'react';
// import $ from 'jquery';
import './PlayerCard.css';
import MTGCard from "../assets/images/mtg-card.png";


class PlayerCard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
        
    
    
    
        componentDidMount () {
            console.log('ChildDiv did mount');

            // console.log(document.getElementsByClassName("name-container"));

        //  document.getElementsByClassName("name-container").insertAdjacentHTML('afterbegin', data[0].Player );
        //  document.getElementsByClassName("year").insertAdjacentHTML('afterbegin', data[0].Season);
        //  document.getElementsByClassName("player-image").src = data[0].src; //merged Images with data in state
        //  document.getElementsByClassName("stats-before-hover")[0].insertAdjacentHTML('beforeend', data[0].PTS);
        //  document.getElementsByClassName("stats-before-hover")[1].insertAdjacentHTML('beforeend', (data[0].TSP * 100).toFixed(1) + "%");
        //  document.getElementsByClassName("stats-before-hover")[2].insertAdjacentHTML('beforeend', data[0].AST);
        //  document.getElementsByClassName("stats-before-hover")[3].insertAdjacentHTML('beforeend', data[0].TRB);
        //  document.getElementsByClassName("stats-before-hover")[4].insertAdjacentHTML('beforeend', data[0].BLK);
        //  document.getElementsByClassName("stats-before-hover")[5].insertAdjacentHTML('beforeend', data[0].STL);
        //  document.getElementsByClassName("stats-before-hover")[6].insertAdjacentHTML('beforeend', data[0].TOV);
      
        //  //Kobe
        //  document.getElementsByClassName("name-container").insertAdjacentHTML('afterbegin', data[40].Player );
        //  document.getElementsByClassName("year").insertAdjacentHTML('afterbegin', data[40].Season);
        //  document.getElementsByClassName("player-image").src = data[40].src; //merged Images with data in state
        //  document.getElementsByClassName("stats-before-hover")[7].insertAdjacentHTML('beforeend', data[40].PTS);
        //  document.getElementsByClassName("stats-before-hover")[8].insertAdjacentHTML('beforeend', (data[40].TSP * 100).toFixed(1) + "%");
        //  document.getElementsByClassName("stats-before-hover")[9].insertAdjacentHTML('beforeend', data[40].AST);
        //  document.getElementsByClassName("stats-before-hover")[10].insertAdjacentHTML('beforeend', data[40].TRB);
        //  document.getElementsByClassName("stats-before-hover")[11].insertAdjacentHTML('beforeend', data[40].BLK);
        //  document.getElementsByClassName("stats-before-hover")[12].insertAdjacentHTML('beforeend', data[40].STL);
        //  document.getElementsByClassName("stats-before-hover")[13].insertAdjacentHTML('beforeend', data[40].TOV);
            // console.log(this.props.data);
           
            // console.log(data[0].player);

       
            // console.log(this.props);
            // console.log(this.state);
            // console.log(this.state.countLeft);
            // console.log(props);
            
          }
    
        componentDidUpdate() {
            // let self = this;
            console.log('PlayerCard Updated');
         
        }
        
             
        render(){
            let jordanKobeInitial = 0; // if less 1, have kobe and jordan(?)
            console.log("PlayerCard render");
            const { data, jordanKobe, random } = this.props;
            

         
         
    
           
            return (
                <div>
             
                <div className="mtg-card-container">
                    <img className="MTG-card" src={MTGCard} alt="player card"/>
                    
            {/* <div>{this.props.children}</div> */}
            <div className="name-container">{jordanKobeInitial < 1 ? jordanKobe.Player : data[random].Player}<span className="year"></span></div>
                    <div className="player-image-container">
                        <img className="player-image"  />
                    </div>
                    <div className="stats">
                        <p className="stats-paragraph left PPG" >
                          <span className="stats-before-hover">PPG: {jordanKobeInitial < 1 ? jordanKobe.PTS : data[random].Player} </span>
                          <span className="stats-hover">Points Per Game</span>
                          </p>
                        <p className="stats-paragraph left TSP">
                          <span className="stats-before-hover">TSP: </span>
    
                          <span className="stats-hover">True Shooting %</span>
                          </p>
                        <p className="stats-paragraph left APG">
                          <span className="stats-before-hover">APG: </span>
                          <span className="stats-hover">Assists Per Game</span>
                          </p>
                        <p className="stats-paragraph left RPG">
                          <span className="stats-before-hover">RPG: </span>
                          <span className="stats-hover">Rebounds Per Game</span>
                          </p>
    
                        <div className="stats-right-container">
                        <p className="stats-paragraph right BPG">
                          <span className="stats-before-hover">BPG: </span>
                          <span className="stats-hover">Blocks Per Game</span>
                          </p>
                        <p className="stats-paragraph right SPG">
                          <span className="stats-before-hover">SPG: </span>
                          <span className="stats-hover">Steals Per Game</span>
                          </p>
                        <p className="stats-paragraph right TPG">
                          <span className="stats-before-hover">TPG: </span>
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