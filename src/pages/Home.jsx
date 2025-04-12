import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from '../components/ProductCard';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/Home.scss';

const Home = () => {
    const [products, setProducts] = useState ([]);
    const [error, setError] = useState ('');

    useEffect (() => {
        fetchProducts()
        .then ((res) => setProducts(res.data))
        .catch(() => setError('Error al mostrar los productos.'));
    }, []);

    if (error) return <ErrorMessage message={error} />

    return (
        <div className="product-list">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))};
        </div>
    );
};

export default Home;