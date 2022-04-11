import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../Redux/Actions/CartAction';
import './ShopProducts.css';

const ShopProducts = ({ products }) => {
    const [quantity, setQuantity] = useState(1)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleProductClick=(id)=>{
        navigate(`/products/${id}`,true)
    }
    return (
        <div className='px-3'>
            <div>
                {
                    products.map(product => {
                        return (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: .7 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                            >
                                <div className='shopProduct'>
                                    <div className='shopProduct-img'>
                                        <img src={product.img} />
                                    </div>
                                    <div className='shopProduct-detail mt-3'>
                                        <small className='text-warning'>{product?.category}</small>
                                        <h6 onClick={()=>handleProductClick(product._id)} className='fw-bold fs-5 text-danger my-2 product-name'>{product.name}</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus</p>
                                    </div>
                                    <div className='shopProduct-action'>
                                        <p className='price fw-bold'>${product.price}</p>
                                        <div className="qty-box">
                                            <span onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }} className="dec qty-item" >–</span>
                                            <span className="qty qty-item"> {quantity}</span>
                                            <span onClick={() => setQuantity(quantity + 1)} className="inc qty-item">+</span>
                                        </div>

                                        <button onClick={() => dispatch(addToCart(product?._id, quantity))} className='gen-btn'>Add To Cart</button>
                                    </div>
                                </div>
                                <div className='shopProduct-detail-mobile'>
                                    <small className='text-warning'>{product.category}</small>
                                    <h6 className='fw-bold fs-5 text-danger my-2'>{product.name}</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus</p>
                                </div>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ShopProducts;