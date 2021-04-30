import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../contexts/ProductContext';

const EditProduct = (props) => {
    // const { getProductsDetails, saveProduct, productDetails } = useContext(productContext);
    // const [editedProduct, setEditedProduct] = useState({});

    
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
            img: e.target.value
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

    

  

    // const  handleValue = (e) => {
    //     let newProduct = {
    //         ...editedProduct,
    //         [e.target.name] : e.target.value
    //     }
    //     console.log(editedProduct)
    //     console.log(newProduct);
    //     setEditedProduct(newProduct)
    // }

    // const handleSave = () => {
    //     saveProduct(props.match.params.id, editedProduct)
    // }

    // useEffect(() => {
    //     getProductsDetails(props.match.params.id)
    // }, [])

    return (
        <div>
            <input className='inp-add' type='text' name='title' value={newEditItem.title} onChange={handleEditInputTitle} placeholder='Наименование товара'/>
            <input className='inp-add' type='text' name='description' value={newEditItem.description} onChange={handleEditInputDescription} placeholder='Описание товара'/>
            <input className='inp-add' type='text' name='img' value={newEditItem.img} onChange={handleEditInputImage} placeholder='URL изображения'/>
            <input className='inp-add' type='text' name='price' value={newEditItem.price} onChange={handleEditInputPrice} placeholder='Цена товара'/>
            <button onClick={() => saveProduct(newEditItem, props.history)}>Save</button>
        </div>
    );
};

export default EditProduct;