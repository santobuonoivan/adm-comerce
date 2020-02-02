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
                    body={<p>Datos del producto</p>}
                />
                
            </div>
        );
    }
}

ProductContainer.propTypes = {
    product_id: PropTypes.string.isRequired,
};

export default connect(null,null)(ProductContainer);