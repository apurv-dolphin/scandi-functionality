import CartIcon from 'Component/CartIcon';
import Link from 'Component/Link';
import {
    CartOverlay,
    Header as SourceHeader,
    MyAccountOverlay
} from 'SourceComponent/Header/Header.component';

export { CartOverlay, MyAccountOverlay };

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    renderMinicartButton() {
        return (
      <Link
        to="cart"
        elem="Button"
        aria-label={ __('cart') }
      >
          <CartIcon />
      </Link>
        );
    }
}

export default HeaderComponent;
