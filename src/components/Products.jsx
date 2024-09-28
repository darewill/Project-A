import React, {useState, useEffect} from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=5');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: {product.price}$</p>
            <img src={product.thumbnail} alt={product.title} className='w-[100px]'/>
          </li>
        ))}
      </ul>
    </div>
  )
}
