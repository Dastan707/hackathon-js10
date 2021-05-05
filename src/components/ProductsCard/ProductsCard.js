import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './ProductsCard.css'
import { productContext } from '../../contexts/ProductContext';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%'
  },
  media: {
    height: 140,
    textAlign: 'center'
  }
});

export default function ProductCard({ item }) {
  const classes = useStyles();
  const { deleteProduct, editProduct, addProductToCart,checkProductInCart } = useContext(productContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/details/${item.id}`}>
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description.slice(0, 200)}...
          </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to='/edit'>
          <Button onClick={() => editProduct(item.id)} size="small" color="primary">
            Edit
        </Button>
        </Link>
        <Button  onClick={() => addProductToCart(item)} color={checkProductInCart(item.id)? 'secondary' : 'primary'} size="small" color="primary">
          Add to cart
        </Button>
        <Button onClick={() => deleteProduct(item.id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
