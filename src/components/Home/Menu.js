import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, Paper } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rootMenu: {
    backgroundColor: '#f0f0f0',
  },
  paperMenu: {
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
            <Link to='/cart'>
              <MenuItem>Корзина</MenuItem>
            </Link>
          </MenuList>
        </Paper>
      </FormControl>
    </div>
  );
}
export default Menu;
