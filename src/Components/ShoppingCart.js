import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CartContext } from '../contexts/cartContext';
import { UpIcon, DownIcon, TrashIcon } from './Icons';


//ShoppingCart componentS
const ShoppingCart = () => {
  const navigate = useNavigate();
  const {getItems, clearCart, increaseQuantity, decreaseQuantity, removeProduct} = useContext(CartContext);

  const renderCart = () => {
    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((i) => (
        <React.Fragment key={i.id}>
          <div>
            <Link to={`/products/${i.id}`}>{i.title}</Link>
          </div>

          <CartQty>
            {i.quantity}
            <UpIcon width={20} onClick={() => increaseQuantity({id: i.id})} />
            <DownIcon width={20} onClick={() => decreaseQuantity({id: i.id})} />
            <TrashIcon width={20} onClick={() => removeProduct({id: i.id})} />
          </CartQty>

          <CartPrice>
          &#36;CAD {i.price}
          </CartPrice>
        </React.Fragment>
      ));
    }
    else {
      return <div>The cart is empty.</div>
    }
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

        <CartButton onClick={() => clearCart()}>Clear</CartButton>
        <CartTotal>Total: &#36;CAD 0</CartTotal>
      </CartTable>
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