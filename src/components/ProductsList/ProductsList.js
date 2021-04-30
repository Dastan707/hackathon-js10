import React, { useContext, useEffect } from 'react';
import { productContext } from '../../contexts/ProductContext';
import ProductCard from '../ProductsCard/ProductsCard'
import { Grid } from '@material-ui/core'

const ProductsList = () => {
    const { getProducts, productsData } = useContext(productContext)

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
        <Grid container spacing ={3}>
            {productsData.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </Grid>
        </>
    );
};

export default ProductsList;