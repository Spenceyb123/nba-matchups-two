import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButtonStart from "../assets/images/basketball-button-start-game.png";
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
import AlertMonitor from './ArenaMonitor';
import Winner from "./Winner";
import Loser from "./Loser";


//working on
//playerCArd line 23 messing with jordan kobe in hideMonitor and playAgain, to get so that set at 0, and resets cards
  //after playAgain clicked 

//1. alert component(?)
    // -- fade in and out with monitor
    //bball and monitor fade in similtaneously
        // add function that does both and then call it after stats compare if statement ============
//3. hide monitor on enter pressed
//6. have jumb ball button say "start" initilly (?)

let message;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            jordanKobeInitial : 0,
            message: "",
            countLeft: 0,
            countRight: 9,
            bballNewPlayers: true, //for jordanKobe
            samePlayers: false  
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
        console.log('mounted');
       
      }

      componentDidUpdate() {
          console.log("app updated");
          console.log("jordanKobe compDidUpdate: " + this.state.jordanKobeInitial);

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
      
      //trying to get this and eventuall show to work============
      hide = function (elem) {

        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + 'px';
    
        // Set the height back to 0
        window.setTimeout(function () {
            elem.style.height = '0';
        }, 1);
    
        // When the transition is complete, hide it
        window.setTimeout(function () {
            elem.classList.remove('is-visible');
        }, 350);
    
    };
    


      handleBasketballButton =  () => {
        console.log(this.state.countLeft);

        //testing below...
        if(this.state.countLeft >= 10) {
          console.log("bball clicked, count more than 10", document.getElementsByClassName("confirmButton")[0]);
          // document.getElementsByClassName("confirmButton").disabled = true; 
           } 
        //... 

        // get playerCard to rerender only if monotir clicked after first bball click
        if ( this.state.jordanKobeInitial < 1 ) {
            this.setState( {bballNewPlayers: false,
                jordanKobeInitial: this.state.jordanKobeInitial +1
            } );
            return;
        }

        console.log("jordanKobe handleBball: " + this.state.jordanKobeInitial);

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

                        console.log(arr);
                        
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

        console.log("hide monitor started");
        let monitor = document.getElementsByClassName('customAlert')[0];
        let basketballButton = document.getElementsByClassName('basketball')[0];

            //experimenting below...
        if(this.state.countLeft >= 10 || this.state.countRight >=10) {

           this.setState( {jordanKobeInitial : 0} );
              
          // monitor.classList.add('fade-out');
          basketballButton.classList.remove('fade-out');
          basketballButton.classList.add('fade-in');
          setTimeout(function(){
              monitor.style.display = 'none';
              basketballButton.style.display = 'block';
            }, ); 
              console.log("score left 10, jordanKobe should be set to 0"); 
              console.log("jordanKobe count left 10: " + this.state.jordanKobeInitial);
            } 
            //experimnting above
            
            
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
        
  
          console.log("jordanKobe hideMonitor: " + this.state.jordanKobeInitial);
          console.log("end of hide monitor function")
            }

            
            
//figuring out call stack 
        
    }



    playAgain = () => {
      console.log("play again clicked");

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

       console.log("play again clicked, jordanKobe should be set to 0"); 
       console.log("jordanKobe count at beg playAgain: " + this.state.jordanKobeInitial);
       console.log("count left after playagain clicked: " + this.state.countLeft);

       let winnerPopup = document.getElementsByClassName('winnerComponent')[0];
       winnerPopup.style.display = "none";

       let loserPopup = document.getElementsByClassName('loser-component')[0];
       loserPopup.style.display = "none";

       

       this.hideMonitor();


       console.log("jordanKobe at end playAgain: " + this.state.jordanKobeInitial);
      
       let self = this; 
       console.log("count left right before setTimout: " + self.state.countLeft);


       setTimeout(function(){ 
        console.log("count left after playagain clicked with setTimout: " + self.state.countLeft);
        }, );

        console.log("count left right after setTimout: " + self.state.countLeft);

        //make it so ok button in arena monitor is clickable again when game resets
        let confirm = document.getElementsByClassName("confirmButton")[0];
        confirm.disabled = false;

       

    }

      render() {
        console.log("app render");
        
    


        if (!this.state.data) {
          return  <div className="loading-container" id="test"> 
                    <p className="loading-text">Loading...</p>
                 </div>
      }
    
        return (
          <div>
            <div className="rotate-screen-please">
              <p className="rotate-please-para">Please rotate your device</p>
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

