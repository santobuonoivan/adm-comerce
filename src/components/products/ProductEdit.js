import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const ProductEdit = ({ product_id,name,code,color }) => {
    return (
        <div>
            <h2>Edicion del  Producto {product_id}</h2>
            <form action=''>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <Field name='name' component='input' type='text'/>
                </div>
                <div>
                    <label htmlFor='code'>Code</label>
                    <Field name='code' component='input' type='text'/>
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <Field name='color' component='input' type='text'/>
                </div>
            </form>
        </div>
    );
};

ProductEdit.propTypes = {
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string,
    //talle: PropTypes.string,
    color: PropTypes.string,
    //precio: PropTypes.string,
    code: PropTypes.string,
};

export default reduxForm({form: ProductEdit})(ProductEdit);