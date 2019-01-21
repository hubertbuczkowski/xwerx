import React, { Component } from 'react';
import './style.css';

class IncOrDec extends Component {

  render() {
    var current = this.props.thisMonth;
    var previous = this.props.previousMonth;
    var arrow;
    var inc;
    if(current>previous)
    {
      arrow = String.fromCharCode(9650);
    }
    else {
      arrow = String.fromCharCode(9660);
    }
    var clients = current-previous;
    return (
      <td>
        <div >
          <div style={{height: '80px', width: '90px', position: 'relative'}}>
            <div className="arrow">{arrow}</div>
            <div className="active clients" >{clients}</div>
          </div>
        </div>
      </td>
    );
  }
}

export default IncOrDec;

// <td >
//   <table className="charts">
//     <tbody>
//       <tr>
//         <td><div className="arrow" style={{transform: 'rotate(90deg)'}}>&laquo;</div></td>
//       </tr>
//       <tr>
//         <td><div className="active">{clients}</div></td>
//       </tr>
//       <tr>
//         <td><div className="activeClients">{inc}</div></td>
//       </tr>
//     </tbody>
//   </table>
// </td>
