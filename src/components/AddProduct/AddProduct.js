import React, { useState, useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        img: '',
        price: '',
        gender: '',
        size:''
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
            img: '',
            price: '',
            gender: '',
            size:''

        })
    }
const { postProduct } = useContext(productContext)

    return (
        <div className='inps'>
            <input className='inp-add' type='text' name='title' value={product.title} onChange={handleValues} placeholder='Наименование товара'/>
            <input className='inp-add' type='text' name='description' value={product.description} onChange={handleValues} placeholder='Описание товара'/>
            <input className='inp-add' type='text' name='img' value={product.img} onChange={handleValues} placeholder='URL изображения'/>
            <input className='inp-add' type='text' name='price' value={product.price} onChange={handleValues} placeholder='Цена товара'/>
            <select value={product.gender}>
                <option>Man</option>
                <option>Woman</option>
            </select>
            <input className='inp-add' type='number' name='size' value={product.size} onChange={handleValues}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProduct;