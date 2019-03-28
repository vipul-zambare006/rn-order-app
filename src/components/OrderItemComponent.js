import React, { Component } from "react";
import { Link } from "react-router-dom";
const api = require("../config/api");

export default class OrderItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onStatusChange = (id) => {
    this.setState({
      checked: !this.state.checked
    });
    console.log('packedItem', id)
    api
    .patch(api.Uri.OrderItems+'/'+id, {isPacked: true} )
    .then(response => response.json())
    .then(response => {
      if (response) {
       console.log('item packed success'); 
       this.props.handleIsPacked();
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    const orderItem = this.props.orderItem;
    return (
      <div style={{ margin: "20px" }}>
        <div>
          {orderItem.status === "Pending" ? (
            <Link to={`/fulfill/${orderItem.id}`}>
              <img
                src={require(`../assets/${orderItem.id}.jpg`)}
                alt={this.props.orderItem}
                height="100"
                width="100"
              />
            </Link>
          ) : (
            <img
              src={require(`../assets/${orderItem.id}.jpg`)}
              alt={this.props.orderItem}
              height="100"
              width="100"
            />
          )}
        </div>
        <div
          className={
            orderItem.status === "Fulfilled"
              ? "fulfilled-order"
              : "pending-order"
          }
        >
          {orderItem.status}
        </div>
        <div className="fulfilled-order">
          { orderItem.status === "Fulfilled"
            ? `Call: ${orderItem.refWarehouseStaffNumber}`
            : ""}
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onStatusChange.bind(this,orderItem.id)}
            disabled={!this.props.isClosetAssigned}
            // checked={orderItem.isPacked}
          />
          Packed
        </div>
      </div>
    );
  }
}
