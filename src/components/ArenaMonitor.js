import React from 'react';
import './ArenaMonitor.css';
class ArenaMonitor extends React.Component {



   
    render () {
        
        //to disable ok button so user can't click when game over / count reaches 10
        let confirm = document.getElementsByClassName("confirmButton")[0];

        return (
            
            <div className="customAlert" style={{backgroundImage: `url(${require("../assets/images/nba-scoreboard.png")})`}}>
    <div className="message-container"> 
         <p className='message'>{this.props.message}</p>  
    </div>

   
  <input type='button' className='confirmButton' onClick={this.props.countLeft >= 10 || this.props.countRight >=10 ? confirm.disabled = true :  this.props.hideMonitor } />
  
  {/* //come back to this */}
        <div className="score-left">{this.props.countLeft}</div>
        <div className="score-right">{this.props.countRight}</div>
    
</div>



        ) 
    }
}

export default ArenaMonitor;