import React, { Component } from 'react';
import VerticalBars from './VerticalBars'
import cake from '../assets/cake.png'

var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

class Row extends Component {
  state = {date:[]}
  componentDidMount(){
    // console.log(new Date(this.props.rowData.date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")))
    this.setState({date: this.props.rowData.date.split('/')})
  }

  render() {
    return (
      <tr>
        <td><div className="button"><img className="buttonImg" src={cake} alt="cake"/></div></td>
        <td className="name">{this.props.rowData.first_name+" "+this.props.rowData.last_name}</td>
        <td>{this.props.rowData.first_name+'\'s End of Year review coming up'}</td>
        <td>{monthNames[this.state.date[1]-1] + " " + this.state.date[0]}</td>
        <VerticalBars bars={this.props.rowData.importance}/>
      </tr>
    );
  }
}

export default Row;
