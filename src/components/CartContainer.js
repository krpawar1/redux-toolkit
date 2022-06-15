import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { openModel } from '../features/modal/modalSlice'
import CartItem from './CartItem'

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (<section className='cart'>
            <header>
                <h2>Your Cart</h2>
                <h4 className='empty-cart'>is empty</h4>
            </header>
        </section>)
    }

    return (<section className='cart'>
        <header>
            <h2>Your Cart</h2>
        </header>
        <div>
            {cartItems.map((item) => {
                return <CartItem
                    key={item.id}
                    {...item}
                />
            })}
        </div >
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    TOTAL <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <button 
            onClick={()=>{dispatch(openModel())}} className='btn clear-btn'>Clear Cart</button>
        </footer>
    </section>)
}

export default CartContainer