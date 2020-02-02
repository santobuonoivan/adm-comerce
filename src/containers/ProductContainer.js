import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "./../components/AppFrame";
import {getProductByProductId} from "../selectors/products";
import {Route} from "react-router-dom";
import ProductEdit from "../components/products/ProductEdit";
import ProductData from "../components/products/ProductData";

class ProductContainer extends Component {
    /*
    componentDidMount() {
        if (!this.props.customer){
            this.props.fetchProducts();
        }
    }
    */

    renderBody = () =>(
        <Route path='/products/:product_id/edit' children={
            ( { match } ) => {
                const CustomerControl = match ? ProductEdit : ProductData;
                return <CustomerControl {...this.props.product}/>
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
    product: PropTypes.object.isRequired,
};
const mapStateToProps = (state,props) => ({
    //products: state.products,
    product: getProductByProductId(state,props),
})

export default connect(mapStateToProps,null)(ProductContainer);