import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, urlPath }) => {
    return (
        <div>
            <div className="product-list">
                {
                    products.map( p => 
                        <ProductListItem 
                            key={p.prodId}
                            prodId={p.prodId}
                            name={p.name}
                            talle={p.talle}
                            color={p.color}
                            precio={p.precio}
                            codigo={p.codigo}
                            verAction={'Ver'}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        ></ProductListItem>
                    )
                }
            </div>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default ProductList;