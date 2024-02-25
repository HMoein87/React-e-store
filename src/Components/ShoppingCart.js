import React from 'react';

import styled from 'styled-components';

//ShoppingCart componentS
const ShoppingCart = () => {
  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartButton>Checkout</CartButton>
      <CartTable>
        <CartHeader>
          <h4>Items</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </CartHeader>
        <CartHeaderLine />

        <CartHeader>
          Cart Items
        </CartHeader>
        <CartHeaderLine />

        <CartButton>Clear</CartButton>
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