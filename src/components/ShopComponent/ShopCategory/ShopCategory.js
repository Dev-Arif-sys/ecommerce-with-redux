import React from 'react';
import './ShopCategory.css'

const ShopCategory = ({products,setCategory,categoryclick}) => {
    const categories=products.map((curr)=>{
        return curr.category
    })
  
   

    let uniqueCategory=categories.filter((cat,ind,arr)=> arr.indexOf(cat)===ind)

    uniqueCategory=["all",...uniqueCategory]
    return (
        <div className='px-4 shop-category'>
           <h6>Category</h6>
           <hr/>
           <div>
           {
                 uniqueCategory.map(category=>  <p className={category==categoryclick && 'active-category'} style={{cursor:'pointer'}} onClick={()=>setCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</p>)
             }
             
           </div>
        </div>
    );
};

export default ShopCategory;