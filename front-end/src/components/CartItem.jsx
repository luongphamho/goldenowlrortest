import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem, removeToCart, subItem } from '../redux/cart.slice';
import './CartItem.css'
export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false)
    const [isShowRight, setIsShowRight] = useState(false)
    useEffect(() => {
        console.log(item)
    }, [isDelete])
    
    const handleDelete = () => {
        setIsDelete(true);
        setTimeout(function () {
            dispatch({
                type: removeToCart,
                id: item.id
            })
            setIsDelete(false);
        }, 1000);
    }

    setTimeout(function () {
        setIsShowRight(true)
    }, 500);

    return (
        <div className={`cart__item ${isDelete ? 'delete-cart' : ''}`}>
            <div className="cart__item__left">
                <div className="card__item__img" style={{ backgroundColor: `${item.color}`, width: '90px', height: '90px', borderRadius: '100%' }}>
                    <div className='cart__item__img__block'><img src={item.image} alt={item.name} /></div>
                </div>
            </div>
            <div style={{ display: isShowRight ? 'block' : 'none' }} className="cart__item__right">
                <div className="cart__item__name">{item.name}</div>
                <div className="cart__item__price">${item.price}</div>
                {console.log(item.price)}
                <div className="cart__item__actions">
                    <div className="cart__item__count">
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: subItem,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/minus.png" alt="..." width={8} height={8} />
                        </button>
                        <div className="cart__item__count__number">{item.amount}</div>
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: addItem,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/plus.png" alt="..." width={8} height={8} />
                        </button>
                    </div>
                    <button className="cart__remove__button" onClick={handleDelete}>
                        <img src="./assets/trash.png" alt="..." width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}