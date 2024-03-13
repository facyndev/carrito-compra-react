import PropTypes from 'prop-types';
import { createContext, useReducer } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer((state = [], action = {}) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload]
            case 'remove':
                return state.filter(item => item.id !== action.payload)
            case 'increase':
                return state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            case 'decrease':
                return state.map(item => {
                    if (item.id === action.payload.id) {
                        if (item.quantity === 1) return { ...item, quantity: item.quantity }
                        else return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                })
            default:
                return state;
        }
    }, []);

    const addCart = (item) => {
        dispatch({ type: 'add', payload: item })
    }

    const removeCart = (id) => {
        dispatch({ type: 'remove', payload: id })
    }

    const increaseCart = (item) => {
        dispatch({ type: 'increase', payload: item })
    }

    const decreaseCart = (item) => {
        dispatch({ type: 'decrease', payload: item })
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addCart,
                removeCart,
                increaseCart,
                decreaseCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}