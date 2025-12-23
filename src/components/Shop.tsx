//imports
import './Shop.css'

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  supply: number;
};

import { useEffect, useState } from 'react';

function Shop() {

  /* 
  
  <div className="shop-box">
        <div className='flex-box'>
          <div className='row1'>
            <div className="img"></div>
          </div>
          <div className='row2'>
            <p>ThisIsAFakeName</p>
            <p>Price</p>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
  
  */

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <>
    <div className='flex'>
      {items.map(item => (
        <div className='shop-box' key={item.id}>
          <div className='flex-box'>
            <img src={`/assets/${item.image}`} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Stock: {item.supply}</p>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default Shop;