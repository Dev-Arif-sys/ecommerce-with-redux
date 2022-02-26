import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSlider from '../ProductSlider/ProductSlider';
import './ProductDetail.css'
import { addToCart } from '../../Redux/Actions/CartAction';

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const productData=useSelector(state=> state.product.products)
    const dispatch=useDispatch()
    const [categorizedData,setCatogorizedData]=useState([])
    const [quantity,setQuantity]=useState(1)
    
    const { id } = useParams()
   
 

    useEffect(() => {
        fetch(`https://boiling-brushlands-87279.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])


    var { name, price, category, stock, img, _id, seller, star, feature } = product

    console.log(productData)
    useEffect(()=>{
       fetch(`https://boiling-brushlands-87279.herokuapp.com/productbycategory?category=${category}`)
       .then(res=>res.json())
       .then(data=>{
           setCatogorizedData(data)
       })
    },[category])
    console.log(quantity)

    
    



    return (
        <div className='product-detail'>
            <div className='d-md-flex'>
                <div className='product-left'>
                    <img src={img} />
                </div>
                <div className='product-right'>
                    <h4 className='detail-title'>{name}</h4>
                    <h2 className=' detail-price'>${price}</h2>
                    <p>
                        Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                    </p>
                   

                    <div className="qty-box">
                        <span onClick={()=>{ if(quantity>1){setQuantity(quantity-1 )} }} className="dec qty-item" >–</span>
                        <span className="qty qty-item"> {quantity}</span>
                        <span onClick={()=>setQuantity(quantity+1)} className="inc qty-item">+</span>
                    </div>

                    <button onClick={()=>dispatch(addToCart(_id,quantity))} className='gen-btn'>Add To Cart</button>
                   

                </div>


            </div>
            <div className='mt-5 pb-5'>
                <h3 className='section-title mb-4'>You may also Like</h3>
            <ProductSlider  products={categorizedData}></ProductSlider>
            </div>

        </div>
    );
};

export default ProductDetail;