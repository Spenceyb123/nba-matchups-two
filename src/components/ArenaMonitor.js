import React from 'react';
import './ArenaMonitor.css';
class ArenaMonitor extends React.Component {

   
    render () {
        //come back to this message? =====================
        console.log(this.props.message);
        return (
            
            <div className="customAlert"  >
    <div className="message-container"> 
         <p className='message'>{this.props.message}</p>  
    </div>

   
  <input type='button' className='confirmButton' onClick={this.props.hideMonitor} />
  {/* onClick={this.customAlertHandle.handleClick} onKeyPress={(event) => this.customAlertHandle.handleKeyPress(event)} */}
  
  {/* //come back to this */}
        <div className="score-left">{this.props.countLeft}</div>
        <div className="score-right">{this.props.countRight}</div>
    
</div>



        ) 
    }
}

export default ArenaMonitor;