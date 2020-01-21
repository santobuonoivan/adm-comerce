import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustumerListItem';

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map( c => 
                        <CustomerListItem 
                            key={c.custId}
                            custId={c.custId}
                            dni={c.dni}
                            name={c.name}
                            verAction={'Ver'}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        ></CustomerListItem>
                    )
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;