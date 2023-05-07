import React, { useCallback } from 'react'

import "./Filter.css"
import Button from '../../atoms/Button/Button'
import FilterElement from '../../molecules/FilterElement/FilterElement'

export default function Filter({ keyword, setKeyword, minPrice, setMinPrice, maxPrice, setMaxPrice, calculateResults, handleCategoryFilter, selectedCategories }) {

  const filterCategories = ["smartphones", "laptops"]

  const checkStatus = useCallback((item) => {
    return selectedCategories.includes(item)
  }, [selectedCategories])

  // Alternatif handleCategoryFilter

  /* 
  
  function handleCategoryFilter(categoryIndex) {
    setSelectedCategories(prevCategories => {
      const updatedCategories = [...prevCategories]
      updatedCategories[categoryIndex].selected = !updatedCategories[categoryIndex].selected
      return updatedCategories
    })
  }

  bu durumda 68. satır şöyle olacaktı:
    
      onChange={() => handleCategoryFilter(index)}

  */


  return (
    <div className='filter-container'>

      <FilterElement filterTitle="Keyword Search" >
        <input
          className='search-input'
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </FilterElement>

      <FilterElement filterTitle="Pricing">
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
      </FilterElement>

      <FilterElement filterTitle={"Categories"}>

        {filterCategories.map((item, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkStatus(item)}
                onChange={() => handleCategoryFilter(item)}
              />
              {item}
            </label></div>
        ))}


      </FilterElement>

      <Button butonMetni="Search Products" onClick={calculateResults} />
    </div>
  )
}
