import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProductsById } from '../fetchAPI';

//prodcut details component
const ProductDetails = () => {
  //product id parameter got by parameters in url
  const {productId} = useParams();
  //product propery
  const [product, setProduct] = useState({errormessage: '', data: []})

  //fetch product by id from API
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsById(productId);
      setProduct(responseObject);
    }

    fetchData();
  }, [productId])

  return (
    <>
        <div className='category-product-title'>
            {product.data.title}
        </div>

        <article>
            <figure className='category-product-item'>
                <div className='category-product-image-container'>
                    <img className='product-image' src={`../assets/${product.data.image}`} alt={product.data.title}/>
                </div>
            </figure>
            
            <aside className='category-product-spec category-product-item'>
                <div className='category-product-info-dimesnions'>
                    <h3>Dimensions</h3>
                    <label className='dimension'>{product.data.specs?.dimensions}</label>
                </div>

                {product.data.specs?.capacity &&
                <div className='category-product-info-capacity'>
                    <h3>Capacity</h3>
                    <label>{product.data.specs?.capacity}</label>
                </div>
                }

                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {product.data.features?.map((f, i) => {
                            return <li key={`feature_${i}`}>{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='category-product-finance category-product-item'>
                <div className='category-product-price'>
                &#36;CAD {product.data.price}
                </div>

                <div className='category-product-info-stock'>
                    <label>Stock Level: {product.data.stock}</label>
                    <label>Free Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button>Add to Cart</button>
                </div>
            </aside>
        </article>

        <div>{product.data?.description}</div>
    </>
  )
}

export default ProductDetails;