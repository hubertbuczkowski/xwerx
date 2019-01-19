import React, { Component } from 'react';
import chart from "../assets/chart.png"
import filter from "../assets/filter.png"
import restore from "../assets/restore.png"
import settings from "../assets/settings.png"



var x=41;

class Header extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <tr style={{border:'0'}}>
        <td colSpan="2" style={{verticalAlign: 'top', padding:0}}>
          <div style={{margin:"10px", padding: "22px 15px", height: "35px", }}>
            <b>Alerts</b> Latest alerts({x})
          </div>
        </td>
        <td colSpan="3" style={{padding:"0 0 0 0"}}>
          <div className="outerHeader">
            <table>
              <tbody>
                <tr style={{border: 0}}>
                  <td><img className="headerImg" src={chart} alt="chart"/></td>
                  <td><img className="headerImg" src={filter} alt="filter"/></td>
                  <td><img className="headerImg" src={restore} alt="restore"/></td>
                  <td><img className="headerImg" src={settings} alt="settings"/></td>
                  <td><div className="save">SAVE &#x25BC;</div></td>
                  </tr>
                  <tr style={{border: 0}}>
                  <td colSpan="5" style={{ textAlign:'right', padding: "0 15px 0 0px"}}><div>IMPORTANCE &#x25BC;</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    );
  }
}

export default Header;
