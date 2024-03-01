import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CartContext } from '../contexts/cartContext';
import { UpIcon, DownIcon, TrashIcon } from './Icons';
import { formatNumber } from '../utils';


//ShoppingCart componentS
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const {getCartItems, clearCart, increaseQuantity, decreaseQuantity, removeProduct} = useContext(CartContext);

  useEffect(() => {
    setCartItems(getCartItems());
  }, [getCartItems]);
  
  const renderCart = () => {

    if (cartItems.length > 0) {
      return cartItems.map((i) => (
        <React.Fragment key={i.id}>
          <div>
            <Link to={`/products/${i.id}`}>{i.title}</Link>
          </div>

          <CartQty>
            {i.quantity}
            <UpIcon width={20} onClick={() => setCartItems(increaseQuantity({id: i.id}))}></UpIcon>
            <DownIcon width={20} onClick={() => setCartItems(decreaseQuantity({id: i.id}))}></DownIcon>
            <TrashIcon width={20} onClick={() => setCartItems(removeProduct({ id: i.id }))}></TrashIcon>
          </CartQty>

          <CartPrice>
          {formatNumber(i.price)}
          </CartPrice>
        </React.Fragment>
      ));
    }
    else {
      return <div>The cart is empty.</div>
    }
  }

  const renderTotal = () => {
    const cartItems = getCartItems();
    
    const total = cartItems.reduce((total,item) => (total + item.price * item.quantity), 0);
    return total;
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartButton onClick={() => navigate('/checkout')}>Checkout</CartButton>
      <CartTable>
        <CartHeader>
          <h4>Items</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </CartHeader>
        <CartHeaderLine />

        <CartHeader>
          {renderCart()}
        </CartHeader>
        <CartHeaderLine />

        </CartTable>
        <CartButton onClick={() => clearCart()}>Clear</CartButton>
        <CartTotal>Total: {formatNumber(renderTotal())}</CartTotal>
      
    </CartContainer>
  )
}

export default ShoppingCart;


//style shppingCart component using styled components
const CartContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const CartTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

const CartButton = styled.button`
  border-radius: 8px;
  height: 40px;
  width: 100px;
`;

const CartTable = styled.div`
    grid-column: 1 / span 3;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CartHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const CartHeaderLine = styled.hr`
    margin-bottom: 20px;
    border: 1px solid gray;
`;

const CartTotal = styled.h2`
    justify-self: end;
    padding-top: 20px;
`;

const CartQty = styled.h3`
    font-size: 18px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 0.2fr 0.05fr 0.2fr 0.2fr;
`;

const CartPrice = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;