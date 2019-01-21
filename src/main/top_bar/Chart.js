import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

var clients = 203;
var total = 250;

class Chart extends Component {

  render() {
    return (
      <td >
        <table id="charts" className="charts">
          <tbody>
            <tr>
              <td><ProgressBar progress={10}/></td>
              <td><ProgressBar progress={20}/></td>
              <td><ProgressBar progress={30}/></td>
              <td><ProgressBar progress={40}/></td>
              <td><ProgressBar progress={50}/></td>
              <td><ProgressBar progress={60}/></td>
              <td><ProgressBar progress={40}/></td>
              <td><ProgressBar progress={50}/></td>
              <td><ProgressBar progress={60}/></td>
              <td><ProgressBar progress={70}/></td>
              <td><ProgressBar progress={80}/></td>
              <td><ProgressBar progress={90}/></td>
            </tr>
          </tbody>
        </table>
      </td>
    );
  }
}

export default Chart;
