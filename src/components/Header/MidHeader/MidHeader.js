import React from 'react';
import { useSelector } from 'react-redux';
import './MidHeader.css'

const MidHeader = ({click}) => {
    const cartItem=useSelector(state=>state.cart.productCart)
    console.log(cartItem)
    const cartItemCount=cartItem.reduce((quantity,item)=> cartItem.length>0? quantity+Number(item.quantity):0,0)
    console.log(cartItemCount)
    return (
        <div className='mid-header' >
            <div className='mid-header-container d-flex align-items-center justify-content-between'>
                <div>
                    <h3 className='logo'> <i onClick={click} class="fas fa-bars hamburger"></i> EMARKET</h3>
                </div>
                <div>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit" className="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                    </div>
                </div>
                <div>
                <span className='wish'> <i class="far fa-heart"></i>  </span>
                    <span className='cart'> <i class="fas fa-shopping-cart"></i> <span className='cartNo'>{cartItemCount}</span> </span>
                </div>

            </div>

        </div>
    );
};

export default MidHeader;