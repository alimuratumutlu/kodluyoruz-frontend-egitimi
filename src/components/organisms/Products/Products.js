import React from 'react'
import { ProductCard } from '../../molecules/ProductCard/ProductCard';

import { Grid } from '@mantine/core';

import "./Products.css"

export default function Products({ filteredData }) {
    return (
        <Grid className='product-container'>
            {
                filteredData?.map(element => {
                    return (
                        <Grid.Col key={element.id} span={3}>
                            <ProductCard urunId={element.id} urunAdi={element.title} aciklama={element.description} fiyat={element.price} kategori={element.category} urunResmi={element.thumbnail} />
                        </Grid.Col>
                        // <Product key={element.id} urunAdi={element.title} aciklama={element.description} fiyat={element.price} kategori={element.category} urunResmi={element.thumbnail} />
                    )
                })
            }
        </Grid>
    )
}
