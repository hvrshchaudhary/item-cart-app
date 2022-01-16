import React from 'react'
import Product from './Product.js';

function ProductList(props) {
    return (
        <>
            {props.productList.map((product,i)=>{
                return(
                    <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
                )
            })}
        </>
    )
}

export default ProductList
