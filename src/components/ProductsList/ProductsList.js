import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../contexts/ProductContext';
import ProductCard from '../ProductsCard/ProductsCard'
import { Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom'

const ProductsList = () => {
    // const { getProducts, productsData } = useContext(productContext)
    const { getProductsData, productsData, paginationPages } = useContext(productContext)
    const history = useHistory()

    function getPage() {
        const search = new URLSearchParams(history.location.search)
        // console.log(history);
        return search.get('_page')
    }
    const [page, setPage] = useState(getPage())
    const handlePage = (event, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getProductsData(history)
    }

    useEffect(() => {
        getProductsData(history)}, []
    )

    // useEffect(() => {
    //     getProducts()
    // }, [])
    return (
        <>
        <Grid container spacing ={3}>
            {productsData.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </Grid>
        <Pagination page={+page} onChange={(event, page) => {handlePage(event, page)}} count={paginationPages} color="primary" />
        </>
    );
};

export default ProductsList;