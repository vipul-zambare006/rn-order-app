import React, { Component } from "react";
import MemberDetailsComponent from "./MemberDetailsComponent";
import QRCodeComponent from "./QRCodeComponent";
import ClosetDeliveryAssignComponent from "./ClosetDeliveryAssignComponent";
import OrderItemsComponent from "./OrderItemsComponent";
import OrderStatusComponent from "./OrderStatusComponent"
const api = require("../config/api");

export default class WeeklyOrderComponent extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      order: {},
      orderItems: [],
      isClosetAssigned: false,
      isAllItemsPacked: false
    };
    this.getOrder();
  }

  handleClosetAssigned = isClosetAssigned => {
    this.setState({
      isClosetAssigned: isClosetAssigned
    });
  };

  getOrder = () => {
    api
      .get(api.Uri.Orders, this.state)
      .then(response => response.json())
      .then(response => {
        if (response) {
          this.setState({
            order: response
          });

          api
            .get(api.Uri.OrderItems, this.state)
            .then(response => response.json())
            .then(response => {
              this.setState({
                orderItems: response
              });
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleIsPacked = () => {
    this.getOrder();

    console.log('handle is packed',this.state.orderItems.map(x => (x.isPacked === true)).includes(false))

    if(!this.state.orderItems.map(x => (x.isPacked === true)).includes(false))
    {
      this.setState({
        isAllItemsPacked: true
      })
    }
  }

  render() {
    return (
      <div>
        <div className="row  mx-lg-n5">
        <div className="col-md-12 offset-4">
            <OrderStatusComponent />
          </div>
          <div className="col-md-8">
            <MemberDetailsComponent />
          </div>
          <div className="col-md-4">
            <QRCodeComponent />
          </div>
        </div>
        <div className="row mx-lg-n5" style={{ marginTop: "30px" }}>
          <div className="col-md-8">
            <ClosetDeliveryAssignComponent orderItems={this.state.orderItems} isAllItemsPacked={this.state.isAllItemsPacked} closedAssigned={this.handleClosetAssigned} />
          </div>
        </div>
        <div className="row mx-lg-n5">
          <div className="col">
            <OrderItemsComponent
              order={this.state.order}
              isClosetAssigned={this.state.isClosetAssigned}
              orderItems={this.state.orderItems}
              handleIsPacked={this.handleIsPacked}
            />
          </div>
        </div>
      </div>
    );
  }
}
