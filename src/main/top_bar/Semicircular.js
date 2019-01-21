import React, { Component } from 'react';

var clients = 203;
var total = 250;

class Semicircular extends Component {

  render() {
    return (
      <td><table className="charts" style={{width: "260px", margin: '0 auto'}}>
        <tbody>
          <tr>
            <td style={{align: 'center'}}>
              <div class="progress">
                  <div class="barOverflow">
                    <div class="bar" style={{transform: "rotate("+ (45+((clients/total)*180)) +"deg)"}}></div>
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
