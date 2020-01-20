import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const ProductListItem = ({prodId,talle,color,precio,codigo,urlPath,editAction,delAction,verAction}) => {
    return (
        <div>
            <div className="products-list-item">
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`} >{prodId}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`} >{talle}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`} >{color}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`} >{precio}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`} >{codigo}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}/ver`} >{verAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}/edit`} >{editAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}/delete`} >{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

ProductListItem.propTypes = {
    
};

export default ProductListItem;