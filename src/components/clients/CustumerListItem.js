import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CustumerListItem = ({client_id,name,dni,tel,verAction,editAction,delAction,urlPath}) => {
    return (
        <div>
            <div className="customers-list-item">                
                <div className="field">{client_id}</div>
                <div className="field">{name}</div>
                <div className="field">{dni}</div>
                <div className="field">{tel}</div>
                <div className="field">
                    <Link to ={`${urlPath}${dni}`} >{verAction}</Link>
                </div>              
                <div className="field">
                    <Link to ={`${urlPath}${dni}/edit`} >{editAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${dni}/delete`} >{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustumerListItem.propTypes = {
    client_id: PropTypes.number.isRequired,
    dni: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    verAction: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustumerListItem;