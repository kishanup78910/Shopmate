
import React, { useCallback,useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFtech';

const ProductList = () => {


    const [products,setProducts] = useState([]);
    const [url,setUrl] = useState("http://localhost:8000/products");
    const [counter,setCounter]  =useState(0)

   const {data}=  useFetch(url);

    console.log(products)

    const fetchProducts =useCallback( async()=>{
        const response =await fetch(url);
        const data =  await response.json();

        setProducts(data); 
               
   },[url]);

    useEffect(()=>{
        fetchProducts();

        // fetch(url)
        // .then(response=>response.json())
        // .then (data=>setProducts(data));
    },[fetchProducts]) ; 


  return (
    <section>
     <dv className="filter">
        <button onClick={()=>setCounter(counter+1)}>{counter}</button>
     <button onClick={()=>setUrl("http://localhost:8000/products")}> All</button>
        <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}> In Stock only </button>
     </dv>
        {products.map((product)=>(
            <div className='card' key={product.id}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p className='info'>
                                <span>$ {product.price}</span>
                                <span className={product.in_stock?"Instock":"Unavailable" }>  {product.in_stock?"Instock":"UnAvailable" }</span>
                                </p>

            </div>
        ))}
    </section>
  )
}



export default ProductList
