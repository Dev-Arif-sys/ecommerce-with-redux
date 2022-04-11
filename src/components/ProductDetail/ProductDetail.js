import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/CartAction';
import Loading from '../Loading/Loading';
import ProductSlider from '../ProductSlider/ProductSlider';
import './ProductDetail.css';

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const productData=useSelector(state=> state.product.products)
    const dispatch=useDispatch()
    const [categorizedData,setCatogorizedData]=useState([])
    const [loading,setLoading]=useState(false)
    const [quantity,setQuantity]=useState(1)
    
    const { id } = useParams()
   
 

    useEffect(() => {
        setLoading(true)
        fetch(`https://boiling-brushlands-87279.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [id])


    var { name, price, category, stock, img, _id, seller, star, feature } = product

    
    useEffect(()=>{
       fetch(`https://boiling-brushlands-87279.herokuapp.com/productbycategory?category=${category}`)
       .then(res=>res.json())
       .then(data=>{
           setCatogorizedData(data)
       })
    },[category])
   

    if(loading){
        return <Loading></Loading>
    }
    



    return (
        <div>
           
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
                        <span onClick={()=>{ if(quantity>1){setQuantity(prev=>prev-1 )} }} className="dec qty-item" >–</span>
                        <span className="qty qty-item"> {quantity}</span>
                        <span onClick={()=>setQuantity(prev=>prev+1)} className="inc qty-item">+</span>
                    </div>

                    <button onClick={()=>dispatch(addToCart(_id,quantity))} className='gen-btn'>Add To Cart</button>
                   

                </div>


            </div>
            <div className='mt-5 pb-5'>
                <h3 className='section-title mb-4'>You may also Like</h3>
            <ProductSlider  products={categorizedData}></ProductSlider>
            </div>

        </div>
        </div>
    );
};

export default ProductDetail;