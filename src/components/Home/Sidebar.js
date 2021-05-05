import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { productContext } from '../../contexts/ProductContext';
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
  },
  paper: {
    // marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
}));

const Sidebar = ({ history }) => {
  const classes = useStyles();

  const { getProducts } = useContext(productContext)
  const [memory, setMemory] = useState(getMemory());

  function getMemory() {
    const search = new URLSearchParams(history.location.search);
    return search.get('category');
  }
  const handleChangeMemory = (e) => {
    if (e.target.value === "Все") {
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      return;
    }

    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setMemory(e.target.value)
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <Paper className={classes.paper}>
          <FormLabel component="legend">Категория</FormLabel>
          <RadioGroup aria-label="memory" name="memory1" value={memory} onChange={handleChangeMemory}>
            <FormControlLabel value="Бег" control={<Radio />} label="Бег" />
            <FormControlLabel value="Футбол" control={<Radio />} label="Футбол" />
            <FormControlLabel value="Баскетбол" control={<Radio />} label="Баскетбол" />
            <FormControlLabel value="Все" control={<Radio />} label="Все" />
          </RadioGroup>
        </Paper>
      </FormControl>
    </div>
  );
}
export default Sidebar;
