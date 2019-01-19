import React, { Component } from 'react';



function generateBars(imp){
  var arr = []
  switch(imp){
    default:
      arr.push(<td className="small" style={{backgroundColor: '#000'}}/>)
      arr.push(<td className="medium" style={{backgroundColor: '#000'}}/>)
      arr.push(<td className="big" style={{backgroundColor: '#000'}}/>)
      break;
    case 1:
      arr.push(<td className="vertical" >LOW</td>)
      arr.push(<td className="vertical" ><div className="small" style={{backgroundColor: '#FFF'}}/></td>)
      arr.push(<td className="vertical" ><div className="medium" style={{backgroundColor: '#7cc6a7'}}/></td>)
      arr.push(<td className="vertical" ><div className="big" style={{backgroundColor: '#7cc6a7'}}/></td>)
      break;
    case 2:
      arr.push(<td className="vertical" >MIDDLE</td>)
      arr.push(<td className="vertical" ><div className="small" style={{backgroundColor: '#FFF'}}/></td>)
      arr.push(<td className="vertical" ><div className="medium" style={{backgroundColor: '#FFF'}}/></td>)
      arr.push(<td className="vertical" ><div className="big" style={{backgroundColor: '#7cc6a7'}}/></td>)
      break;
    case 3:
      arr.push(<td className="vertical" >VERY</td>)
      arr.push(<td className="vertical" ><div className="small" style={{backgroundColor: '#FFF'}}/></td>)
      arr.push(<td className="vertical" ><div className="medium" style={{backgroundColor: '#FFF'}}/></td>)
      arr.push(<td className="vertical" ><div className="big" style={{backgroundColor: '#FFF'}}/></td>)
      break;
  }
  return arr;

}

class Row extends Component {



  render() {
    return (
      <td>
        <table>
          <tbody>
            <tr className="mainVertical">
              {generateBars(this.props.bars)}
            </tr>
          </tbody>
        </table>
      </td>
    );
  }
}

export default Row;
