import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data)
        }

        setTimeout(() => {
            setLoading(false);
            fetchData();
        }, 1500)
    }, [])

    return (
        <ProductsContext.Provider
            value={{ products, loading }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

