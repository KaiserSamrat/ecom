import React from "react"
import { useHistory } from "react-router-dom"
// import groceries from '../../../public/images/category/cat10.png'
const Categories = () => {
  const history = useHistory()
  const data = [
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Medicine",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Stationeries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
    // {
    //   cateImg: "./images/category/cat1.png",
    //   cateName: "Fashion",
    // },
 
    // {
    //   cateImg: "./images/category/cat3.png",
    //   cateName: "Cars",
    // },
    // {
    //   cateImg: "./images/category/cat4.png",
    //   cateName: "Home & Garden",
    // },
    // {
    //   cateImg: "./images/category/cat5.png",
    //   cateName: "Gifts",
    // },
    // {
    //   cateImg: "./images/category/cat6.png",
    //   cateName: "Music",
    // },
  
    // {
    //   cateImg: "./images/category/cat8.png",
    //   cateName: "Pets",
    // },
    // {
    //   cateImg: "./images/category/cat9.png",
    //   cateName: "Baby Toys",
    // },
  
  
  ]
  const handleElectronics = () => {
    history.push("./electronics")
  }
  const handleMedicine = () => {
    history.push("./medicine")
  }
  const handleCategories = () => {
    history.push("./grocery")
  }

  return (
    <>
      <div className='category'>
        {/* {data.map((value, index) => { */}
        
            <div className='box f_flex' onClick={handleCategories}>
              <img src={data[0].cateImg} alt='' />
              <span>Groceries</span>
            </div>
            <div className='box f_flex' onClick={handleElectronics}>
              <img src={data[1].cateImg} alt='' />
              <span>Electronic</span>
            </div>
            <div className='box f_flex' onClick={handleMedicine}>
              <img src={data[2].cateImg} alt='' />
              <span>Medicine</span>
            </div>
            <div className='box f_flex' >
              <img src={data[3].cateImg} alt='' />
              <span>Stationeries</span>
            </div>
            <div className='box f_flex' >
              <img src={data[4].cateImg} alt='' />
              <span>Books</span>
            </div>
         
        {/* })} */}
      </div>
    </>
  )
}

export default Categories
