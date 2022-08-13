

import React, { useState } from "react"

const StationaryCart = ({ StationayItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {StationayItems.map((StationayItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{StationayItems.discount}% Off</span>
                <img src={StationayItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{StationayItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>{StationayItems.price}.00 Tk</h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(StationayItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default StationaryCart
