import React, {useState, useEffect} from 'react';
import '../style/Products.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=16');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  
  return (
    <div className='products-wrapper'>
      <h1 className='text-3xl text-white mt-[30px] flex justify-center'>Products</h1>
      <ul className='products-grid'>
        {products.map((product)=>(
          <li key={product.id} className='products-item m-[30px] flex flex-col text-center items-center bg-[#171717] text-white font-bold '>
            <h2 className='mt-[30px] text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>{product.title}</h2>
            <p className='mt-[5px]'>Price: {product.price}$</p>
            <img src={product.thumbnail} alt={product.title} className='mt-[10px]'/>
          </li>
        ))}
      </ul>
    </div>
  )
}
