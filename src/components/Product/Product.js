import React from 'react'

import "./Product.css"
import Button from '../Button/Button'

export default function Product({urunAdi, aciklama, fiyat, kategori,urunResmi}) {
  return (
    <div className='product-card-container'>
      <div className='info-section' >
        <span className='product-cateogry' >{kategori}</span>
        <img src={urunResmi} className='thumbnail' />
        <div className='product-title'>{urunAdi}</div>
        <div className='product-description' >{aciklama}</div>
      </div>
        <Button butonMetni={fiyat} />
    </div>
  )
}
