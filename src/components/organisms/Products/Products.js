import React from 'react'
import Product from '../../molecules/Product/Product';


export default function Products({ filteredData }) {
    return (
        <div className='product-container'>
            {
                filteredData?.map(element => {
                    return (
                        <Product key={element.id} urunAdi={element.title} aciklama={element.description} fiyat={element.price} kategori={element.category} urunResmi={element.thumbnail} />
                    )
                })
            }
        </div>
    )
}
