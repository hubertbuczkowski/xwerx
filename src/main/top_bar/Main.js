import React, { Component } from 'react';
import Semicircular from './Semicircular';
import Chart from './Chart';
import IncOrDec from './IncOrDec';
import Header from './Header';
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
          <table className="charts topChart" >
            <tbody>

                <Header />
              <tr>
                <Semicircular/>
                <Chart/>
                <IncOrDec/>
              </tr>
              <tr>
                <td className="activeClients">ACTIVE CLIENTS</td>
                <td className="activeClients">LAST 12 MONTHS</td>
                <td className="activeClients">INCREASE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
