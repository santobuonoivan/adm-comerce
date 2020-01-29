import { FETCH_PRODUCTS } from './../constants';
import { createAction } from 'redux-actions';

const products = [
    {
        prodId: 1,
        nombre: "chomba.",
        talle: "L",
        color: "rojo",
        precio: "500",
        codigo: "ab123",
    },
    {
        prodId: 2,
        nombre: "jean",
        talle: "48",
        color: "azul",
        precio: "700",
        codigo: "cd345",
    },
    {
        prodId: 3,
        nombre: "camisa",
        talle: "XL",
        color: "blaco",
        precio: "900",
        codigo: "xz123",
    },
];

export const fetchProducts = createAction(FETCH_PRODUCTS,/*payload*/ () => products);