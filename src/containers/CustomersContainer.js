import React from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/clients/CustomerList';
import CustomersActions from '../components/clients/CustomersActions';
import { withRouter } from 'react-router-dom';

const customers = [
    {
        custId: 1,
        dni: "27000000",
        name: "Juan Perez",
        age: 37,
    },
    {
        custId: 2,
        dni: "30000000",
        name: "Otro",
        age: 37,
    },
    {
        custId: 3,
        dni: "33000000",
        name: "Luis Martinez",
        age: 37,
    },
];

const CustomersContainer = props => {
    // modificar
    const handleAddNew = () => {
        props.history.push('/customer/add')
    };

    const renderBody = customers => (
        <div>
            <CustomersList 
                customers = {customers}
                urlPath = {'customer/'} /* la base para despues agregar edir delete*/
            ></CustomersList>
            <CustomersActions>
                <button onClick={handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    return (
        <div>
            <AppFrame 
                header={'Listado de clientes'}
                // le pasamos una lista de customers
                body={renderBody(customers)}
            ></AppFrame>
        </div>
    );
};

CustomersContainer.propTypes = {
    
};

export default withRouter(CustomersContainer);