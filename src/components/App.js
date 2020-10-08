import React from 'react';
import './App.css';
import * as d3 from 'd3';
import importedCsvData from '../assets/players.csv';
import Images from'../Images';
import BasketballButton from "../assets/images/basketball-button.png";
import PlayerCard from './PlayerCard';

//working on
//1. parseFloat to get text content as integer 
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

        //below line working to convert stat to number to be compared================
        console.log(parseFloat(document.getElementsByClassName("stats-paragraph left PPG")[1].textContent.match(/[0-9|.]/g).join('')));

        console.log(parseFloat(document.getElementsByClassName("stats-paragraph left PPG")[1].textContent));
        // const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
        // document.getElementsByClassName("name-container").value; // pending....

          
    //     if (random === randomTwo) { //so that won't be same two players 
    //       random = Math.floor(Math.random() * Images.length); 
    //       randomTwo = Math.floor(Math.random() * Images.length);
    //     } 
          
           
    //           if(random !== undefined || randomTwo !== undefined){
                  
    //               const statsArrayRandom = [];
    //               const randomPPG = this.state.data[random].PTS;
    //               const randomTSP = this.state.data[random].TSP;
    //               const randomAPG = this.state.data[random].AST;
    //               const randomRPG = this.state.data[random].TRB;
    //               const randomBPG = this.state.data[random].BLK;
    //               const randomSPG = this.state.data[random].STL;
    //               const randomTPG = this.state.data[random].TOV;
    //               statsArrayRandom.push(randomPPG, randomTSP, randomAPG, randomRPG, randomBPG, randomSPG, randomTPG);
      
    //               const statsArrayRandomTwo = [];
    //               const randomTwoPPG = this.state.data[randomTwo].PTS;
    //               const randomTwoTSP = this.state.data[randomTwo].TSP;
    //               const randomTwoAPG = this.state.data[randomTwo].AST;
    //               const randomTwoRPG = this.state.data[randomTwo].TRB;
    //               const randomTwoBPG = this.state.data[randomTwo].BLK;
    //               const randomTwoSPG = this.state.data[randomTwo].STL;
    //               const randomTwoTPG = this.state.data[randomTwo].TOV;
    //               statsArrayRandomTwo.push(randomTwoPPG, randomTwoTSP, randomTwoAPG, randomTwoRPG, randomTwoBPG, randomTwoSPG, randomTwoTPG);
      
    //               const randomStat = Math.floor(Math.random() * statsArrayRandom.length);
                  
    //               // console.log(statsArrayRandom, statsArrayRandomTwo);
                 
      
    //               if(randomStat === 0 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   // this.setState({countLeft: +1}); causes to rerender :(
    //                   (() => {
                      
    //                       let ppg =  document.getElementsByClassName("stats-paragraph left PPG"); 
                          
    //                       for (const p of ppg) {
    //                           p.classList.add("animation");
    //                         }
                          
    //                   })();
           
    //                   alert(random.Player + " gets by " + randomTwo.Player + " for the bucket!");
                    
                      
    //               } else if (randomStat === 0 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   // this.setState({countRight: +1});
    //                   (() => {
                          
    //                       let ppg =  document.getElementsByClassName("stats-paragraph left PPG");
                
    //                       for (const p of ppg) {
    //                           p.classList.add("animation");
    //                         }
      
    //                   })();
                      
    //                   alert(randomTwo.Player + " gets by " + random.Player + " for the bucket!");
                      
      
    //               } else if (randomStat === 1 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
    //                       //started keeping variable names same when copying and pastying since local scope 
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " is money!");
                      
      
    //               } else if (randomStat === 1 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left TSP");
                          
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                     
    //                   alert(randomTwo.Player + " is money!");
                      
      
    //               } else if (randomStat === 2 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " makes " + randomTwo.Player + "'s head spin with the dime!");
                      
      
    //               } else if (randomStat === 2 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left APG");
                          
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                     
    //                   alert(randomTwo.Player + " makes " + random.Player + "'s head spin with the dime!");
                      
    //               } else if (randomStat === 3 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " secures the rebound!");
                     
      
    //               } else if (randomStat === 3 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let tsp =  document.getElementsByClassName("stats-paragraph left RPG");
                          
    //                       for (const t of tsp) {
    //                           t.classList.add("animation");
    //                         }
                          
    //                   })();
                     
    //                   alert(randomTwo.Player + " secures the rebound!");
                      
      
    //               } else if (randomStat === 4 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
                          
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " swats " + randomTwo.Player + "!");
                      
      
    //               } else if (randomStat === 4 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right BPG");
      
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(randomTwo.Player + " swats " + random.Player + "!");
                     
      
    //               } else if (randomStat === 5 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " picks " + randomTwo.Player + "'s pocket!");
                      
      
    //               } else if (randomStat === 5 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right SPG");
      
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
            
    //                   alert(randomTwo.Player + " picks " + random.Player + "'s pocket!");
                      
      
    //               } else if (randomStat === 6 && statsArrayRandom[randomStat] < statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(randomTwo.Player + " turns the ball over... that's embarrassing");
                      
      
    //               } else if (randomStat === 6 && statsArrayRandom[randomStat] > statsArrayRandomTwo[randomStat]) {
    //                   (() => {
    //                       let bpg =  document.getElementsByClassName("stats-paragraph right TPG");
      
    //                       for (const b of bpg) {
    //                           b.classList.add("animation");
    //                         }
                          
    //                   })();
                      
    //                   alert(random.Player + " turns the ball over... that's embarrassing");
                      
      
    //               }
      
    //           }
             
      
    //     // let statsParagraphElements = document.querySelectorAll(".stats-paragraph");
    //     // (function _removeClasses() {
    //     //   for (var i = 0; i < statsParagraphElements.length; i++) {
    //     //     statsParagraphElements[i].classList.remove('animation')
    //     //   }
    //     // }());
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

