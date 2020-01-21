import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const ProductListItem = ({prodId,nombre,talle,color,precio,codigo,urlPath,editAction,delAction,verAction}) => {
    return (
        <div>
            <div className="products-list-item">
                <div className="field">{prodId}</div>
                <div className="field">{nombre}</div>
                <div className="field">{talle}</div>
                <div className="field">{color}</div>
                <div className="field">{precio}</div>
                <div className="field">{codigo}</div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}`}>{verAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${prodId}/delete`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

ProductListItem.propTypes = {
    prodId: PropTypes.number.isRequired,
    nombre: PropTypes.string,
    talle: PropTypes.string,
    color: PropTypes.string,
    precio: PropTypes.string,
    codigo: PropTypes.string,
    verAction: PropTypes.string,
    editAction: PropTypes.string,
    delAction: PropTypes.string,
};

export default ProductListItem;