import React, { useContext, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { productContext } from '../../contexts/ProductContext';
import { makeStyles, Paper} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rootMenu: {


  },
  paperMenu: {
    //  padding: '25px',
    // marginRight: theme.spacing(2),
    // padding: theme.spacing(2),
    width: '170px',
    height: '150px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootMenu}>
      <FormControl component="fieldset">
        <Paper className={classes.paperMenu}>
          <MenuList>
          <Link to='/login'>
         <MenuItem>Войти</MenuItem>
          </Link>
          <Link to='/add'>
          <MenuItem>Добавить товар</MenuItem>
          </Link>
          </MenuList>
     </Paper>
      </FormControl>
    </div>
  );
}
export default Menu;
