import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductsItem } from './pages/ProductsItem';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </ProductsProvider>
  )
}
