import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../contexts/ProductContext';
import ProductCard from '../ProductsCard/ProductsCard'
import { Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
        height: '100%',

    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
    }
}));


const ProductsList = () => {
    const classes = useStyles();
    const { productsData, paginationPages, getProducts } = useContext(productContext)
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
        getProducts(history)
    }

    useEffect(() => {
        getProducts(history)
    }, [])
    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">

                <Grid container spacing={4}>
                    {productsData.map(item => (
                        <Grid xs={12} sm={6} md={4}>
                            <CardContent className={classes.cardContent}>
                                <ProductCard key={item.id} item={item} />
                            </CardContent>
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    className={classes.pagination}
                    page={+page}
                    onChange={(event, page) => { handlePage(event, page) }}
                    count={paginationPages}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </Container>
        </>
    );
};

export default ProductsList;