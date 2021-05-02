import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Sidebar from './Sidebar';


const Home = (props) => {
    return (
        <Grid container>
            <Sidebar {...props} />
            <Content/>
        </Grid>
    );
};

export default Home;