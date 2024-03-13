import { NavLink } from 'react-router-dom';
import { Nav, NavList, NavListItem, NavBadge } from './navbar.style';
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink to="/">Inicio</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/products">Productos</NavLink>
        </NavListItem>
      </NavList>

      <NavList>
        <NavListItem>
          <NavLink to="/cart">
            <FaCartShopping size={25} />
          </NavLink>
          {cart && cart.length > 0 && (
            <NavBadge>{cart.length}</NavBadge>
          )}
        </NavListItem>
      </NavList>
    </Nav>
  )
}
