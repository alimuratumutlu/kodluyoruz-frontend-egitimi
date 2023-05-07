import { useSelector } from 'react-redux'

import './App.css';
import Filter from './components/organisms/Filter/Filter';
import Header from './components/organisms/Header/Header';

import { useCallback, useEffect, useState } from 'react';
import Products from './components/organisms/Products/Products';

// 3 temel: JSX - JavaScript içerisinde HTML , Props - Bileşenlere gönderilen bilgi , State

function App() {
  const cartItems = useSelector(state => state.cartList.cartItems)

  const [data, setData] = useState([])

  const [keyword, setKeyword] = useState("")

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const [selectedCategories, setSelectedCategories] = useState([])

  // Alternatif yöntem
  // const [filterCategories, setFilterCategories] = useState([{name: "smartphones", selected: false}, {name: "laptops", selected: false}])

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  function handleCategoryFilter(category) {
    const isCategoryExists = selectedCategories.includes(category)
    if (isCategoryExists) {
      setSelectedCategories(selectedCategories => selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories(selectedCategories => [...selectedCategories, category])
    }

    console.log("handleCategoryFilter")
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

    if (selectedCategories.length > 0) {
      // dataToBeFiltered = dataToBeFiltered.filter(item =>  selectedCategories.some(selectedCategory => selectedCategory === item.category))
      dataToBeFiltered = dataToBeFiltered.filter(item => selectedCategories.includes(item.category))
    }

    setFilteredData(dataToBeFiltered)

  }, [data, keyword, minPrice, maxPrice, selectedCategories])

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <div className='main'>
        <Filter keyword={keyword} setKeyword={setKeyword} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} calculateResults={calculateResults} handleCategoryFilter={handleCategoryFilter} selectedCategories={selectedCategories} />
        <Products filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;