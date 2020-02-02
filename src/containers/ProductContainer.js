import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "./../components/AppFrame";

class ProductContainer extends Component {

    render() {
        return (
            <div>
                <AppFrame
                    header={`Producto ${this.props.product_id}`}
                    body={<p>Datos del producto {this.props.product.name}</p>}
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
    product: state.products.find( p => p.product_id === parseInt(props.product_id)),
})

export default connect(mapStateToProps,null)(ProductContainer);