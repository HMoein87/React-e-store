import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


//CategoryProduct component
const CategoryProduct = ({
    id, 
    title, 
    image, 
    specs, 
    features, 
    price, 
    stock}) => {
    const navigate = useNavigate();
  return (
    <>
        <ProductTitle>
            <Link to={`products/${id}`}>{title}</Link>
        </ProductTitle>

        <ProductItem>
            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`/assets/${image}`} alt={title}/>
                </ProductImageContainer>
            </figure>
            
            <ProductSpecs>
                <div>
                    <h3>Dimensions</h3>
                    <ProductLabels>{specs.dimensions}</ProductLabels>
                </div>

                {specs.capacity &&
                <div>
                    <h3>Capacity</h3>
                    <ProductLabels>{specs.capacity}</ProductLabels>
                </div>
                }

                <div>
                    <h3>Features</h3>
                    <ProductFeatureUl>
                        {features?.map((f, i) => {
                            return <li key={`feature_${i}`}>{f}</li>
                        })}
                    </ProductFeatureUl>
                </div>
            </ProductSpecs>

            <ProductFinance>
                <ProductPrice>
                &#36;CAD {price}
                </ProductPrice>

                <ProductStock>
                    <label>Stock Level: {stock}</label>
                    <label>Free Delivery</label>
                </ProductStock>

                <ProductAction>
                    <button onClick={() => {navigate(`products/${id}`)}}>View Product</button>
                    <button>Add to Cart</button>
                </ProductAction>
            </ProductFinance>
        </ProductItem>
    </>
  )
}

export default CategoryProduct;

//style CategoryProduct using style component
const ProductTitle = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
`;

const ProductItem = styled.article`
    display: grid;
    grid-template-columns: 0.5fr 0.75fr 0.5fr;
    margin-bottom: 40px;
`;

const ProductImageContainer = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
`;

const ProductImageContainerImage = styled.img`
    width: 250px;
    height: auto;
`;

const ProductSpecs = styled.aside`
    padding: 5px;
`;

const ProductLabels = styled.label`
    display: block;
    padding: 10px;
`;

const ProductFeatureUl = styled.ul`
    padding-left: 25px;
    padding-top: 10px;
`;

const ProductFinance = styled.aside`
    margin-top: 10%;
    margin-left: 5%;
`;

const ProductPrice = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

const ProductStock = styled.div`
    display: grid;
    grid-template-rows: 2;
    grid-gap: 10px;
    margin-top: 20px;
    background-color: cornflowerblue;
    width: 130px;
`;

const ProductAction = styled.div`
    display: grid;
    grid-template-rows: 2;
    grid-gap: 20px;
    margin-top: 20px;
    width: 100px;
`;