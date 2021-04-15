import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import LoadingSpinner from "../assets/images/spinning-bball.gif";
import BasketballButtonStart from "../assets/images/basketball-button-start-game.png";
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
import AlertMonitor from './ArenaMonitor';
import Winner from "./Winner";
import Loser from "./Loser";
import Info from "./Info";




let message;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            jordanKobeInitial : 0,
            message: "",
            countLeft: 0,
            countRight: 0,
            bballNewPlayers: true, //for jordanKobe
            samePlayers: false,
            isLoading: true  
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
      
         self.setState({ data: Images }); // do I need this with refig???????? YES
         
        }); 
       
      }

      componentDidUpdate() {

          let playerOneName = document.getElementsByClassName("name-container")[0].childNodes[0].textContent;
          let playerTwoName = document.getElementsByClassName("name-container")[1].childNodes[0].textContent;
          let playerOneYear = document.getElementsByClassName("year")[0].childNodes[0].textContent;
          let playerTwoYear = document.getElementsByClassName("year")[1].childNodes[0].textContent;

         
          //I think below is working so playes not the same?? no, this is infinite looping 
          if(playerOneName === playerTwoName && playerOneYear === playerTwoYear) {
            if(playerOneName === playerTwoName && playerOneYear === playerTwoYear) {
              this.setState({ samePlayers: true }, () => {
                setTimeout(() => { this.setState({ samePlayers: false }); console.log("testing player match", this.state.samePlayers) }, 200);
              })
        };
            console.log("same same", playerOneName, playerOneYear, playerTwoName, playerTwoYear);
          }
      }
      
    


      handleBasketballButton =  () => {

        // get playerCard to rerender only if monotir clicked after first bball click
        if ( this.state.jordanKobeInitial < 1 ) {
            this.setState( {bballNewPlayers: false,
                jordanKobeInitial: this.state.jordanKobeInitial +1
            } );
            return;
        }

        if (this.state.bballNewPlayers == false) {
            this.setState( {bballNewPlayers: true,
            } );
        }

        //working on this with hide/show============== trying to figure out timing better 
        let monitor = document.getElementsByClassName('customAlert')[0];
        let basketballButton = document.getElementsByClassName('basketball')[0];

        //winner and loser comps when hit 10
        let winner = document.getElementsByClassName('winnerComponent')[0];
        let loser = document.getElementsByClassName('loser-component')[0];



        monitor.classList.remove('fade-out');
          
       
                  
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

                  if(statsArrayRandom[randomStat] === statsArrayRandomTwo[randomStat]) {
                      // below arr is to get the two different "stats-paragraph"[randomStat] nodes
                      let arr = [document.getElementsByClassName("stats-paragraph")[randomStat], document.getElementsByClassName("stats-paragraph")[randomStat + 7]];
                    (() => {

                        
                        for (const a of arr) {
                            a.classList.add("animation");
                          }
                        
                    })();
         
                 
                  this.setState( { 
                      message: "Neither player gains the advantage: Jump Ball!",
                   } );



                   basketballButton.style.display = "none";
                   monitor.classList.add('fade-in');
                   setTimeout(function(){
                    monitor.style.display = 'inline';
                  }, 50); 
                  
                    
                } else if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      
                      (() => {
                      
                          let ppg =  document.getElementsByClassName("stats-paragraph left PPG"); 
                          
                          for (const p of ppg) {
                              p.classList.add("animation");
                            }
                          
                      })();
           
                   //pass this down to ArenaMonitor?
                    this.setState( { 
                        message: playerOne + " gets by " + playerTwo + " for the bucket!",
                        countLeft: this.state.countLeft + 1
                     } );

                     setTimeout(() => {
                      if (this.state.countLeft === 10) {
                        winner.style.display = "block";
                        this.setState( { message: "YOU WIN!!!"} );
                     }
                     }, 1000);
                     

                     basketballButton.style.display = "none";
                     monitor.classList.add('fade-in');
                     setTimeout(function(){
                        monitor.style.display = 'inline';
                      }, 50);                     
                      
                  } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      // this.setState({countRight: +1});
                      (() => {
                          
                          let ppg =  document.getElementsByClassName("stats-paragraph left PPG");
                
                          for (const p of ppg) {
                              p.classList.add("animation");
                            }
      
                      })();
                      
                    
                    this.setState( { 
                        message : playerTwo + " gets by " + playerOne + " for the bucket!",
                        countRight: this.state.countRight + 1
                     } );

                     setTimeout(() => {
                      if (this.state.countRight === 10) {
                        loser.style.display = "block";
                        this.setState( { message: "YOU LOSE"} );
                     }
                     }, 1000);

                    
                     basketballButton.style.display = "none";
                     monitor.classList.add('fade-in');
                     setTimeout(function(){
                        monitor.style.display = 'inline';
                      }, 50); 
                           
                  } else if (randomStat === 1 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                          //started keeping variable names same when copying and pastying since local scope 
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      

                      this.setState( { 
                          message : playerOne + " is money!",
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);

                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
                        
                  } else if (randomStat === 1 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
        
                    this.setState( { 
                        message : playerTwo + " is money!",
                        countRight: this.state.countRight + 1
                    } );

                    setTimeout(() => {
                      if (this.state.countRight === 10) {
                        loser.style.display = "block";
                        this.setState( { message: "YOU LOSE"} );
                     }
                     }, 1000);

                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');  
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50);                     
      
                  } else if (randomStat === 2 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      
                      
                      this.setState( {
                          message : playerOne + " makes " + playerTwo + "'s head spin with the dime!",
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);

                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 2 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
                      this.setState( {
                          message : playerTwo + " makes " + playerOne + "'s head spin with the dime!",
                          countRight: this.state.countRight + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countRight === 10) {
                            loser.style.display = "block";
                            this.setState( { message: "YOU LOSE"} );
                         }
                         }, 1000);
                      
                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
                      
                  } else if (randomStat === 3 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( { 
                          message : playerOne + " secures the rebound!" ,
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);
                      
                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
                     
                  } else if (randomStat === 3 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
                          for (const t of tsp) {
                              t.classList.add("animation");
                            }
                          
                      })();
                     
                      
                      this.setState( { 
                          message : playerTwo + " secures the rebound!",
                          countRight: this.state.countRight + 1
                         } );

                         setTimeout(() => {
                          if (this.state.countRight === 10) {
                            loser.style.display = "block";
                            this.setState( { message: "YOU LOSE"} );
                         }
                         }, 1000);
                      
                         basketballButton.style.display = "none";
                         monitor.classList.add('fade-in');
                         setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 4 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
                          
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( { 
                          message : playerOne + " swats " + playerTwo + "!",
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);

                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
                      
      
                  } else if (randomStat === 4 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( {  
                          message : playerTwo + " swats " + playerOne + "!",
                          countRight: this.state.countRight + 1
                         } );

                         setTimeout(() => {
                          if (this.state.countRight === 10) {
                            loser.style.display = "block";
                            this.setState( { message: "YOU LOSE"} );
                         }
                         }, 1000);
                     
                         basketballButton.style.display = "none";
                         monitor.classList.add('fade-in');
                         setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 5 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( {  
                          message : playerOne + " picks " + playerTwo + "'s pocket!" ,
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);

                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 5 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
            
                      this.setState( {  
                          message : playerTwo + " picks " + playerOne + "'s pocket!",
                          countRight: this.state.countRight + 1
                         } );

                         setTimeout(() => {
                          if (this.state.countRight === 10) {
                            loser.style.display = "block";
                            this.setState( { message: "YOU LOSE"} );
                         }
                         }, 1000);

                         basketballButton.style.display = "none";
                         monitor.classList.add('fade-in');
                         setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( {  
                          message : playerTwo + " turns the ball over... that's embarrassing" ,
                          countLeft: this.state.countLeft + 1
                        } );

                        setTimeout(() => {
                          if (this.state.countLeft === 10) {
                            winner.style.display = "block";
                            this.setState( { message: "YOU WIN!!!"} );
                         }
                         }, 1000);
                      
                        basketballButton.style.display = "none";
                        monitor.classList.add('fade-in');
                        setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  } else if (randomStat === 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      (() => {
                          let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
                          for (const b of bpg) {
                              b.classList.add("animation");
                            }
                          
                      })();
                      
                      this.setState( {  
                          message : playerOne + " turns the ball over... that's embarrassing",
                          countRight: this.state.countRight + 1
                         } );

                         setTimeout(() => {
                          if (this.state.countRight === 10) {
                            loser.style.display = "block";
                            this.setState( { message: "YOU LOSE"} );
                         }
                         }, 1000);
                      
                         basketballButton.style.display = "none";
                         monitor.classList.add('fade-in');
                         setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  }
      }





      hideMonitor = () => {

        let monitor = document.getElementsByClassName('customAlert')[0];
        let basketballButton = document.getElementsByClassName('basketball')[0];

           
        if(this.state.countLeft >= 10 || this.state.countRight >=10) {

           this.setState( {jordanKobeInitial : 0} );
              
          basketballButton.classList.remove('fade-out');
          basketballButton.classList.add('fade-in');
          setTimeout(function(){
              monitor.style.display = 'none';
              basketballButton.style.display = 'block';
            }, ); 
            } 
           
            
            
            else {
              
              this.setState( {
                  jordanKobeInitial: this.state.jordanKobeInitial +1
              } );
           
              // below to remove yellow animation on confirmButton click 
          let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
          (function _removeClasses() {
            for (var i = 0; i < statsParagraphElements.length; i++) {
              statsParagraphElements[i].classList.remove('animation')
            }
          }());
  
          //fade arenaMonitor out
          
  
          monitor.classList.add('fade-out');
          basketballButton.classList.remove('fade-out');
          basketballButton.classList.add('fade-in');
          setTimeout(function(){
              monitor.style.display = 'none';
              basketballButton.style.display = 'block';
            }, 100); 
          //fade bball button back in
        
            }

        
    }



    playAgain = () => {

      let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
          (function _removeClasses() {
            for (var i = 0; i < statsParagraphElements.length; i++) {
              statsParagraphElements[i].classList.remove('animation')
            }
          }());

      this.setState( {
        
        jordanKobeInitial : 0,
        countLeft: 0,
        countRight: 0,
        bballNewPlayers: true, //for jordanKobe
        samePlayers: false  
       } );

       let winnerPopup = document.getElementsByClassName('winnerComponent')[0];
       winnerPopup.style.display = "none";

       let loserPopup = document.getElementsByClassName('loser-component')[0];
       loserPopup.style.display = "none";

       

       this.hideMonitor();


       let self = this; 

        //make it so ok button in arena monitor is clickable again when game resets
        let confirm = document.getElementsByClassName("confirmButton")[0];
        confirm.disabled = false;

    }



    closeInfo = () => {
      let info = document.getElementsByClassName("info-component")[0];
  
      info.style.display = "none";

    }



      render() {
        
    


        if (!this.state.data) {
          return  <div className="loading-container-background">
          <div className="loading-container"> 
          <div className="spinning-bball-container">
                <img className="spinning-bball" src={LoadingSpinner}/>
                </div>
                <p className="loading-text">Loading...</p>
             </div> 
        </div>
      }
    
      
        return (

          <div>

            <div className="loading-container-background">
              <div className="loading-container"> 
                <div className="spinning-bball-container">
                <img className="spinning-bball" src={LoadingSpinner}/>
                </div>
                    <p className="loading-text">Loading...</p>
                 </div> 
            </div>
             
            
            <div className="rotate-screen-please">
              <p className="rotate-please-para">Please rotate your device</p>
            </div>

          <div className="info-component">
          <Info closeInfo = {this.closeInfo}/>
            </div>

          <div className="winnerComponent">
            <Winner playAgain={this.playAgain} />
            </div>

          <div className='loser-component'>
            <Loser playAgain={this.playAgain} />
            </div>
            

          <div className="main-div" tabIndex='-1'> 
     
            <div className="basketball-container"> 
            <img className="basketball" src={this.state.jordanKobeInitial < 1 ? BasketballButtonStart : BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
            </div>
            
          
            <div className="cards-container" tabIndex= "-1">
              
              
            <PlayerCard samePlayers={this.state.samePlayers} jordanKobe={this.state.data[0]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers} countLeft={this.state.countLeft} countRight={this.state.countRight} />
        
  
            <PlayerCard samePlayers={this.state.samePlayers} jordanKobe={this.state.data[40]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers} countLeft={this.state.countLeft} countRight={this.state.countRight} /> 
    
           
              
              </div>
        
              
              <AlertMonitor message={this.state.message} countLeft={this.state.countLeft} countRight={this.state.countRight} hideMonitor={this.hideMonitor}/>
             

          </div>

          </div>
         
          
        )
      
       
        
        
      }
      

}

export default App;

