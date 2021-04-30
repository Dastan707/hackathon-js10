import { Grid, Paper, makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { productContext } from '../../contexts/ProductContext';
import ProductsList from '../ProductsList/ProductsList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))

const Content = () => {
    const history = useHistory();
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState(getSearchValue());
    const { getProducts } = useContext(productContext)


    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search);
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchValue(e.target.value)
        getProducts(history)
    }

    function getSearchValue(){
        const search = new URLSearchParams(history.location.search);
        return search.get('q')
    }

    return (
        <Grid item md={9}>
            <Paper className={classes.paper}>
                <ProductsList />
            </Paper>
            <input onChange={handleValue} value={searchValue} type='text' />
        </Grid>
    );
};

export default Content;
