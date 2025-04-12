import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito ({cartItems?.length ?? 0})</Link> { }
    </nav>
  );
};

export default Navbar;

