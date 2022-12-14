import React from "react"

const GROCERYC = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Fish",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Meat",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Baby Care",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Beverages",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Home made food",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "snacks",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default GROCERYC
