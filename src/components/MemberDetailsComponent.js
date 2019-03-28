import React, { Component } from "react";
const api = require("../config/api");

export default class MemberDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {},
      address: {}
    };
  }

  componentDidMount() {
    api
      .get(api.Uri.Members, this.state)
      .then(response => response.json())
      .then(response => {
        if (response) {
          this.setState({
            member: response,
            address: response.address
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div style={{ padding: "30px", marginLeft: "50%" }}>
          <div>
            <span className="bold-text">
              <span className="blue-text">{this.state.address.town}- </span>
              <span className="orange-text">{this.state.address.city}- {this.state.member.range}-{this.state.member.size}</span>
            </span>
          </div>
        </div>
        <div>
          <span className="bold-text">BLK No: </span>
          <span>{this.state.address.blkNo}</span>
        </div>
        <div>
          <span className="bold-text">Unit No: </span>
          <span>{this.state.address.unitNo}</span>
        </div>
        <div>
          <span className="bold-text">Street: </span>
          <span>{this.state.address.street}</span>
        </div>
        <div>
          <span className="bold-text">Town: </span>
          <span>{this.state.address.town}</span>
        </div>
        <div>
          <span className="bold-text">Postal Code: </span>
          <span>{this.state.address.postalCode}</span>
        </div>
        <div>
          <span className="bold-text">Residance Type: </span>
          <span>{this.state.address.residanceType}</span>
        </div>
      </div>
    );
  }
}
