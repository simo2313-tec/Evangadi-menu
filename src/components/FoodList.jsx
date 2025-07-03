import React, { Component } from 'react'

 class FoodList extends Component {
  render() {
    const  {img, FoodType, price, desc, link } = this.props
    return (
      <div>
         <div className="single-food">
          <div className="img">
            <img
              src={img}
            />
          </div>
          <div className="title-price">
            <h3>{FoodType}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">
            {desc}
          </div>
          {link && (<div><a href="#">{link}</a></div>)}
        </div>
      
      </div>
    )
  }
}
export default FoodList;