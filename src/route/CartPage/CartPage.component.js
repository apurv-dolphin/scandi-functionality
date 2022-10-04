/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
    Button, Card, Col, Container, Row
} from 'react-bootstrap';

import CmsBlock from 'Component/CmsBlock';
import { CartPage as SourceCartPage } from 'SourceRoute/CartPage/CartPage.component';

/** @namespace myFirstApp/Route/CartPage/Component */
export class CartPageComponent extends SourceCartPage {
    // TODO implement logic
    __construct(props) {
        super.__construct(props);

        const { updateBreadcrumbs } = props;
        updateBreadcrumbs([{ url: '/cart', name: __('Shopping Page') }]);
    }

  removeProduct = (sku) => {
      console.log('__sku', sku);
      const { removeProduct } = this.props;
      removeProduct(sku);
  };

  renderPromoContent() {
      const { cart_content: { cart_cms } = {} } = window.contentConfiguration;

      if (cart_cms) {
          return <CmsBlock identifier={ cart_cms } />;
      }

      return (
      <figure
        block="CartPage"
        elem="PromoBlock"
        style={ { backgroundColor: '#ffeb00b5' } }
      >
        <figcaption block="CartPage" elem="PromoText">
          { __('Free shipping on order 49$ and more.') }
        </figcaption>
      </figure>
      );
  }

  renderCartItems() {
      const { cartProduct } = this.props;

      return (
      <Container>
        { cartProduct.length === 0 ? (
          <p block="CartOverlay" elem="Empty">
            { __('You have no items in your shopping cart.') }
          </p>
        ) : (
          <Row>
            { cartProduct.map((newdata) => (
              <Col className="col-md-3 my-2" key={ newdata.id }>
                <Card style={ { width: '18rem' } }>
                  <Card.Img variant="top" src={ newdata.image.url } />
                  <Card.Body>
                    <Card.Title>
                      Name :
                        <p>{ newdata.name }</p>
                    </Card.Title>
                    <Card.Title>
                      SKU :
                       <p>{ newdata.sku }</p>
                    </Card.Title>
                    <Card.Title>
                      Price :
                      <p>{ `${newdata.price_range.minimum_price.regular_price.value} ${newdata.price_range.minimum_price.regular_price.currency}` }</p>
                    </Card.Title>
                    <Card.Title>
                      <div>
                        Order:
                        <div className="wrapper">
                          <button className="minus">-</button>
                          <button className="num">{ newdata.no_of_conut }</button>
                          <button className="plus">+</button>
                        </div>
                      </div>
                    </Card.Title>
                    <div
                      style={ {
                          display: 'flex',
                          justifyContent: 'center',
                          marginTop: '15px'
                      } }
                    >
                      <Button
                        variant="primary"
                        onClick={ () => this.removeProduct(newdata.sku) }
                      >
                        Remove the product
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) }
          </Row>
        ) }
      </Container>
      );
  }

  render() {
      return (
      <div className="row">
        <div className="col-md-8">{ this.renderCartItems() }</div>
        <div className="col-md-4">{ this.renderPromoContent() }</div>
      </div>
      );
  }
}

export default CartPageComponent;
