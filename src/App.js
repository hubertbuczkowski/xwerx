import React, { Component } from 'react';
import Table from './main/rows/Table';
import Main from './/main/top_bar/Main';

// async function getData(){
//   var data = "./main/assets/MOCK_DATA1.json"
//   return fetch(data);
// }

export function normalSort(a,b){
  //first sort by importance
  if (a.importance < b.importance) return -1;
  if (a.importance > b.importance) return 1;
  //then sort by date
  var aa = a.date.split('/').reverse().join();
  var bb = b.date.split('/').reverse().join();
  if (aa < bb) return 1;
  if (aa > bb) return -1;
  //at the end sort by name
  if (a.last_name < b.last_name) return -1;
  if (a.last_name > b.last_name) return 1;
  return 0;
}

export function reverseSort(a,b){
  //first sort by importance
  if (a.importance < b.importance) return 1;
  if (a.importance > b.importance) return -1;
  //then sort by date
  var aa = a.date.split('/').reverse().join();
  var bb = b.date.split('/').reverse().join();
  if (aa < bb) return 1;
  if (aa > bb) return -1;
  //at the end sort by name
  if (a.last_name < b.last_name) return -1;
  if (a.last_name > b.last_name) return 1;
  return 0;
}

class App extends Component {

    state = {data : {}}

    componentWillMount() {
      // fetch("./main/assets/MOCK_DATA1.json").then(data => console.log(data))
      var th = require("./main/assets/MOCK_DATA1.json");
      th.sort(normalSort);
      this.setState({data: th})
    }

  render() {
    return (
      <div style={{width:'100%', minWidth: '654px'}}>
        <Main data={this.state.data} />
        <Table data={this.state.data}  />
      </div>
    );
  }
}

export default App;
