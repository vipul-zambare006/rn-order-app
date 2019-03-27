import React, { Component } from "react";
const api = require("../config/api");
export default class ClosetDeliveryAssignComponent extends Component {

  render() {
    return (
      <div>
        <div>
          <span className="bold-text">Assigned Closet ID:</span>
            <div className="input-group sm-3 mb-3">
              <input className="form-input" type="text" />
              <span>
                {/* //disable button if any of order item is pending */}
                <button className="btn btn-primary">Scan Closet ID</button>
              </span>
            </div>
        </div>
        <div>
          <span className="bold-text">Assigned Delivery Man:</span>
          <span>
            <select>
              <option>---select---</option>
              <option>Mr. John Doe</option>
            </select>
          </span>
        </div>
      </div>
    );
  }
}
