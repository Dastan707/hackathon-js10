import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Sidebar from './Sidebar';
// import Middle from '../Middle/Middle'


const Home = (props) => {
    return (
        <Grid container>
            <Sidebar {...props} />
            <Content/>
            {/* <Middle /> */}
        </Grid>
    );
};

export default Home;