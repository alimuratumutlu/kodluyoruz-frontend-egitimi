import React from 'react'

import "./Product.css"
import Button from '../Button/Button'

export default function Product({urunAdi, fiyat, kategori,urunResmi}) {
  return (
    <div className='product-card-container'>
        <span className='product-cateogry' >{kategori}</span>
        <img src={urunResmi} className='thumbnail' />
        <div className='product-title'>{urunAdi}</div>
        <Button butonMetni={fiyat} />
    </div>
  )
}
