import React, { Component } from 'react';
import './style.css';


var inc = "Increase"


var clients = 203;
var total = 250;

class IncOrDec extends Component {

  render() {
    return (
      <td>
        <div >
          <div style={{height: '80px', width: '90px', position: 'relative'}}>
            <div className="arrow">&#9650;</div>
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
