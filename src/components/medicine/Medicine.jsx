import React from "react"
import MedicineC from "./MedicineC"
import MedicineCart from "./MedicineCart";
// import ShopCart from "./ShopCart"
import "./style.css"

const Medicine = ({ addToCart, medicineItems }) => {
  console.log(addToCart);
  console.log(medicineItems);
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          < MedicineC/>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Medicine</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <MedicineCart addToCart={addToCart} medicineItems={medicineItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Medicine
