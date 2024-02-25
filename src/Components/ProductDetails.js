import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';

import { getProductsById } from '../fetchAPI';


//prodcut details component
const ProductDetails = () => {
  //product id parameter got by parameters in url
  const {productId} = useParams();
  //product propery
  const [product, setProduct] = useState({errormessage: '', data: {}})

  //fetch product by id from API
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsById(productId);
      setProduct(responseObject);
    }

    fetchData();
  }, [productId])

  const createMarkup = () => {
    return { __html: product.data?.description }
  }

  return (
    <>
        <ProductTitle>
            {product.data.title}
        </ProductTitle>

        <ProductItem>
            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={`../assets/${product.data.image}`} alt={product.data.title}/>
                </ProductImageContainer>
            </figure>
            
            <ProductSpecs>
                <div>
                    <h3>Dimensions</h3>
                    <ProductLabels>{product.data.specs?.dimensions}</ProductLabels>
                </div>

                {product.data.specs?.capacity &&
                <div>
                    <h3>Capacity</h3>
                    <ProductLabels>{product.data.specs?.capacity}</ProductLabels>
                </div>
                }

                <div>
                    <h3>Features</h3>
                    <ProductFeatureUl>
                        {product.data.features?.map((f, i) => {
                            return <li key={`feature_${i}`}>{f}</li>
                        })}
                    </ProductFeatureUl>
                </div>
            </ProductSpecs>

            <ProductFinance>
                <ProductPrice>
                &#36;CAD {product.data.price}
                </ProductPrice>

                <ProductStock>
                    <label>Stock Level: {product.data.stock}</label>
                    <label>Free Delivery</label>
                </ProductStock>

                <ProductAction>
                    <button>Add to Cart</button>
                </ProductAction>
            </ProductFinance>

            <ProductDescription
                dangerouslySetInnerHTML={createMarkup()}
            ></ProductDescription>

        </ProductItem>
    </>
  )
}

export default ProductDetails;

//style CategoryProduct using styled components
const ProductTitle = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: darkgreen;
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

const ProductDescription = styled.div`
    grid-column: 1 / span 3;
    padding: 20px;
    padding-right: 15%;
    text-align: justify;
`;