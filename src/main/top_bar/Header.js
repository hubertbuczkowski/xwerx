import React, { Component } from 'react';
import settings from "../assets/settings.png"


class Header extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <tr>
        <td colSpan='2' className="clientsTop">CLIENTS &#9658;</td>
        <td><img className="headerImg top" src={settings} alt="settings"/></td>

      </tr>
    );
  }
}

export default Header;
