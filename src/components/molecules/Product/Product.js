import React from 'react'

import "./Product.css"
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'

export default function Product({urunAdi, aciklama, fiyat, kategori,urunResmi, handleAddToCart}) {
  return (
    <div className='product-card-container'>
      <div className='info-section' >
        <span className='product-cateogry' >{kategori}</span>
        <Image imageAlt={urunAdi} imagePath={urunResmi} />
        <div className='product-title'>{urunAdi}</div>
        <div className='product-description' >{aciklama}</div>
      </div>
      <Button onClick={() => handleAddToCart({title: urunAdi})} butonMetni={"Add To Cart"} />
    </div>
  )
}
