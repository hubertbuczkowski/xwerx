import React, { Component } from 'react';
import chart from "../assets/chart.png"
import filter from "../assets/filter.png"
import restore from "../assets/restore.png"
import settings from "../assets/settings.png"



var x=41;

class Footer extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div id="Footer" className="outer">
        <div id="Footer" className="seeMore">
          SEE MORE &#x25BC;
        </div>
        <div id="Footer" className="viewAll">
          VIEW ALL
        </div>
      </div>
    );
  }
}

export default Footer;
