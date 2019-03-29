import React, { Component } from "react";
const api = require("../config/api");
export default class ClosetDeliveryAssignComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closetId: ""
    };
  }

  isClosetAssignable = () => {
    const result = this.props.orderItems
      .map(item => item.status)
      .includes("Pending");

    if (result) {
      alert("Closet can not be assigned as some items are in Pending state");
    } else {
      this.setState({
        closetId: "CLO-ZYX-0001"
      });
      this.props.closedAssigned(true);
      alert("Closet Assigned Successfully");
    }
  };

  render() {
    return (
      <div>
        <div>
          <span className="bold-text">Assigned Closet ID:</span>
          <div className="input-group sm-3 mb-3">
            <input
              readOnly={true}
              className="form-input"
              type="text"
              value={this.state.closetId}
            />
            <span>
              <button
                className="btn btn-primary"
                onClick={this.isClosetAssignable}
              >
                Scan Closet ID
              </button>
            </span>
          </div>
        </div>
        <div>
          <span className="bold-text">Assigned Delivery Man:</span>
          <span>
            <select disabled={!this.props.isAllItemsPacked}>
              <option>---select---</option>
              <option>Mr. John Doe</option>
            </select>
          </span>
        </div>
      </div>
    );
  }
}
