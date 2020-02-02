import React from 'react';
import PropTypes from 'prop-types';

const ProductEdit = ({ product_id,name,code,color }) => {
    return (
        <div>
            <h2>Edicion del  Producto {product_id}</h2>
            <h3>Name: {name} /Code: {code} /Color: {color} </h3>
        </div>
    );
};

ProductEdit.propTypes = {
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string,
    //talle: PropTypes.string,
    color: PropTypes.string,
    //precio: PropTypes.string,
    code: PropTypes.string,
};

export default ProductEdit;