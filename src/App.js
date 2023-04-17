import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Product from './components/Product/Product';


// 3 temel: JSX - JavaScript içerisinde HTML , Props - Bileşenlere gönderilen bilgi , State

function App() {

  const urunler = [
    {
      ad: "Tornavida",
      kategori: "Hırdavat",
      fiyat: 25,
      image: "https://www.rtrmax.com/wp-content/uploads/2020/06/duz-tornavida-e1609934778252.jpg"
    },
    {
      ad: "Testere",
      kategori: "Hırdavat",
      fiyat: 120,
      image: "https://www.rtrmax.com/wp-content/uploads/2020/06/pala-testere.jpg"
    },
    {
      ad: "Bıçak",
      kategori: "Mutfak",
      fiyat: 50,
      image: "https://productimages.hepsiburada.net/s/87/375/110000029491109.jpg"
    }
  ]


  
 
  return (
    <div className="App">
        <Header />
        <div className='main'>
          <Filter />
          <div className='product-container'>

          {
              urunler.map(element => {
                return (
                  <Product urunAdi={element.ad} fiyat={element.fiyat} kategori={element.kategori} urunResmi={element.image} />
                )
              })
          }  

          </div>
        </div>
    </div>
  );
}

export default App;