import React, { Component } from 'react';
import Semicircular from './Semicircular';
import Chart from './Chart';
import IncOrDec from './IncOrDec';
import './style.css';

class Main extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div className="main">
        <div className="top">
        </div>
        <div>
          <table className="charts" >
            <tbody>
              <tr>
                <Semicircular/>
                <Chart/>
                <IncOrDec/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
