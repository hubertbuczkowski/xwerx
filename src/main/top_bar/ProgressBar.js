import React, { Component } from 'react';

class ProgressBar extends Component {

  render() {
    return (
      <div className="progressBar">
        <div className="filler" style={{height: this.props.progress+'%'}}/>
      </div>
    );
  }
}

export default ProgressBar;
