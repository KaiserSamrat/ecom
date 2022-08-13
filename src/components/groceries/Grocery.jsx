import React from "react"
import GROCERYC from "./GROCERYC"
// import groceryC from "./GROCERYC"
import GroceryCart from "./GroceryCart"

import "./style.css"

const Grocery = ({ addToCart, groceryItems }) => {

  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <GROCERYC />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Daily Needs</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <GroceryCart addToCart={addToCart} groceryItems={groceryItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Grocery
