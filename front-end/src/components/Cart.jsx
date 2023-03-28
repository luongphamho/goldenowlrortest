import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'

export default function Cart() {
  const { cart } = useSelector(state => state.cart);
  const renderPrice = () => {
    let totalPrice = 0;
    if (cart.length > 0) {
      totalPrice = cart.reduce((total, item) => { return total += item.amount * item.price }, 0).toLocaleString(2);
    }
    return totalPrice;
  }
  const renderCartItem = () => {
    if (cart.length === 0) {
      return <p className="cart__empty__text">Your cart is empty.</p>
    }
    return null
  }
  if (cart) {
    return (
      <div className="card">
        <div className="card__top">
          <div>
            <img className="card__top__logo" src="./assets/nike.png" alt="..." />
          </div>
          <div className='card__title'>Your cart
            <span className='card__title__amount'>${renderPrice()}</span></div>
        </div>
        <div className="card__body">
          {renderCartItem()}
          {cart.map((item, index) => <CartItem key={index} item={item} />)}
        </div>
      </div>
    )
  }
  return (
    <div className="card">
      <div className="card__top">
        <div>
          <img className="card__top__logo" src="./assets/nike.png" alt="..." />
        </div>
        <div className='card__title'>Your cart
          <span className='card__title__amount'>${renderPrice()}</span></div>
      </div>
      <div className="card__body">
        <p>Loading...</p>
      </div>
    </div>
  )
}