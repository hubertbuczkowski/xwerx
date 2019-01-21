import React, { Component } from 'react';
import Semicircular from './Semicircular';
import Chart from './Chart';
import IncOrDec from './IncOrDec';
import Header from './Header';
import './style.css';

class Main extends Component {

  state = {months: {}}

  componentDidMount(){
    var data = this.props.data;
    data = data.map(x => {
      var ret;
      ret = x.date.substr(3, 7)
      return ret
    })
    data = data.reduce(function (a, b) {
        a[b] = a[b] || 0;
        a[b] = a[b]+1;
        return a;
    }, Object.create(null));
    this.setState({months: data})
  }

  render() {
    var data = this.state.months;
    var total = this.props.data.length;
    //to show current values delete "2019. 0"
    var date = new Date(2019, 0);
    var thisMonth = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var previousMonth = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    var inc;

    if(thisMonth>previousMonth)
    {
      inc = "INCREASE";
    }
    else {
      inc = "DECEREASE";
    }

    return (
      <div className="main container">
        <div >
        </div>
        <div>
          <table className="charts topChart" >
            <tbody>
                <Header />
              <tr>
                <Semicircular total={total} month={thisMonth}/>
                <Chart data={data} total={total}/>
                <IncOrDec thisMonth={thisMonth} previousMonth={previousMonth}/>
              </tr>
              <tr>
                <td className="activeClients">ACTIVE CLIENTS</td>
                <td className="activeClients">LAST 12 MONTHS</td>
                <td className="activeClients">{inc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
