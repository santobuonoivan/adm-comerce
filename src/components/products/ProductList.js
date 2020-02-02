import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, urlPath }) => {
    console.log(products);

    return (
        <div>
            <div className="product-list">
                {
                    products.map( p => 
                        <ProductListItem 
                            key={p.product_id}
                            product_id={p.product_id}
                            name={p.name}
                            talle={p.talle}
                            color={p.color}
                            code={p.code}
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