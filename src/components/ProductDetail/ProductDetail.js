import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSlider from '../ProductSlider/ProductSlider';
import './ProductDetail.css'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const productData=useSelector(state=> state.product.products)
    
    const { id } = useParams()
   
 

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])


    var { name, price, category, stock, img, _id, seller, star, feature } = product

    const categorizedData=productData.filter(product=>product.category==category)
    



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
                        <span className="dec qty-item" >–</span>
                        <span className="qty qty-item"> 0</span>
                        <span className="inc qty-item">+</span>
                    </div>

                    <button className='gen-btn'>Add To Cart</button>
                   

                </div>


            </div>
            <div className='mt-5'>
                <h3 className='section-title'>You may also Like</h3>
            <ProductSlider products={categorizedData}></ProductSlider>
            </div>

        </div>
    );
};

export default ProductDetail;