import React, { useContext, useEffect} from 'react';
import { productContext } from '../../contexts/ProductContext';
import './Cart.css'
import { CircularProgress } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
    rootCart: {
        marginLeft: '50px',
        marginTop: '30px',
    },
}));

const Cart = () => {
    const classes = useStyles();
    const { getCart, cart, changeProductCount } = useContext(productContext);

    useEffect(() => {
        getCart()
    }, [])

    return (
        <>
            <div className={classes.rootCart}>
                <Breadcrumbs aria-label="breadcrumb">
                    {/* <Link color="inherit" href="/" onClick={() => handleClickBreadCrumps(history)}>
                    Home
            </Link> */}
                    <Link to='/' >
                        <Typography>Home</Typography>
                    </Link>

                    <Typography color="textPrimary">Cart</Typography>
                </Breadcrumbs>
            </div>
            <div className='cart'>
                {cart.products ? (
                    <div className='cart-block'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Фото продукта</th>
                                    <th>Название</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Общая сумма</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.products.map(elem => (
                                    <tr key={elem.item.id}>
                                        <td>
                                            <img style={{ width: '50px' }} src={elem.item.image} alt='product-img' />
                                        </td>
                                        <td>{elem.item.title}</td>
                                        <td>{elem.item.price}</td>
                                        <td>
                                            <input
                                                type='number'
                                                value={elem.count}
                                                onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                                            />
                                        </td>
                                        <td>{elem.subPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h4>Итого: {calcTotalPrice(cart.products)} </h4>
                        <Link to='/payment'>
                        <button className='btn-cart'>Купить</button>
                        </Link>
                    </div>
                ) : (<CircularProgress />)}
            </div>
        </>

    );
};

export default Cart;