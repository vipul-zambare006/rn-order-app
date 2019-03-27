import React, { Component } from 'react'
const api = require("../config/api");

export default class FulfillItemComponent extends Component {
  constructor(props){
    super(props)
  }

  fulFillItem = () =>{
    api
    .patch(api.Uri.OrderItems+'/'+this.props.match.params.itemname, {status: "Fulfilled"} )
    .then(response => response.json())
    .then(response => {
      if (response) {
        this.setState({
          member: response,
          address: response.address
        });
      }
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <div><h3>Fulfill Item: {this.props.match.params.itemname} </h3></div>
        <button className="btn btn-primary" onClick={this.fulFillItem}>Fulfill</button>
      </div>
    )
  }
}
