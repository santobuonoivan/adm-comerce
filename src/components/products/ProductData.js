import React from 'react';
import PropTypes from 'prop-types';
import ProductsActions from "./ProductsActions";

const ProductData = ({product_id,name,code,color,onBack}) => {
    return (
        <div>
            <div className="products-data">
                <h2> Datos del cliente {product_id}</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>Code</strong><i>{code}</i></div>
                <div><strong>Color</strong><i>{color}</i></div>
                <div><strong>Id</strong><i>{product_id}</i></div>
            </div>
            <ProductsActions>
                <button onClick={onBack}>Volver</button>
            </ProductsActions>
        </div>
    );
};

ProductData.propTypes = {
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string,
    //talle: PropTypes.string,
    color: PropTypes.string,
    //precio: PropTypes.string,
    code: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

export default ProductData;