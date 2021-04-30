import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/constants'

export const productContext = React.createContext();

const INIT_STATE = {
    productsData: [],
    // productsDetails: null,
    productToEdit: [],
    searchData: [],
    paginationPages: 1

};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {  
        // case "GET_PRODUCTS":
        //     return {...state, productsData: action.payload };
        case "GET_PRODUCTS_DATA":
            return {...state, productsData: action.payload.data, paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4)}
        case "GET_PRODUCTS_DETAILS":
            return {...state, productsDetails: action.payload };
        case "EDIT_PRODUCT":
            return {...state, productToEdit: action.payload };
        case "SEARCH" :
            return {...state, searchData: action.payload};
        default:
            return state;
    }
}

const ProductContextProvider = ({ children }) => {


    const getProductsData = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 4)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios(`${JSON_API}?_limit=4&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS_DATA",
            payload: res
        })
    }


    function postProduct(product) {
        axios.post(`${JSON_API}`, product)
    }



    // async function getProducts() {
    //     let { data } = await axios.get(`${JSON_API}`)
    //     dispatch({
    //         type: "GET_PRODUCTS",
    //         payload: data
    //     });
    // }

    async function getProductsDetails(id) {
        let { data } = await axios.get(`${JSON_API}/${id}`)
        dispatch({
            type: "GET_PRODUCTS_DETAILS",
            payload: data
        })
    }

    const saveProduct = async (newEditedContact, history) => {
        axios.patch(`${JSON_API}/${newEditedContact.id}`, newEditedContact)
        history.push('/')
    }

    async function deleteProduct(id) {
        await axios.delete(`${JSON_API}/${id}`)
        getProductsData()
    }


    const editProduct = async (id) => {
        let { data } = await axios(`${JSON_API}/${id}`)
        // console.log(data);
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    async function search(value){
        let { data } = await axios.get(`${JSON_API}?q=${value}`)
        dispatch({
            type: "SEARCH",
            payload: data
        })
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <productContext.Provider value={{
            productsData: state.productsData,
            // productsDetails: state.productsDetails,
            productToEdit: state.productToEdit,
            searchData: state.searchData,
            postProduct,
            // getProducts,
            getProductsData,
            paginationPages: state.paginationPages,
            getProductsDetails,
            saveProduct,
            deleteProduct,
            editProduct,
            search
        }}>
            {children}
        </productContext.Provider>
    )
};
export default ProductContextProvider;