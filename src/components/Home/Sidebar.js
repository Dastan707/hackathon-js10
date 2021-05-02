import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { productContext } from '../../contexts/ProductContext';

const Sidebar = ({ history }) => {
  const { getProducts } = useContext(productContext)
  const [memory, setMemory] = useState(getMemory());

  function getMemory(){
    const search = new URLSearchParams(history.location.search);
    return search.get('category');
}
const handleChangeMemory = (e) => {
    if (e.target.value === "all") {
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
    <FormControl component="fieldset">
      <FormLabel component="legend">Категория</FormLabel>
      <RadioGroup aria-label="memory" name="memory1" value={memory} onChange={handleChangeMemory}>
        <FormControlLabel value="Бег" control={<Radio />} label="Бег" />
        <FormControlLabel value="Футбол" control={<Radio />} label="Футбол" />
        <FormControlLabel value="Баскетбол" control={<Radio />} label="Баскетбол" />
        <FormControlLabel value="all" control={<Radio />} label="all" />
      </RadioGroup>
    </FormControl>
  );
}
export default Sidebar;
