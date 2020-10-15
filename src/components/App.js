import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
import AlertMonitor from './ArenaMonitor';

//working on
//1.if stat PPG, even if not eqaul, saying equal -- right now it is comparing wrong stat 
//2. if same players, rere3nder
//1. alert component(?)
    // -- fade in and out with monitor
    //bball and monitor fade in similtaneously
        // add function that does both and then call it after stats compare if statement ============
//3. hide monitor on enter pressed
//* bball button disapear when alaert pops up 
//3. add alert for tie if stats the same 
//4. add something so random players cant be the same 
//5. areanmonitor scc to center to top 

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
            //testing below out with playerCard render
            bballNewPlayers: true   
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
         
        }); 
        console.log('mounted');
       
      }

      componentDidUpdate() {
          console.log("app updated");
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

        // document.getElementsByClassName('basketball')[0].style.display = "none";
        // this.hide(document.getElementsByClassName('customAlert')[0]);
        // document.getElementsByClassName('basketball')[0].classList.add("fade-out");
        // setTimeout(function(){
        //     document.getElementsByClassName('basketball')[0].style.display = 'none';
        //   }, 300);


        //====================================================
        // basketballButton.style.display = "none";
        monitor.classList.remove('fade-out');
          
       

          
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
                //   console.log(randomStat);
                ///messing around here====================
                //work up dom to find out what parent of number is?
                let test = statsArrayRandom[randomStat];
                console.log(test);

                  let playerOne = document.getElementsByClassName("name-container")[0].childNodes[0].textContent;
                  let playerTwo = document.getElementsByClassName("name-container")[1].childNodes[0].textContent;

                  if(statsArrayRandom[randomStat] === statsArrayRandomTwo[randomStat]) {
                      console.log(statsArrayRandom[randomStat]);
                    (() => {

                        //how get animation on matching stat classes? 
                        
                        let ppg =  document.getElementsByClassName("stats-paragraph left PPG");     
                        
                        for (const p of ppg) {
                            p.classList.add("animation");
                          }
                        
                    })();
         
                 //pass this down to ArenaMonitor?
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
                      
                         basketballButton.style.display = "none";
                         monitor.classList.add('fade-in');
                         setTimeout(function(){
                            monitor.style.display = 'inline';
                          }, 50); 
      
                  }
      
            //   }
             
      
            

      }

      hideMonitor = () => {
            
            this.setState( {
                jordanKobeInitial: this.state.jordanKobeInitial +1
            } );
            console.log(this.state.jordanKobeInitial);

            //trying to get monitor to fade in / fade out==================
        //     document.getElementsByClassName('customAlert')[0].classList.add("fade-out");
        //     setTimeout(function(){
        //     document.getElementsByClassName('customAlert')[0].style.display = 'none';
        //   }, 300);

        //   document.getElementsByClassName('basketball')[0].classList.add("fade-in");
        //     setTimeout(function(){
        //     document.getElementsByClassName('customAlert')[0].style.display = 'none';
        //   }, 300);
          



            // below to remove yellow animation on confirmButton click 
        let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
        (function _removeClasses() {
          for (var i = 0; i < statsParagraphElements.length; i++) {
            statsParagraphElements[i].classList.remove('animation')
          }
        }());

        //fade arenaMonitor out
        let monitor = document.getElementsByClassName('customAlert')[0];
        let basketballButton = document.getElementsByClassName('basketball')[0];

        monitor.classList.add('fade-out');
        basketballButton.classList.remove('fade-out');
        basketballButton.classList.add('fade-in');
        setTimeout(function(){
            monitor.style.display = 'none';
            basketballButton.style.display = 'block';
          }, 100); 



        //fade bball button back in
        

       
        // setTimeout(function(){
            
        //   }, 300);

    
    }

      render() {
        console.log("app render");
        // document.getElementsByClassName("name-container").length > 0;
        
        
        
    


        if (!this.state.data) {
          return  <div className="loading-container" id="test"> 
                    <p className="loading-text">Loading...</p>
                 </div>
      }
    
        return (
          <div className="main-div" tabIndex='-1'> 
     
            <div className="basketball-container"> 
            <img className="basketball" src={BasketballButton} onClick={this.handleBasketballButton } alt="click this basketball button to get a new matchup"/>
            </div>
            
          
            <div className="cards-container" tabIndex= "-1">
              
              
            <PlayerCard jordanKobe={this.state.data[0]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers} />
        
  
            <PlayerCard jordanKobe={this.state.data[40]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers} /> 
    
           
              
              </div>
        
              <AlertMonitor message={this.state.message} countLeft={this.state.countLeft} countRight={this.state.countRight} hideMonitor={this.hideMonitor}/>

          </div>
         
          
        )
        
        
      }
      

}

export default App;

