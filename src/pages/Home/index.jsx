import { Link } from 'react-router-dom';
import { HomeContainer } from "./home.styles"
import { Button } from '../../components/Button';

export const Home = () => {
    return (
        <div className="page-wrapper">
            <HomeContainer>
                <h1>Carrito de Compras</h1>
                <p>¡Obten ya tu producto!</p>
                <Button
                    type="button"
                    variant="flat"
                    size="min"
                >
                    <Link to="/products">
                        Ir a Productos
                    </Link>
                </Button>
                <span>Proyecto realizado por <Link to="https://www.facyn.xyz" target="_blank">Facyn</Link></span>
            </HomeContainer>
        </div>
    )
}
