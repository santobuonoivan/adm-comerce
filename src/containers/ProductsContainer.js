import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import ProductList from './../components/products/ProductList';
import ProductsActions from './../components/products/ProductsActions';
import { fetchProducts } from './../actions/fetchProducts';
import {getProducts} from "../selectors/products";


class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }
    // modificar
    handleAddNew = () => {
        this.props.history.push('/products/add')
    };

    renderBody = products => (
        <div>
            <ProductList
                products = {products}
                urlPath = {'products/'} /* la base para despues agregar edir delete*/
            />
            <ProductsActions>
                <button onClick={this.handleAddNew}>Nuevo Producto</button>
            </ProductsActions>
        </div>
    );

    render(){
        return (
            <div>
                <AppFrame
                    header={'Listado de productos'}
                    // le pasamos una lista de products
                    body={this.renderBody(this.props.products)}
                />
            </div>
        );
    }
};

ProductsContainer.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

ProductsContainer.defaultProps = {
    products: []
};

const mapStateToProps = state => ({
    products: getProducts(state)
});
/* mirar customerContainer
const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});
*/
export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsContainer));
//export default withRouter(ProductsContainer);