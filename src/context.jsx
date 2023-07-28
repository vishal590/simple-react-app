import React,{useContext, useEffect, useReducer} from 'react'
import {reducer} from './reducer'

const AppContext = React.createContext();

const API = 'https://dummyjson.com/products';
// const API = 'https://jsonplaceholder.typicode.com/albums';

const initialState = {
    name: '',
    image: '',
    services: [],
}


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: 'HOME_UPDATE',
            payload: {
                name: 'Akshay',
                image: './images/hero.svg',
            }
        })
    }
    
    const updateAboutPage = () => {
        return dispatch({
            type: 'ABOUT_UPDATE',
            payload: {
                name: 'XYZ',
                image: './images/about1.svg',
            }
        })
    };

    const getServices = async(url) => {
        try{    
            const res = await fetch(url);
            const data = await res.json()
            const {products} = data
            dispatch({
                type: 'GET_SERVICES',
                payload: products
            })
        }catch(error){
            console.log(error)
        }
    }


    useEffect(() => {
        getServices(API)
    },[])



    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};