import React, { useState, useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';
import './AddProducts.css'

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
    const { postProduct } = useContext(productContext)

    return (
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
    );
};

export default AddProduct;