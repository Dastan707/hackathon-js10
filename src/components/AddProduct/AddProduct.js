import React, { useState, useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';

const AddProduct = () => {
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
            [e.target.name] : e.target.value
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
const { postProduct } = useContext(productContext)

    return (
        <div className='inps'>
            <input className='inp-add' type='text' name='title' value={product.title} onChange={handleValues} placeholder='Наименование товара'/>
            <input className='inp-add' type='text' name='description' value={product.description} onChange={handleValues} placeholder='Описание товара'/>
            <input className='inp-add' type='text' name='image' value={product.image} onChange={handleValues} placeholder='URL изображения'/>
            <input className='inp-add' type='text' name='price' value={product.price} onChange={handleValues} placeholder='Цена товара'/>
            <input className='inp-add' type='text' name='category' value={product.category} onChange={handleValues} placeholder='Категория'/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProduct;