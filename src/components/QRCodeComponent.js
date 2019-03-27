import React, { Component } from 'react';
import QRcode from '../assets/QR1.jpg'

export default class QRCodeComponent extends Component {
  render() {
    return (
      <div style={{float:'right', margin:'50px'}}>
        <img alt="qrcode" height="100" width="100" src={QRcode}></img>
        <div>Order ID: SGP-2018-48-L-52</div>
      </div>
    )
  }
}
