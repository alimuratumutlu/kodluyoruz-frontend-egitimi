import React from 'react'

import "./Product.css"
import Button from '../Button/Button'

export default function Product({urunAdi, aciklama, fiyat, kategori,urunResmi, handleAddToCart}) {
  return (
    <div className='product-card-container'>
      <div className='info-section' >
        <span className='product-cateogry' >{kategori}</span>
        <img alt={urunAdi} src={urunResmi} className='thumbnail' />
        <div className='product-title'>{urunAdi}</div>
        <div className='product-description' >{aciklama}</div>
      </div>
      <Button onClick={() => handleAddToCart({title: urunAdi})} butonMetni={"Add To Cart"} />
    </div>
  )
}
