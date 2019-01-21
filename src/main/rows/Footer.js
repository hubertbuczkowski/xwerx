import React, { Component } from 'react';

class Footer extends Component {

  footer = (props) => ([<div id="Footer" className="seeMore" onClick={() => props.append()}>
    SEE MORE &#x25BC;
  </div>,
  <div id="Footer" className="viewAll" onClick={() => props.showAll()}>
    VIEW ALL
  </div>])

  componentDidMount(){
  }

  render() {
    return (
      <div id="Footer" className="outer">
      {this.props.show ? this.footer(this.props) : null}


      </div>
    );
  }
}

export default Footer;
