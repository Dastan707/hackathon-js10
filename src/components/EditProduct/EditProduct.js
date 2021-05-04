import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../contexts/ProductContext';
import './EditProduct.css'

const EditProduct = (props) => {

    const { productToEdit, saveProduct } = useContext(productContext)
    const [newEditItem, setEditItem] = useState(productToEdit)

    useEffect(() => {
        setEditItem(productToEdit)
    }, [productToEdit])

    function handleEditInputTitle(e){
        let newEditedProduct = {
            ...newEditItem,
            title: e.target.value
        }
        // console.log(newEditedProduct);
        setEditItem(newEditedProduct)

    } 

    function handleEditInputDescription(e){
        let newEditedProduct = {
            ...newEditItem,
            description: e.target.value
        }
        setEditItem(newEditedProduct)
    } 

    function handleEditInputImage(e){
        let newEditedProduct = {
            ...newEditItem,
            image: e.target.value
        }
        setEditItem(newEditedProduct)
    } 

    function handleEditInputPrice(e){
        let newEditedProduct = {
            ...newEditItem,
            price: e.target.value
        }
        setEditItem(newEditedProduct)
    } 

    function handleEditInputCategory(e){
        let newEditedProduct = {
            ...newEditItem,
            category: e.target.value
        }
        setEditItem(newEditedProduct)
    } 

    return (
        <div className='inps-edit'>
            <input className='inp-edit' type='text' name='title' value={newEditItem.title} onChange={handleEditInputTitle} placeholder='Наименование товара'/>
            <input className='inp-edit' type='text' name='description' value={newEditItem.description} onChange={handleEditInputDescription} placeholder='Описание товара'/>
            <input className='inp-edit' type='text' name='image' value={newEditItem.image} onChange={handleEditInputImage} placeholder='URL изображения'/>
            <input className='inp-edit' type='text' name='price' value={newEditItem.price} onChange={handleEditInputPrice} placeholder='Цена товара'/>
            <input className='inp-edit' type='text' name='price' value={newEditItem.category} onChange={handleEditInputCategory} placeholder='Категория'/>
            <button className='btn-edit' onClick={() => saveProduct(newEditItem, props.history)}>Save</button>
        </div>
    );
};

export default EditProduct;