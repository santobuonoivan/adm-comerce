import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import ProductList from './../components/products/ProductList';
import ProductsActions from './../components/products/ProductsActions';
//import { fetchProducts } from './../actions/fetchProducts';


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
            ></ProductList>
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
                ></AppFrame>
            </div>
        );
    }
};

ProductsContainer.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

ProductsContainer.defaultProps = {
    products: [
        {
            prodId: 1,
            nombre: "chomba.",
            talle: "L",
            color: "rojo",
            precio: "500",
            codigo: "ab123",
        },
        {
            prodId: 2,
            nombre: "jean",
            talle: "48",
            color: "azul",
            precio: "700",
            codigo: "cd345",
        },
        {
            prodId: 3,
            nombre: "camisa",
            talle: "XL",
            color: "blaco",
            precio: "900",
            codigo: "xz123",
        },
    ]
};
/* mirar customerContainer
const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});
*/
export default withRouter(connect(null, { fetchProducts })(ProductsContainer));
//export default withRouter(ProductsContainer);