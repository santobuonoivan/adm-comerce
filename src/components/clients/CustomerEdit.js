import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setPropsAsInitial} from "../../helpers/setPropsAsInitial";


const CustomerEdit = ({ client_id, dir, name, dni, tel }) => {
    return (
        <div>
            <h2>Edicion del  Cliente {client_id}</h2>
            <form action=''>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <Field name='name' component='input' type='text'/>
                </div>
                <div>
                    <label htmlFor='dni'>Dni</label>
                    <Field name='dni' component='input' type='text'/>
                </div>
                <div>
                    <label htmlFor='tel'>Tel</label>
                    <Field name='tel' component='input' type='text'/>
                </div>
                <div>
                    <label htmlFor='dir'>Dir</label>
                    <Field name='dir' component='input' type='text'/>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    client_id: PropTypes.number,
    dir: PropTypes.string,
    name: PropTypes.string,
    dni: PropTypes.string,
    tel: PropTypes.string,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);