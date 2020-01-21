import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edicion del  Cliente</h2>
            <h3>Name: {name} /DNI: {dni} /Edad: {age} </h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

export default CustomerEdit;