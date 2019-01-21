import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

class Chart extends Component {

  render() {
    var date = new Date(2019, 0);
    var data = this.props.data;
    var total = this.props.total;

    //calculate percents for
    var p1 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p2 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p3 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p4 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p5 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p6 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p7 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p8 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p9 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p10 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p11 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)
    var p12 = data[("0"+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()]
    date.setMonth(date.getMonth()-1)

    return (
      <td >
        <table id="charts" className="charts">
          <tbody>
            <tr>
              <td><ProgressBar progress={p1/total*100}/></td>
              <td><ProgressBar progress={p2/total*100}/></td>
              <td><ProgressBar progress={p3/total*100}/></td>
              <td><ProgressBar progress={p4/total*100}/></td>
              <td><ProgressBar progress={p5/total*100}/></td>
              <td><ProgressBar progress={p6/total*100}/></td>
              <td><ProgressBar progress={p7/total*100}/></td>
              <td><ProgressBar progress={p8/total*100}/></td>
              <td><ProgressBar progress={p9/total*100}/></td>
              <td><ProgressBar progress={p10/total*100}/></td>
              <td><ProgressBar progress={p11/total*100}/></td>
              <td><ProgressBar progress={p12/total*100}/></td>
            </tr>
          </tbody>
        </table>
      </td>
    );
  }
}

export default Chart;
