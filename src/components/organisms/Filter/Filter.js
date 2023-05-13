import React, { useCallback } from 'react'
import { Button, Card, TextInput, Input, MantineProvider } from '@mantine/core'

import { useSelector, useDispatch } from 'react-redux'

import FilterElement from '../../molecules/FilterElement/FilterElement'

import { updateKeyword, updateMinPrice, updateMaxPrice } from "./FilterSlice"

import "./Filter.css"

export default function Filter({ calculateResults, handleCategoryFilter, selectedCategories }) {

  const dispatch = useDispatch()

  const keyword = useSelector(state => state.filterList.keyword)
  const minPrice = useSelector(state => state.filterList.minPrice)
  const maxPrice = useSelector(state => state.filterList.maxPrice)
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
    <Card withBorder radius="md" shadow="sm" p="md" className='filter-container'>

      <FilterElement >
        <TextInput
          label="Keyword Search"
          placeholder="Search Keyword"
          description="Please enter a key to search in products"
          onChange={(e) => dispatch(updateKeyword(e.target.value))}
          value={keyword}
        />
      </FilterElement>

      <FilterElement>

        <Input.Label>Minimum Price</Input.Label>
        <Input.Description>Please enter a minimum price</Input.Description>
        <Input
          mt="xs"
          placeholder="500"
          value={minPrice}
          onChange={(e) => dispatch(updateMinPrice(e.target.value))}
        />


        <Input.Label mt="lg" >Maximum Price</Input.Label>
        <Input.Description>Please enter a maximum price</Input.Description>
        <Input
          mt="xs"
          placeholder="5000"
          value={maxPrice}
          onChange={(e) => dispatch(updateMaxPrice(e.target.value))}
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
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 60 }} onClick={calculateResults}>Search Products</Button>

    </Card>
  )
}
