import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/constants'

export const productContext = React.createContext();

const INIT_STATE = {
    productsData: [],
    // productsDetails: null,
    productToEdit: [],

};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {  
        case "GET_PRODUCTS":
            return { ...state, productsData: action.payload.data };
        case "GET_PRODUCTS_DETAILS":
            return { ...state, productsDetails: action.payload };
        case "EDIT_PRODUCT":
            return { ...state, productToEdit: action.payload }
        default:
            return state;
    }
}

const ProductContextProvider = ({ children }) => {

    function postProduct(product) {
        axios.post('http://localhost:8000/products', product)
    }


    async function getProducts(history) {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 4)
        history.push(`${history.location.pathname}?${search.toString()}`)

        let res = await axios.get(`${JSON_API}${window.location.search}`)

        dispatch({
            type: "GET_PRODUCTS",
            payload: res
        })
    }

    async function getProductsDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`)
        dispatch({
            type: "GET_PRODUCTS_DETAILS",
            payload: data
        })
    }

    const saveProduct = async (newEditedContact, history) => {
        axios.patch(`http://localhost:8000/products/${newEditedContact.id}`, newEditedContact)
        history.push('/')
    }

    async function deleteProduct(id) {
        await axios.delete(`http://localhost:8000/products/${id}`)
        getProducts()
    }


    const editProduct = async (id) => {
        let { data } = await axios(`http://localhost:8000/products/${id}`)
        // console.log(data);
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <productContext.Provider value={{
            productsData: state.productsData,
            // productsDetails: state.productsDetails,
            productToEdit: state.productToEdit,
            postProduct,
            getProducts,
            getProductsDetails,
            saveProduct,
            deleteProduct,
            editProduct
        }}>
            {children}
        </productContext.Provider>
    )
};
export default ProductContextProvider;