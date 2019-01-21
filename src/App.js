import React, { Component } from 'react';
import Table from './main/rows/Table';
import Main from './/main/top_bar/Main';

// async function getData(){
//   var data = "./main/assets/MOCK_DATA1.json"
//   return fetch(data);
// }

class App extends Component {

    state = {data : {}}

    componentWillMount() {
      // fetch("./main/assets/MOCK_DATA1.json").then(data => console.log(data))
      var th = require("./main/assets/MOCK_DATA1.json")
      this.setState({data: th})
    }

  render() {
    return (
      <div style={{width:'100%', minWidth: '654px'}}>
        <Main/>
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
