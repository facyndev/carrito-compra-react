import { ProductsContainer } from "./products.style"
import { Item } from "../../components/Item"
import { useContext } from "react";
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from "../../context/CartContext";
import { Loader } from "../../components/Loader";

export const Products = () => {
    const { products, loading } = useContext(ProductsContext)
    const { addCart, removeCart } = useContext(CartContext);

    return (
        <div className="page-wrapper">
            <h1>Listado de productos.</h1>
            Buscador. + Filtrador. (por params)

            {loading && products.length === 0
                ?
                <Loader />
                :
                <ProductsContainer>
                    {products.map((product) => (
                        <Item
                            key={product.id}
                            item={product}
                            onAddCart={() => addCart({ ...product, quantity: 1 })}
                            onRemoveCart={() => removeCart(product.id)}
                        />
                    ))}
                </ProductsContainer>
            }
        </div>
    )
}
