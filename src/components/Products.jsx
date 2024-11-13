import React, { useState, useEffect } from 'react';
import '../style/Products.css';
import { Button } from "../components/ui/button";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 8;
  const [sortOption, setSortOption] = useState(null);

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

  const sortProducts = () => {
    const sortedProducts = [...products];
    switch (sortOption) {
      case 'lowPrice':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'highPrice':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'lowStock':
        sortedProducts.sort((a, b) => a.stock - b.stock);
        break;
      case 'highStock':
        sortedProducts.sort((a, b) => b.stock - a.stock);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  return (
    <div className='products-wrapper text-[#404040]'>
      <h1 className='title text-3xl mt-[30px] flex justify-center font-semibold'>List of Your Current Selling Products</h1>

      <select onChange={(e) => setSortOption(e.target.value)} className="select-menu sort-select mt-[40px] left">
        <option value="">Sort Products</option>
        <option value="lowPrice">Price: Ascending</option>
        <option value="highPrice">Price: Descending</option>
        <option value="lowStock">Stock: Ascending</option>
        <option value="highStock">Stock: Descending</option>
      </select>

      <ul className='products-grid'>
        {sortProducts().map((product) => (
          <li key={product.id} className='products-item m-[30px] flex flex-col text-center items-center bg-white font-bold'>
            <h2 className='mt-[30px] text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]'>{product.title}</h2>
            <p className='mt-[5px]'>Price: {product.price}$</p>
            <p className='mt-[5px]'>Stock: {product.stock}</p>
            <p className='mt-[5px]'>Availability: {product.availabilityStatus}</p>
            <p className='mt-[5px]'>{product.shippingInformation}</p>
            <img src={product.thumbnail} alt={product.title} className='mt-[10px]' />
          </li>
        ))}
      </ul>

      <Button
        variant="secondary"
        className='flex m-[auto] shadow-md mb-[40px] bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2'
        onClick={loadMore}
      >
        Load More
      </Button>
    </div>
  );
}
