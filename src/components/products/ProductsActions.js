import React from 'react';
import PropTypes from 'prop-types';

const ProductsActions = ({ children }) => {
    return (
        <div>
            <div className="products-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

ProductsActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductsActions;