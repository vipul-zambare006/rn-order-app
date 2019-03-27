import React, { Component } from "react";
import OrderItemComponent from "./OrderItemComponent";

export default class OrderItemsComponent extends Component {
  constructor(props) {
    debugger;
    super(props);
  }

  render() {
    console.log('in OIts:',this.props)
    const renderItem = this.props.orderItems.map(orderItem => {
      return (
        <div key={orderItem.id}>
          <OrderItemComponent orderItem={orderItem} />
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
