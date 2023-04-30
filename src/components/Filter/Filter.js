import React from 'react'

import "./Filter.css"
import Button from '../Button/Button'

export default function Filter({keyword, setKeyword, minPrice, setMinPrice, maxPrice, setMaxPrice, calculateResults}) {
  return (
    <div className='filter-container'>
      <h3>Keyword Search:</h3>
      <input
      className='search-input'
      type="text"
      id="keyword"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      />
      <h3>Pricing: </h3>
      <h5>Min Price</h5>
      <input
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      />
      <h6>Max Price</h6>
      <input
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Button butonMetni="Search Products" onClick={calculateResults} />
    </div>
  )
}
