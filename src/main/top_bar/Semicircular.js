import React, { Component } from 'react';



class Semicircular extends Component {

  render() {
    var clients = this.props.month;
    var total = this.props.total;

    return (
      <td style={{padding: '10px 0 0 0'}}><table className="charts" style={{width: "260px", margin: '0 auto'}}>
        <tbody>
          <tr>
            <td style={{align: 'center'}}>
              <div className="progress">
                  <div className="barOverflow">
                    <div className="bar" style={{transform: "rotate("+ (45+((clients/total)*180)) +"deg)"}}></div>
                  </div>
                <div className="active">{clients}</div>
              </div></td>
            </tr>
          </tbody>
        </table>
      </td>
    );
  }
}

export default Semicircular;
