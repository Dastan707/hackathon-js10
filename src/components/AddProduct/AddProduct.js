import React, { useState, useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';
import './AddProducts.css'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '50px',
        marginTop: '30px',
    },
}));


const AddProduct = () => {
    const classes = useStyles();

    const [product, setProduct] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        category: ''
    });


    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(newProduct)
        console.log(newProduct);
    }

    const handleClick = () => {
        postProduct(product)
        setProduct({
            title: '',
            description: '',
            image: '',
            price: '',
            category: '',
        })
    }


    // function handleClickBreadCrumps(event, history) {
    //     event.preventDefault();
    //     history.push('/')
    // }
    const { postProduct } = useContext(productContext)

    return (
        <>
            <div className={classes.root}>
                <Breadcrumbs aria-label="breadcrumb">
                    {/* <Link color="inherit" href="/" onClick={() => handleClickBreadCrumps(history)}>
                        Home
                </Link> */}
                    <Link to='/' >
                        <Typography>Home</Typography>
                    </Link>

                    <Typography color="textPrimary">Add Product</Typography>
                </Breadcrumbs>
            </div>
            <div className='inps'>
                <input className='inp-add' type='text' name='title' value={product.title} onChange={handleValues} placeholder='Наименование товара' />
                <input className='inp-add' type='text' name='description' value={product.description} onChange={handleValues} placeholder='Описание товара' />
                <input className='inp-add' type='text' name='image' value={product.image} onChange={handleValues} placeholder='URL изображения' />
                <input className='inp-add' type='text' name='price' value={product.price} onChange={handleValues} placeholder='Цена товара' />
                <form className='category-form'>

                    <label>
                        Выберите категорию :
            </label><br></br>
                    <label>
                        Бег
            </label>
                    <input
                        type="radio"
                        name="category"
                        value="Бег"

                        onChange={handleValues}
                    /> <br></br>
                    <label>
                        Футбол
            </label>
                    <input
                        type="radio"
                        name="category"
                        value="Футбол"

                        onChange={handleValues}
                    /> <br></br>
                    <label>
                        Баскетбол
            </label>
                    <input
                        type="radio"
                        name="category"
                        value="Баскетбол"

                        onChange={handleValues}
                    />
                </form>
                <button className='btn-add' onClick={handleClick}>Добавить товар</button>
            </div>
        </>
    );
};

export default AddProduct;