import React, { PropTypes } from 'react';

const CustomerData = ({name,dni,age}) => {
    return (
        <div>
            <div className="custumer-data">
                <h2> Datos del cliente </h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Age</strong><i>{age}</i></div>                
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerData;