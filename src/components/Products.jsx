import React, {useState, useEffect} from 'react';
import '../style/Products.css';
import { Button } from "@/components/ui/button";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 8);
  };
  
  return (
    <div className='products-wrapper text-[#eeece2]'>
      <h1 className='text-3xl mt-[30px] flex justify-center'>Products</h1>
      <ul className='products-grid'>
        {products.slice(0,visible).map((product)=>(
          <li key={product.id} className='products-item m-[30px] flex flex-col text-center items-center bg-[#171717] font-bold '>
            <h2 className='mt-[30px] text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>{product.title}</h2>
            <p className='mt-[5px]'>Price: {product.price}$</p>
            <img src={product.thumbnail} alt={product.title} className='mt-[10px]'/>
          </li>
        ))}
      </ul>
      {visible < products.length && (
      <Button variant="secondary" className='flex m-[auto] mb-[40px] bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 ' onClick={showMore}>Load More</Button>
      )}
      </div>
  )
}
