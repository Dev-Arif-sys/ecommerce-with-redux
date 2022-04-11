import { motion } from 'framer-motion';
import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/CartAction';
import SignModal from '../SigninModal/SignModal';
import './ProductCard.css';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { name, img, price, star, _id } = product
    const [modalShow, setModalShow] = React.useState(false);
    const UserData = useSelector(state => state.user)
    const { loading, userInfo } = UserData
    const alert=useAlert()

    const handleCardClick = (id) => {
       

        if (!userInfo?.email) {
            setModalShow(true)
        } else {
            navigate(`/products/${id}`,true)
        }


    }

    const handleCart=()=>{
        dispatch(addToCart(_id, 1))
        alert.success('Product added in the Cart')
    }

    
    return (
        <motion.div  animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.75 }} 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        key={product.key}>
            <div className="myCard">
                <div className="card-img">
                    <div onClick={() => handleCardClick(_id)}>
                        <img src={img} alt="" />
                    </div>

                    <div className="layer"></div>
                </div>

                <div className="card-info">
                    <div className="card-icon">
                        <div className=" icon-container mx-2">
                            <p onClick={handleCart} ><i className="fas fa-cart-plus"></i></p>
                            <p><i className="far fa-heart"></i></p>
                        </div>
                    </div>
                    <div >

                        <p onClick={() => handleCardClick(_id)} className='name'>{name.slice(0, 45)}...</p>
                    </div>
                    <div>
                        <h6 className="price">${price}</h6>
                    </div>

                </div>

            </div>

            <SignModal show={modalShow}
                onHide={() => setModalShow(false)}
            ></SignModal>
        </motion.div>
    );
};

export default ProductCard;