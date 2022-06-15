import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";
// import {  getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());

  }, [cartItems])

  // useEffect(() => {
  //   dispatch(getCartItems());
  // },[])

  // if (isLoading) {
  //   return <div>
  //     <h1>Loading!!!!!!!!!!!!!!!!!!!!</h1>
  //   </div>
  // }
  return <>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </>;
}
export default App;
