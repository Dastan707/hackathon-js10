import { Grid, Paper, makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router';
import { productContext } from '../../contexts/ProductContext';
import ProductsList from '../ProductsList/ProductsList';
import './Content.css'
import { Link } from 'react-router-dom';

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
    const classes = useStyles();
    const { search, searchData } = useContext(productContext);
    const [searchValue, setSearchValue] = useState('');


    const handleValue = (e) => {
        setSearchValue(e.target.value);
        search(e.target.value);
        // console.log(e.target.value);
        // console.log(searchData);
    }

    return (
        <Grid item md={9}>
            <div className="search-item">

            <input onChange={handleValue} type='text' />
            <div className={ searchValue ? 'search-result' : 'close' }>
                                {searchData.map(item => (
                                    <Link to={`/details/${item.id}`}>
                                        <div className='search-items'>
                                            <img src={item.image} alt='images'/>
                                            {item.title}
                                        </div>
                                    </Link>
                                ))}
                                </div>
                                </div>
            <Paper className={classes.paper}>
                <ProductsList />
            </Paper>
        </Grid>
    );
};

export default Content;
