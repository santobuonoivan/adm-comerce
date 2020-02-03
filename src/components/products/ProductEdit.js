import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setPropsAsInitial} from "../../helpers/setPropsAsInitial";

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

const ProductEdit = ({ product_id,name,code,color }) => {
    return (
        <div>
            <h2>Edicion del  Producto {product_id}</h2>
            <form action=''>
                <Field
                    name='name'
                    component={MyField}
                    type='text'
                    validate={isRequired}
                    label='Nombre'
                />
                <Field
                    name='code'
                    component={MyField}
                    type='text'
                    validate={isRequired}
                    label='Code'
                />
                <Field
                    name='color'
                    component={MyField}
                    type='text'
                    label='Color'
                />
            </form>
        </div>
    );
};

ProductEdit.propTypes = {
    product_id: PropTypes.number,
    name: PropTypes.string,
    //talle: PropTypes.string,
    color: PropTypes.string,
    //precio: PropTypes.string,
    code: PropTypes.string,
};
const ProductEditForm = reduxForm({form: 'ProductEdit'})(ProductEdit);
export default setPropsAsInitial(ProductEditForm);