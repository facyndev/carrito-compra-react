import { useContext } from "react"
import {
    CartContainer,
    CartBody,
    CartContent,
    CartContentFooter,
    CartDivider,
    CartList,
    CartListItem
} from "./cart.styles"
import { CartContext } from "../../context/CartContext"
import { Button } from '../../components/Button';
import formatPrice from '../../utils/formatPrice';

export const Cart = () => {
    const { cart, removeCart, increaseCart, decreaseCart } = useContext(CartContext);
    const total = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="page-wrapper">
            <CartContainer>
                <CartBody>
                    <h1>Carrito</h1>
                    <p>Realiza la compra de tu carrito.</p>
                </CartBody>
                <CartContent>
                    <h3>Listado {cart.length > 0 ? `(${cart.length})` : ''}</h3>
                    <CartDivider />
                    <CartList>
                        {cart.length ?
                            cart.map((product) => (
                                <CartListItem key={product.id}>
                                    <div className="delete-button" onClick={() => removeCart(product.id)}>X</div>
                                    <img src={product.image} alt={product.title} />
                                    <div className="cartlist">
                                        <h4 className="cartlist-title" title={product.title}>{product.title}</h4>
                                        <span className="cartlist-price">{formatPrice(product.price)}</span>
                                        <div className="cartlist-quantity">
                                            <div onClick={() => decreaseCart(product)}>
                                                <Button type="button" variant="flat">-</Button>
                                            </div>
                                            <span>{product.quantity}</span>
                                            <div onClick={() => increaseCart(product)}>
                                                <Button type="button" variant="flat">+</Button>
                                            </div>
                                        </div>
                                    </div>
                                </CartListItem>
                            ))
                            :
                            <p className="empty-cart">No hay productos en el carrito.</p>
                        }
                    </CartList>
                    <CartContentFooter>
                        <div>
                            <span>
                                <b>Total</b>
                            </span>
                            <span>{formatPrice(total())}</span>
                        </div>
                        <Button
                            type="button"
                            variant="flat"
                            size="full"
                        >
                            Pagar
                        </Button>
                    </CartContentFooter>
                </CartContent>
            </CartContainer>
        </div>
    )
}
