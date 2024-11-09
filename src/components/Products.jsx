import React, {useState, useEffect} from 'react';
import '../style/Products.css';
import { Button } from "../components/ui/button";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setProducts(prevProducts => [...prevProducts, ...data.products]);
    };
    fetchProducts();
  }, [skip]);

  const loadMore = () => {
    setSkip(prevSkip => prevSkip + limit);
  };
  
  return (
    <div className='products-wrapper text-[#404040]'>
      <h1 className='text-3xl mt-[30px] flex justify-center'>Products</h1>
      <ul className='products-grid'>
        {products.map((product)=>(
          <li key={product.id} className='products-item m-[30px] flex flex-col text-center items-center bg-white font-bold '>
            <h2 className='mt-[30px] text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>{product.title}</h2>
            <p className='mt-[5px]'>Price: {product.price}$</p>
            <img src={product.thumbnail} alt={product.title} className='mt-[10px]'/>
          </li>
        ))}
      </ul>
      <Button variant="secondary" className='flex m-[auto] shadow-md mb-[40px] bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 ' onClick={loadMore}>Load More</Button>
      </div>
  )
}
