import PropTypes from 'prop-types';
import { ItemContainer, ItemHeader, ItemBody, ItemFooter } from './item.style';
import { Button } from '../Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import formatPrice from '../../utils/formatPrice';

export const Item = ({ item, onAddCart, onRemoveCart }) => {
    const { cart } = useContext(CartContext);

    return (
        <ItemContainer>
            <ItemHeader>
                <img src={item.image} alt={item.title} />
            </ItemHeader>
            <ItemBody>
                <h3 className='item-title'>{item.title}</h3>
                <span className='item-price'>{formatPrice(item.price)}</span>
                <p className='item-description' title={item.description}>{item.description}</p>
            </ItemBody>

            <ItemFooter>
                {cart.some(product => product.id === item.id)
                    ?
                    <div onClick={onRemoveCart}>
                        <Button
                            type="button"
                            variant="outline"
                            size="full"
                        >
                            Elminar del carrito
                        </Button>
                    </div>
                    :
                    <div onClick={onAddCart}>
                        <Button
                            type="button"
                            variant="flat"
                            size="full"
                        >
                            Agregar al carrito
                        </Button>
                    </div>
                }
            </ItemFooter>
        </ItemContainer>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddCart: PropTypes.func,
    onRemoveCart: PropTypes.func
}
