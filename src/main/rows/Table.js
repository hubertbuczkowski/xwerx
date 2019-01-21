import React, { Component } from 'react';
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import {normalSort, reverseSort} from '../../App'
import './style.css'

function createRow(row){
  return <Row key={row.id} rowData={row} />
}

function empty(){
  return (
    <tr><td colSpan='5'>
      There is no data
    </td></tr>
  )
}

function createTable(data){
  var arr = [];
  if(data === null){
    return empty()
  }
    data.forEach(x => {
      arr.push(createRow(x))
    })
  return arr;
}

class Table extends Component {

  state = {rows: [],
          from: 0,
          to: 5,
          data: [],
          order: 'asc'};

  reverseOrder = () => {
    var order = this.state.order;
    var data = this.state.data;
    if(order === 'asc')
    {
      data.sort(reverseSort);
      order = 'desc'
    }
    else {
      data.sort(normalSort);
      order= 'asc'
    }
    this.setState({data: data, order: order, rows: createTable(data.slice(0, this.state.from))})
  }

  append = () => {
    var data = this.state.data;
    var from = this.state.from;
    var to = this.state.to;
    if(from < data.length-1)
    {
      if(to > data.length)
      {
        to = data.length;
      }
      this.setState({rows: this.state.rows.concat(createTable(data.slice(from, to))),
                      from: to, to: to+5})
    }
  }

  showAll = () => {
    var data = this.state.data;
    var from = this.state.from;
    var to = data.length;
    if(from < to-1)
    {
    this.setState({rows: this.state.rows.concat(createTable(data.slice(from, to))),
                  from: to, to: to})
    }
  }

  componentWillMount() {
    var data = this.props.data;
    var from = 0;
    var to = 5;
    this.setState({rows: createTable(data.slice(from, to)),
                  from: to, to: to+5, data: data})
  }

  render() {
    return (
      <div className='container'>
        <table>
          <tbody>
            <Header order={this.reverseOrder} ord={this.state.order}/>
            {this.state.rows}
          </tbody>
        </table>
        <Footer append={this.append} showAll={this.showAll} show={this.state.from < this.state.data.length}/>

      </div>

    );
  }
}

export default Table;
