import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "./../components/AppFrame";
import {getCustomerByDni} from "../selectors/customers";
import {Route, withRouter} from 'react-router-dom';
import CustomerEdit from "../components/clients/CustomerEdit";
import CustomerData from "../components/clients/CustomerData";
import {fetchCustomers} from "./../actions/fetchCustomers";
import {updateCustomer} from "./../actions/updateCustomer";


class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        //console.log(JSON.stringify(values));
        const { client_id } = values;
        return this.props.updateCustomer( client_id, values); /* el return es el que desabilita el submiting por promise*/
    };

    handleOnBack = () => {
        this.props.history.goBack();
        /* necesita el componente conectado con withRouter */
    };

    onSubmitSuccess = () => {
        this.props.history.goBack();
        /* Si es exitoso go back */
    }

    renderBody = () =>(
        <Route path='/customers/:dni/edit' children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer}
                                        onSubmit={this.handleSubmit}
                                        onSubmitSuccess = {this.onSubmitSuccess}
                                        onBack={this.handleOnBack}/>
            }
        }/>
    );
    //<p>Datos del cliente {this.props.customer.name}</p>
    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state,props)
});

export default withRouter( connect(mapStateToProps,{ fetchCustomers, updateCustomer } /* action */)(CustomerContainer));