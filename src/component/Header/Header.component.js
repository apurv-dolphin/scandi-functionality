import CartIcon from 'Component/CartIcon';
import Link from 'Component/Link';
// import CartPageComponent from 'Route/CartPage/CartPage.component';
import {
    CartOverlay,
    Header as SourceHeader,
    MyAccountOverlay
} from 'SourceComponent/Header/Header.component';

export { CartOverlay, MyAccountOverlay };

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    renderMinicartItemsQty() {
        // const { cartProduct } = this.props;

        return (
        <span
          aria-label="Items in cart"
          block="Header"
          elem="MinicartItemCount"
        >
            { 1 }
        </span>
        );
    }

    renderMinicartButton() {
        return (
      <Link to="cart" elem="Button" aria-label={ __('cart') }>
        <CartIcon />
      </Link>
        );
    }
}

export default HeaderComponent;
