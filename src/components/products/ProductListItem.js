import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const ProductListItem = ({product_id,name,color,code,urlPath,editAction,delAction,verAction}) => {
    //console.log({product_id,name,color,code,urlPath,editAction,delAction,verAction})
    return (
        <div>
            <div className="products-list-item">
                <div className="field">{product_id}</div>
                <div className="field">{name}</div>
                <div className="field">{color}</div>
                <div className="field">{code}</div>
                <div className="field">
                    <Link to ={`${urlPath}${product_id}`}>{verAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${product_id}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${product_id}/delete`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

ProductListItem.propTypes = {
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string,
    //talle: PropTypes.string,
    color: PropTypes.string,
    //precio: PropTypes.string,
    code: PropTypes.string,
    verAction: PropTypes.string,
    editAction: PropTypes.string,
    delAction: PropTypes.string,
};

export default ProductListItem;