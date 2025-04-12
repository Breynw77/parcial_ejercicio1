import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import ErrorMessage from '../components/ErrorMessage';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true); 
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); 
      })
      .catch(() => {
        setError('No se pudo cargar el producto.');
        setIsLoading(false); 
      });
  }, [id]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />; 
  if (!product) return <ErrorMessage message="Producto no encontrado" />; 

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
      <button onClick={() => window.history.back()} className="btn-back">Volver</button>
        <h2>{product.title}</h2>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;


