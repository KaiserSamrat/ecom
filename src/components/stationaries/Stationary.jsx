import React from "react"


import "./style.css"
import StationaryCart from "./StationaryCart"
import StationayC from "./StationayC"

const Stationary = ({ addToCart, StationayItems }) => {
  console.log(addToCart);
  console.log(StationayItems);
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <StationayC />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Stationary Items</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <StationaryCart addToCart={addToCart} StationayItems={StationayItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stationary
