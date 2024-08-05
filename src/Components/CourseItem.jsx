import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from '../Control/CardSlice';
import { increase } from '../Control/CardSlice';
import { decrease } from '../Control/CardSlice';

function CourseItem({ id, title, price, img, quantity }) {

    const dispatch = useDispatch();
    return (
        <div className="cartItem">
            <img src={img} alt="" />
            <div className="cartInfo">
                <h4>{title}</h4>
                <h4>{price}TL</h4>
                <div>
                    <button className="cartQuantityButton" onClick={() => { dispatch(increase(id)) }}>
                        <BsChevronUp />
                    </button>
                    <p className="cartQuantity">{quantity}</p>
                    <button className="cartQuantityButton">
                        <BsChevronDown onClick={() => { dispatch(decrease(id)) }} />
                    </button>
                </div>
                <button
                    className="cartDeleteButton"
                    onClick={() => {
                        dispatch(removeItem(id));
                    }}
                >
                    Sil
                </button>
            </div>
        </div>
    );
}

// Add 'id' to the props validation
CourseItem.propTypes = {
    id: PropTypes.string.isRequired,  // id: string olarak ayarlandı
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,  // price: string olarak ayarlandı
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CourseItem;
