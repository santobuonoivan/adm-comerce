import React from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import ProductsActions  from './../components/products/ProductsActions';
//import CustomersActions  from './../components/clients/CustomersActions';

const HomeContainer = props => {
    const handleOnClickProducts = () => {
        //
        // console.log('handleOnClick');
        props.history.push('/products')
    }
    const handleOnClickCustomers = () => {
        //console.log('handleOnClick');
        props.history.push('/customers')
    }
    return (
        <div>
            <AppFrame
                header='Inicio'
                body={
                    <div>
                        Esta es la pantalla inicial
                        <ProductsActions>
                            <button onClick={handleOnClickProducts}> Listado de Productos</button>
                            <button onClick={handleOnClickCustomers}> Listado de Clientes</button>
                            {/*<Link to='/customers'> </Link>*/}
                        </ProductsActions>
                    </div>
                }
            />
        </div>
    );
};
//withRouter sirve para inyectar los atriburos de router de
//react dom su es llamado dentro de una función en el router
export default withRouter(HomeContainer);