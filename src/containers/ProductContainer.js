import React from 'react';
//import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import ProductList from './../components/products/ProductList';
import ProductsActions from './../components/products/ProductsActions';
import { withRouter } from 'react-router-dom';

const products = [
    {
        prodId: 1,
        nombre: "chomba",
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

const ProductsContainer = props => {
    // modificar
    const handleAddNew = () => {
        props.history.push('/products/add')
    };

    const renderBody = products => (
        <div>
            <ProductList 
                products = {products}
                urlPath = {'products/'} /* la base para despues agregar edir delete*/
            ></ProductList>
            <ProductsActions>
                <button onClick={handleAddNew}>Nuevo Producto</button>
            </ProductsActions>
        </div>
    );

    return (
        <div>
            <AppFrame 
                header={'Listado de clientes'}
                // le pasamos una lista de products
                body={renderBody(products)}
            ></AppFrame>
        </div>
    );
};
/*
ProductsContainer.propTypes = {
    
};
*/

export default withRouter(ProductsContainer);