import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/clients/CustomerList';
import CustomersActions from '../components/clients/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';
import {getCustomers} from "./../selectors/customers"; /* esto no debe ir*/

class CustomersContainer extends Component  {
    
    componentDidMount() {
        this.props.fetchCustomers();
    }
    
    // modificar
    handleAddNew = () => {
        this.props.history.push('/customer/add')
    };

    renderBody = customers => (
        <div>
            <CustomersList 
                customers = {customers}
                urlPath = {'customer/'} /* la base para despues agregar edir delete*/
            ></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    // le pasamos una lista de customers
                    body={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
};

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers:  [],
}

const mapStateToProps = state => ({
    //customers: state.customers,
    customers: getCustomers(state),
});
/* map viejo 
const mapDispatchToProps = (dispatch) => ({
    fetchCustomers: () => dispatch(fetchCustomers())
});
*/
/* viejo nuevo
const mapDispatchToProps = { fetchCustomers };
*/
export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));