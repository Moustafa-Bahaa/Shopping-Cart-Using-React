import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/Shopcontext";

const CartItem = (props) => {
  const { id, ProductName, Price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart , updateCartItemCount  } = useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{ProductName}</b>
        </p>
        <p>${Price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange = {(e)=>updateCartItemCount (Number(e.target.value),id )} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
