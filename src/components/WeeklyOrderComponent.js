import React, { Component } from "react";
import MemberDetailsComponent from "./MemberDetailsComponent";
import QRCodeComponent from "./QRCodeComponent";
import ClosetDeliveryAssignComponent from "./ClosetDeliveryAssignComponent";
import OrderItemsComponent from "./OrderItemsComponent";
const api = require("../config/api");

export default class WeeklyOrderComponent extends Component {
  constructor(props){
    debugger;
    super(props)
    this.state = {
      order: {},
      orderItems: []
    };
    this.getOrder();
  }

  getOrder = () =>{
    api
    .get(api.Uri.Orders, this.state)
    .then(response => response.json())
    .then(response => {
      if (response) {
        this.setState({
          order: response,
        });
        
        api
          .get(api.Uri.OrderItems, this.state)
          .then(response => response.json())
          .then(response => {
            console.log('items:',response)
            this.setState({
              orderItems: response
            });
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
        <div className="row  mx-lg-n5">
          <div className="col-8">
            <MemberDetailsComponent />
          </div>
          <div className="col-4">
            <QRCodeComponent />
          </div>
        </div>
        <div className="row mx-lg-n5" style={{marginTop:'30px'}}>
          <div className="col">
            <ClosetDeliveryAssignComponent orderItems={this.state.orderItems} />
          </div>
        </div>
        <div className="row mx-lg-n5">
          <div className="col"><OrderItemsComponent order={this.state.order} orderItems={this.state.orderItems} /></div>
        </div>
      </div>
    );
  }
}
