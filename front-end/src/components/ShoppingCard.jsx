import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import './ShoppingCart.css'
export default function ShoppingCart() {
    return (
        <div className="shopping__card">
            <ProductList />
            <Cart />
        </div>
    )
}