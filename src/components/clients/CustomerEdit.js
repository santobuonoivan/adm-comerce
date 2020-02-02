import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ client_id, dir, name, dni, tel }) => {
    return (
        <div>
            <h2>Edicion del  Cliente {client_id}</h2>
            <h3>Name: {name} /DNI: {dni} /Dir: {dir} /tel: {tel} </h3>
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

export default CustomerEdit;