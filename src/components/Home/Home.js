import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Carousel from '../Carousel/Carousel';

// import Middle from '../Middle/Middle'


const Home = (props) => {
    return (
        <Grid container>
            <Sidebar {...props} />
            <Content />
            <Menu />
            <Carousel />
            {/* <Middle /> */}
        </Grid>
    );
};

export default Home;