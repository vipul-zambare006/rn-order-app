import React, { Component } from "react";
import OrderItemComponent from "./OrderItemComponent";

export default class OrderItemsComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleIsPacked = () =>{
    this.props.handleIsPacked();
  }

  render() {
    const renderItem = this.props.orderItems.map(orderItem => {
      return (
        <div key={orderItem.id}>
          <OrderItemComponent orderItem={orderItem} handleIsPacked={this.handleIsPacked} isClosetAssigned={this.props.isClosetAssigned}/>
        </div>
      );
    });

    return (
      <div className="row" style={{ marginTop: "30px" }}>
        {renderItem}
      </div>
    );
  }
}
