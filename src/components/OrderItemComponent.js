import React, { Component } from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/1.jpg";
export default class OrderItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onStatusChange = () => {
    this.setState({
      checked: !this.state.checked
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
          {orderItem.refWarehouseStaffNumber
            ? orderItem.refWarehouseStaffNumber
            : ""}
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onStatusChange}
            disabled={!this.props.isClosetAssigned}
            // checked={orderItem.isPacked}
          />
          Packed
        </div>
      </div>
    );
  }
}
