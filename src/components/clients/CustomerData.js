import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from "./CustomersActions";

const CustomerData = ({client_id,name,dni,tel,dir,onBack}) => {
    return (
        <div>
            <div className="custumer-data">
                <h2> Datos del cliente {client_id}</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Tel</strong><i>{tel}</i></div>
                <div><strong>Dir</strong><i>{dir}</i></div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {

    client_id: PropTypes.number.isRequired,
    dir: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    tel: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;