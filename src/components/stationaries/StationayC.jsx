import React from "react"

const StationayC = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Books",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Pen",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Colors",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Pencil",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Scale",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Fiction",
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

export default StationayC
