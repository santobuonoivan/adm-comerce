import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustumerListItem';

const CustomerList = ({ customers, urlPath }) => {
    //console.log(customers);
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map( c => 
                        <CustomerListItem 
                            key={c.client_id}
                            client_id={c.client_id}
                            dni={c.dni}
                            name={c.name}
                            tel={c.tel}
                            verAction={'Ver'}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        />
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