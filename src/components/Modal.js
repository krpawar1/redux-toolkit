import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModel } from '../features/modal/modalSlice'

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>
                    Remove ??? 
                </h4>
                <div className='btn-container'>
                    <button
                    onClick={()=>{dispatch(clearCart());dispatch(closeModel());}} type='button' className='btn confirm-btn'>Confirm</button>
                    <button onClick={()=>{dispatch(closeModel())}} type='button' className='btn clear-btn'>Cancel</button>

                </div>
            </div>
        </aside>
    )
}

export default Modal