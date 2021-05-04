import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/constants'
import { calcSubPrice, calcTotalPrice , getCountProductInCart} from '../helpers/calcPrice';
export const productContext = React.createContext();

const INIT_STATE = {
    productsData: [],
    // productsDetails: null,
    productToEdit: [],
    searchData: [],
    paginationPages: 1,
    cart: {},
    cartLength: getCountProductInCart()
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
        case "GET_CART" :
            return {
                ...state,
                cart: action.payload
            };
        case "CHANGE_CART_COUNT" :
            return {
                ...state,
                cartLength: action.payload
            }
            default: return state
        }
        
    }
        
        const ProductContextProvider = ({ children }) => {
            const [state, dispatch] = useReducer(reducer, INIT_STATE);


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
        console.log(data)
        dispatch({
            type: "SEARCH",
            payload: data
        })
    }

    function addProductToCart(product){ // Корзина
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }

        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        
        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length > 0 ){
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else{
            cart.products.push(newProduct)
        }

        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    function getCart(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    function changeProductCount(count, id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }


    function checkProductInCart(id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false 
    }


    return (
        <productContext.Provider value={{
            productsData: state.productsData,
            // productsDetails: state.productsDetails,
            productToEdit: state.productToEdit,
            searchData: state.searchData,
            cart: state.cart,
            cartLength: state.cartLength,
            postProduct,
            // getProducts,
            getProductsData,
            paginationPages: state.paginationPages,
            getProductsDetails,
            saveProduct,
            deleteProduct,
            editProduct,
            search,
            addProductToCart,
            getCart,
            changeProductCount,
            checkProductInCart
            
        }}>
            {children}
        </productContext.Provider>
    )
};
export default ProductContextProvider;