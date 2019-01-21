import React, { Component } from 'react';
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import './style.css'

function createRow(row){
  return <Row key={row.id} rowData={row} />
}

function empty(){
  return (
    <tr><td>
      There is no data
    </td></tr>
  )
}

function createTable(data, from, to){
  var arr = [];
  if(data == null){
    return empty()
  }
  if(to > 0){
    for(var i = from; i<=to; i++){
      arr.push(createRow(data[i]))
    }
  }
  else{
    data.forEach(x => {
      arr.push(createRow(x))
    })
  }
  return arr;
}

class Table extends Component {

    componentWillMount() {

    }

  render() {
    return (
      <div className='container'>
        <table>
          <tbody>
            <Header/>
            {createTable(this.props.data, 0, 4)}
          </tbody>
        </table>
        <Footer/>

      </div>

    );
  }
}

export default Table;
