import React, { Component } from 'react'

export default class OrderStatusComponent extends Component {
    constructor(props){
        super(props)
    }
    
  onChangeOrderStatus = (e) =>{
    //TODO: Validate orderItems when user changes status
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <span className="bold-text">Status: </span>
          <select onChange={this.onChangeOrderStatus}>
            <option value="preparing">Preparing</option>
            <option value="closetAssigned">Closet assigned</option>
            <option value="packed">Packed</option>
            <option value="assignedDelivery">Assigned for delivery</option>
          </select>
      </div>
    )
  }
}
