import React from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import ProductsActions  from './../components/ProductsActions';

const HomeContainer = props => {
    const handleOnClick = () => {
        console.log('handleOnClick');
        props.history.push('/products')
    }
    return (
        <div>
            <AppFrame
                header='Inicio'
                body={
                    <div>
                        Esta es la pantalla inicial
                        <ProductsActions>
                            <button onClick={handleOnClick}> Listado de Productos </button>
                            {/*<Link to='/customers'> </Link>*/}
                        </ProductsActions>
                    </div>
                }
            ></AppFrame>
        </div>
    );
};
//withRouter sirve para inyectar los atriburos de router de
//react dom su es llamado dentro de una función en el router
export default withRouter(HomeContainer);