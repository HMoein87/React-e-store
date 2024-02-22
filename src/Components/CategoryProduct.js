import React from 'react'

import { Link, useNavigate } from 'react-router-dom';

const CategoryProduct = ({id, title, image, specs, features, price, stock}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className='category-product-title'>
            <Link to={`products/${id}`}>{title}</Link>
        </div>

        <article>
            <figure className='category-product-item'>
                <div className='category-product-image-container'>
                    <img className='product-image' src={`./assets/${image}`} alt={title}/>
                </div>
            </figure>
            
            <aside className='caegory-product-spec category-product-item'>
                <div className='category-product-info-dimesnions'>
                    <h3>Dimensions</h3>
                    <label className='dimension'>{specs.dimensions}</label>
                </div>

                {specs.capacity &&
                <div className='category-product-info-capacity'>
                    <h3>Capacity</h3>
                    <label>{specs.capacity}</label>
                </div>
                }

                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {features?.map((f, i) => {
                            return <li key={`feature_${i}`}>{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='category-product-finance category-product-item'>
                <div className='category-product-price'>
                &#36;CAD {price}
                </div>

                <div className='category-product-info-stock'>
                    <label>Stock Level: {stock}</label>
                    <label>Free Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button onClick={() => {navigate(`products/${id}`)}}>View Product</button>
                    <button>Add to Cart</button>
                </div>
            </aside>
        </article>
    </>
  )
}

export default CategoryProduct;