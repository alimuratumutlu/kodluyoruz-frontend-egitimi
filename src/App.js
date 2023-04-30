import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

import { useEffect, useState } from 'react';

// 3 temel: JSX - JavaScript içerisinde HTML , Props - Bileşenlere gönderilen bilgi , State

function App() {
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  function handleAddToCart(item) {
    setCartItems(cartItems => [...cartItems, item])
    console.log("handleAddToCart çalıştı", cartItems)
  }

  return (
    <div className="App">
        <Header cartItems={cartItems} />
        <div className='main'>
          <Filter />
          <div className='product-container'>
          {
              data.map(element => {
                return (
                  <Product key={element.id} urunAdi={element.title} aciklama={element.description} fiyat={element.price} kategori={element.category} urunResmi={element.thumbnail} handleAddToCart={handleAddToCart} />
                )
              })
          }  
          </div>
        </div>
    </div>
  );
}

export default App;