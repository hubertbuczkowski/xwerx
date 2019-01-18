import React, { Component } from 'react';
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import './style.css'

function createRow(row){
  // console.log(row)
  return <Row key={row.id} rowData={row} />
}

function empty(){
  return (
    <tr><td>
      There is no data
    </td></tr>
  )
}

function createTable(data){
  var arr = [];
  if(data == null)
  {
    return empty()
  }
  data.forEach(x => {
    arr.push(createRow(x))
  })
  return arr;
}

class Table extends Component {

    componentWillMount() {

    }

  render() {
    return (
      <table>
      <tbody>
        <Header/>
        {createTable(this.props.data)}
        <Footer/>
      </tbody>
      </table>
    );
  }
}

export default Table;
