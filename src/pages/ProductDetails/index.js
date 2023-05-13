import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Grid, Text } from '@mantine/core';

import Header from '../../components/organisms/Header/Header';

import "../../styles/ProductDetailsPage.css"

export default function ProductDetails() {
    const [currentProduct, setCurrentProduct] = useState()

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((res) => res.json())
            .then((json) => setCurrentProduct(json));
    }, [productId]);

    return (
        <>
            <Header />
            <Container className='product-page-container' >
                {
                    currentProduct && (<Grid>
                        <Grid.Col span={4} sx={{ border: "2px solid orange" }} >
                            <img src={currentProduct?.images[0]} style={{ maxWidth: 200 }} />
                        </Grid.Col>
                        <Grid.Col span={8} sx={{ border: "2px solid red" }}>
                            <Text tt="uppercase" size="xl" align='justify'>{currentProduct?.title}</Text>
                            <Text fz="md" c="dimmed" align='justify'>{currentProduct?.description}</Text>
                        </Grid.Col>
                    </Grid>)
                }

            </Container>

        </>
    )
}
