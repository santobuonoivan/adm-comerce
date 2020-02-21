import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "./../components/AppFrame";
import {getProductByProductId} from "./../selectors/products";
import {Route, withRouter} from "react-router-dom";
import ProductEdit from "./../components/products/ProductEdit";
import ProductData from "./../components/products/ProductData";
import {fetchProducts} from "./../actions/fetchProducts";
import {updateProduct} from "./../actions/updateProduct";

class ProductContainer extends Component {

    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchProducts();
        }
    }

    handleSubmit = values => {
        //console.log(JSON.stringify(values));
        const { product_id } = values;
        return this.props.updateProduct( product_id, values) /* el return es el que desabilita el submiting por promise*/
    };

    handleOnBack = () => {
        this.props.history.goBack();
        /* necesita el componente conectado con withRouter */
    };

    renderBody = () =>(
        <Route path='/products/:product_id/edit' children={
            ( { match } ) => {
                const CustomerControl = match ? ProductEdit : ProductData;
                return <CustomerControl {...this.props.product} onSubmit={this.handleSubmit} onBack={this.handleOnBack}/>
            }
        }/>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={`Producto ${this.props.product_id}`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

ProductContainer.propTypes = {
    product_id: PropTypes.string.isRequired,
    product: PropTypes.object,
    fetchProducts: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state,props) => ({
    //products: state.products,
    product: getProductByProductId(state,props),
})

export default withRouter( connect(mapStateToProps, {fetchProducts,updateProduct})(ProductContainer));