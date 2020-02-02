import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "./../components/AppFrame";
import {getCustomerByDni} from "../selectors/customers";
import {Route} from 'react-router-dom';
import CustomerEdit from "../components/clients/CustomerEdit";
import CustomerData from "../components/clients/CustomerData";

class CustomerContainer extends Component {
    /*
    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchCustomers();
        }
    }
    */

    renderBody = () =>(
        <Route path='/customers/:dni/edit' children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer}/>
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
};
const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state,props)
});

export default connect(mapStateToProps,null)(CustomerContainer);