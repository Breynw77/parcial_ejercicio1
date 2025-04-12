import { Link } from 'react-router-dom';
import '../styles/ProductCard.scss';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`}>Ver detalles</Link>
  </div>
);

export default ProductCard;
