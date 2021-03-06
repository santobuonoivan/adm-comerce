import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setPropsAsInitial} from "../../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";

/* validacion*/
const isRequired = value => (
    !value && "Este campo es requerido"
);
const isNumber = value => (
    isNaN(Number(value)) && 'El campo debe ser numerico'
);
/* mensaje de error */
const  MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? 'text' : type}/>
        {
            meta.touched && meta.error && <span> {meta.error} </span>
        }
    </div>
);

const CustomerEdit = ({ client_id, dir, name, dni, tel, handleSubmit, submitting, onBack }) => {

    return (
        <div>
            <h2>Edicion del  Cliente {client_id}</h2>
            <form onSubmit={handleSubmit}>
                    <Field name='name' component={MyField} type='text'  label='Nombre'/>
                    <Field name='dni' component={MyField} type='text'  label='Dni'/>
                    <Field name='tel' component={MyField} type='text' label='Tel' />
                    <Field name='dir' component={MyField} type='text' label='Dir'/>
                    <CustomersActions>
                        <button type='submit' disabled={submitting}> Editar </button>
                        <button onClick={onBack}>Cancalar</button>
                    </CustomersActions>
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
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);