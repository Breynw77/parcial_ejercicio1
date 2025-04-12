import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

export const fetchProducts = () => axios.get(API);
export const fetchProductById = (id) => axios.get(`${API}/${id}`);
