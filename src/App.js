import React, { Component } from 'react';
import Table from './main/rows/Table';

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
      <div>
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
