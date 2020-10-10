import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';

//working on
//1. put text content into stats so comparison variables can read 
//2. then bball button comparisons / yellow animation 

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() { 
    
        let self = this;
        d3.csv(importedCsvData).then(function(data) {
          data.forEach(function(d) {
      
            d.Rk = + d.Rk;
            d.TRB = +d.TRB;
            d.AST = +d.AST;
            d.STL = +d.STL;
            d.BLK = +d.BLK;
            d.TOV = +d.TOV;
            d.PTS = +d.PTS;
            d.TSP = +d.TSP;
      
          }) 
          
            for (var i = 0; i < data.length; i++) {
              for (var y = 0; y < Images.length; y++) {
                if (data[i].Rk === Images[y].id) {
                  Object.assign(Images[y], data[i]); //merges 2nd param into first
                }
              }
            }  
      
         self.setState({ data: Images }); // do I need this with refig????????
         console.log(data[40]);
         
        }); 
        console.log('mounted');
       
      }

      handleBasketballButton =  () => {
        
        console.log(document.getElementsByClassName("stats-paragraph left PPG")[1].textContent); 
        // let test = document.getElementsByClassName("stats-paragraph left PPG")[1].textContent;
        // console.log(parseFloat(test.match(/[0-9|.]/g).join('')));

        //below line working to convert stat to number to be compared================ paste this in below 
        console.log(parseFloat(document.getElementsByClassName("stats-paragraph left PPG")[1].textContent.match(/[0-9|.]/g).join('')));

        // const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
        // document.getElementsByClassName("name-container").value; // pending....

          
    //     if (random === randomTwo) { //so that won't be same two players 
    //       random = Math.floor(Math.random() * Images.length); 
    //       randomTwo = Math.floor(Math.random() * Images.length);
    //     } 
          
           
            //   if(random !== undefined || randomTwo !== undefined){
                  
                  const statsArrayRandom = [];
                  const randomPPG = parseFloat(document.getElementsByClassName("stats-paragraph left PPG")[0].textContent.match(/[0-9|.]/g).join('')); 
                  const randomTSP = parseFloat(document.getElementsByClassName("stats-paragraph left TSP")[0].textContent.match(/[0-9|.]/g).join(''));  
                  const randomAPG = parseFloat(document.getElementsByClassName("stats-paragraph left APG")[0].textContent.match(/[0-9|.]/g).join(''));
                  const randomRPG = parseFloat(document.getElementsByClassName("stats-paragraph left RPG")[0].textContent.match(/[0-9|.]/g).join(''));
                  const randomBPG = parseFloat(document.getElementsByClassName("stats-paragraph right BPG")[0].textContent.match(/[0-9|.]/g).join(''));
                  const randomSPG = parseFloat(document.getElementsByClassName("stats-paragraph right SPG")[0].textContent.match(/[0-9|.]/g).join(''));
                  const randomTPG = parseFloat(document.getElementsByClassName("stats-paragraph right TPG")[0].textContent.match(/[0-9|.]/g).join(''));
                  statsArrayRandom.push(randomPPG, randomTSP, randomAPG, randomRPG, randomBPG, randomSPG, randomTPG);
      
                 
                  const statsArrayRandomTwo = [];
                  const randomTwoPPG = parseFloat(document.getElementsByClassName("stats-paragraph left PPG")[1].textContent.match(/[0-9|.]/g).join('')); 
                  const randomTwoTSP = parseFloat(document.getElementsByClassName("stats-paragraph left TSP")[1].textContent.match(/[0-9|.]/g).join(''));  
                  const randomTwoAPG = parseFloat(document.getElementsByClassName("stats-paragraph left APG")[1].textContent.match(/[0-9|.]/g).join(''));
                  const randomTwoRPG = parseFloat(document.getElementsByClassName("stats-paragraph left RPG")[1].textContent.match(/[0-9|.]/g).join(''));
                  const randomTwoBPG = parseFloat(document.getElementsByClassName("stats-paragraph right BPG")[1].textContent.match(/[0-9|.]/g).join(''));
                  const randomTwoSPG = parseFloat(document.getElementsByClassName("stats-paragraph right SPG")[1].textContent.match(/[0-9|.]/g).join(''));
                  const randomTwoTPG = parseFloat(document.getElementsByClassName("stats-paragraph right TPG")[1].textContent.match(/[0-9|.]/g).join(''));
                  statsArrayRandomTwo.push(randomTwoPPG, randomTwoTSP, randomTwoAPG, randomTwoRPG, randomTwoBPG, randomTwoSPG, randomTwoTPG);
      
                  const randomStat = Math.floor(Math.random() * statsArrayRandom.length); 
                 

                  let playerOne = document.getElementsByClassName("name-container")[0].childNodes[0].textContent;
                  let playerTwo = document.getElementsByClassName("name-container")[1].childNodes[0].textContent;

                  
                  if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      // this.setState({countLeft: +1}); causes to rerender :(
                      (() => {
                      
                          let ppg =  document.getElementsByClassName("stats-paragraph left PPG"); 
                          
                          for (const p of ppg) {
                              p.classList.add("animation");
                            }
                          
                      })();
           
                      alert(playerOne + " gets by " + playerTwo + " for the bucket!");
                    
                      
                  } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      // this.setState({countRight: +1});
                      (() => {
                          
                          let ppg =  document.getElementsByClassName("stats-paragraph left PPG");
                
                          for (const p of ppg) {
                              p.classList.add("animation");
                            }
      
                      })();
                      
                      alert(playerTwo + " gets by " + playerOne + " for the bucket!");
                      
      
                  } else if (randomStat === 1 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                          //started keeping variable names same when copying and pastying since local scope 
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " is money!");
                      
      
                  } else if (randomStat === 1 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
                      alert(playerTwo + " is money!");
                      
      
                  } else if (randomStat === 2 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " makes " + playerTwo + "'s head spin with the dime!");
                      
      
                  } else if (randomStat === 2 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
                      alert(playerTwo + " makes " + playerOne + "'s head spin with the dime!");
                      
                  } else if (randomStat === 3 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " secures the rebound!");
                     
      
                  } else if (randomStat === 3 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
                      alert(playerTwo + " secures the rebound!");
                      
      
                  } else if (randomStat === 4 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
                          
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " swats " + playerTwo + "!");
                      
      
                  } else if (randomStat === 4 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerTwo + " swats " + playerOne + "!");
                     
      
                  } else if (randomStat === 5 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " picks " + playerTwo + "'s pocket!");
                      
      
                  } else if (randomStat === 5 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
            
                      alert(playerTwo + " picks " + playerOne + "'s pocket!");
                      
      
                  } else if (randomStat === 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " turns the ball over... that's embarrassing");
                      
      
                  } else if (randomStat === 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      alert(playerOne + " turns the ball over... that's embarrassing");
                      
      
                  }
      
            //   }
             
      // below gonna end up going with alert click probably============
        // let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
        // (function _removeClasses() {
        //   for (var i = 0; i < statsParagraphElements.length; i++) {
        //     statsParagraphElements[i].classList.remove('animation')
        //   }
        // }());
      }

      render() {
        console.log("app render");
        // document.getElementsByClassName("name-container").length > 0;
        
        
        
    


        if (!this.state.data) {
          return  <div className="loading-container" id="test"> 
                    <p className="loading-text">Loading...</p>
                 </div>
      }
    
    
      // trying to get handlebball button to work to compare stats, just can't figure out how to compare since playercards props identical 
      //
        return (
          <div className="main-div" tabIndex='-1'> 
     
            <div className="basketball-container"> 
            <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
            </div>
            
          
            <div className="cards-container" tabIndex= "-1">
              
              
            <PlayerCard jordanKobe={this.state.data[0]} data={this.state.data} random={Math.floor(Math.random() * Images.length)} newPlayersOnAlert={this.newPlayersOnAlert} />
        
  
            <PlayerCard jordanKobe={this.state.data[40]} data={this.state.data} random={Math.floor(Math.random() * Images.length)} newPlayersOnAlert={this.newPlayersOnAlert} /> 
    
           
              
              </div>
    
           
          </div>
          
          
        )
        
        
      }
      

}

export default App;

