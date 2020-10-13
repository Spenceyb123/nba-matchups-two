import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';
import AlertMonitor from './ArenaMonitor';

//working on
//1. why jump ball giving new players? setState? //should only due first time  
    //==set should component update??
//2. if same players, no longer getting new players???? why?????
//1. alert component(?)
    // -- fade in and out 
//2. clear yellow on stats when alert clicked (?) 
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


      handleBasketballButton =  () => {
          //!!!!!!!!!maybe add state that increments 1 so playercard doesn't rerender through the state pass down as props?????????
        
        //   if (this.state.jordanKobeInitial<1) {
        //       this.setState( {
        //           jordanKobeInitial : this.state.jordanKobeInitial  +1
        //       })
        //       return;
        //   }
        if ( this.state.jordanKobeInitial < 1 ) {
            this.setState( {bballNewPlayers: false,
                jordanKobeInitial: this.state.jordanKobeInitial +1
            } );
            return;
        }
          
       

          
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
                  console.log(randomStat);
                 

                  let playerOne = document.getElementsByClassName("name-container")[0].childNodes[0].textContent;
                  let playerTwo = document.getElementsByClassName("name-container")[1].childNodes[0].textContent;

                  
                  if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
                      
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

                     document.getElementsByClassName("customAlert")[0].style.display = "block";
                    
                      
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
                   
                     document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

                        document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

                    document.getElementsByClassName("customAlert")[0].style.display = "block";
                      
      
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

                        document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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
                      
                        document.getElementsByClassName("customAlert")[0].style.display = "block";
                      
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
                      
                        document.getElementsByClassName("customAlert")[0].style.display = "block";
                     
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
                      
                         document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

                        document.getElementsByClassName("customAlert")[0].style.display = "block";
                      
      
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
                     
                         document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

                        document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

                         document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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
                      
                        document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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
                      
                         document.getElementsByClassName("customAlert")[0].style.display = "block";
      
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

      hideMonitor = () => {
            console.log(document.getElementsByClassName("customAlert")[0].style.display);
            // document.getElementsByClassName("customAlert")[0].style.display = "none";
            document.getElementsByClassName("customAlert")[0].style.display = "none";
            

           
            // this.setState({ data: Images });
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
              
              
            <PlayerCard jordanKobe={this.state.data[0]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers}/>
        
  
            <PlayerCard jordanKobe={this.state.data[40]} jordanKobeInitial={this.state.jordanKobeInitial} data={this.state.data} random={Math.floor(Math.random() * Images.length)} bballNewPlayers={this.state.bballNewPlayers} /> 
    
           
              
              </div>
        
              <AlertMonitor message={this.state.message} countLeft={this.state.countLeft} countRight={this.state.countRight} hideMonitor={this.hideMonitor}/>

          </div>
         
          
        )
        
        
      }
      

}

export default App;

