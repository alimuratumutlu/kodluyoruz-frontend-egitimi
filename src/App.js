import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

import { useCallback, useEffect, useState } from 'react';

// 3 temel: JSX - JavaScript içerisinde HTML , Props - Bileşenlere gönderilen bilgi , State

function App() {
  const [cartItems, setCartItems] = useState([])
  const [data, setData] = useState([])

  const [keyword, setKeyword] = useState("")

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  function handleAddToCart(item) {
    const isExist = cartItems.find(element => element.title === item.title);
    if (isExist) {
      setCartItems(prevItems => prevItems.map(element => element.title === item.title ? { ...element, count: element.count + 1 } : element))
    } else {
      setCartItems(prevItems => [...prevItems, { ...item, count: 1 }])
    }
  }

  useEffect(() => {
    setFilteredData(data)
  }, [data])


  const calculateResults = useCallback(() => {

    // Elimizdeki data kopyasını aldık
    let dataToBeFiltered = data;

    // Eğer arama kelimesi varsa bununla ilgili ilk filtereleme işlemi yapıldı
    if (keyword.length > 2) {
      dataToBeFiltered = dataToBeFiltered.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
    }

    // Eğer minPrice varsa bunun için filtereleme işlemi uyguladı
    if (minPrice > 0) {
      dataToBeFiltered = dataToBeFiltered.filter(item => item.price > minPrice)
    }

    // Eğer maxPrice varsa bunun için filtereleme işlemi uyguladı
    if (maxPrice > 0) {
      dataToBeFiltered = dataToBeFiltered.filter(item => item.price <= maxPrice)
    }

    setFilteredData(dataToBeFiltered)

  }, [data, keyword, minPrice, maxPrice])

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <div className='main'>
        <Filter keyword={keyword} setKeyword={setKeyword} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} calculateResults={calculateResults} />
        <div className='product-container'>
          {
            filteredData?.map(element => {
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