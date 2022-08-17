/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable array-callback-return */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines */
// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import {
    Accordion, Button, Card, Form, Modal, Row
} from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

import { categoryListDisplay, searchIdApi } from 'Component/graphql/apicall';
import Link from 'Component/Link';
import { CART_URL } from 'Route/CartPage/CartPage.config';
import { scrollToTop } from 'Util/Browser';

import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpage.style';

/** @namespace myFirstApp/Route/Searchpage/Component */
export class SearchpageComponent extends PureComponent {
    __construct(props) {
        super.__construct(props);

        const { updateBreadcrumbs } = props;
        updateBreadcrumbs([{ url: '/search-page', name: __('Search Page') }]);
    }

  state = {
      productData: [],
      singleProduct: [],
      showContent: false,
      modelShow: false,
      showCart: false,
      searchId: JSON.parse(localStorage.getItem('sid')),
      page: 1,
      perPage: 20
  };

  async componentDidMount() {
      const { searchId } = this.state;
      // eslint-disable-next-line react/prop-types
      const { searchIdData, categoryListData } = this.props;

      categoryListDisplay(categoryListData);
      searchIdApi(searchId, searchIdData);

      if (searchId !== null) {
          this.setState({ showContent: true });
      }
  }

  // eslint-disable-next-line consistent-return
  showProduct = (id) => {
      // eslint-disable-next-line react/prop-types
      const { modelId } = this.props;

      const categoryProductData = `{
        products(filter: { category_id: {eq:"${id}"}, model_id: { eq: "${modelId}" } },pageSize: 30) {
            items {
              sku
              name
              image {
                url
              }
             price_range {
                minimum_price {
                  regular_price {
                    value
                    currency
                  }
                }
              }
            }
          }
    }`;

      fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: categoryProductData })
      })
          .then(
              /** @namespace myFirstApp/Route/Searchpage/Component/SearchpageComponent/then/catch/then/then/fetch/then */
              (response) => response.json()
          )
          .then(
              /** @namespace myFirstApp/Route/Searchpage/Component/SearchpageComponent/then/catch/then/then */
              (data) => {
                  const productsdatas = data.data.products.items;
                  // console.log('__ak', productsdatas);
                  productsdatas.map((ele) => {
                      Object.assign(ele, { no_of_conut: 0 });
                  });
                  this.setState({ productData: productsdatas });
              }
          )
          .catch(
              /** @namespace myFirstApp/Route/Searchpage/Component/SearchpageComponent/then/catch */
              (error) => console.log('error', error)
          );
  };

  productIncrement = (sku) => {
      const { productData } = this.state;
      const quantity = productData;

      quantity.map((ele) => {
          if (ele.sku === sku) {
              Object.assign(ele, { no_of_conut: ele.no_of_conut + 1 });
          }
      });
      this.forceUpdate();
      this.setState({ productData: quantity });
  };

  productDecrement = (sku) => {
      const { productData } = this.state;
      const quantity = productData;

      quantity.map((ele) => {
          if (ele.sku === sku) {
              Object.assign(ele, { no_of_conut: ele.no_of_conut - 1 });
          }
      });
      this.forceUpdate();
      this.setState({ productData: quantity });
  };

  paginatePage = (number) => {
      this.setState({ page: number });
  };

  clickModelShow = (sku) => {
      const { productData } = this.state;
      this.setState({ modelShow: true });
      const singleProductData = productData.filter((elem) => elem.sku === sku);
      this.setState({ singleProduct: singleProductData });
  };

  openCartProduct = (sku) => {
      const { productData } = this.state;
      this.setState({ showCart: true });
      const singleProductData = productData.filter((elem) => elem.sku === sku);
      this.setState({ singleProduct: singleProductData });
  };

  closeCartProduct = () => {
      this.setState({ showCart: false });
  };

  clickModelClose = () => {
      this.setState({ modelShow: false });
  };

  handleChange = (e) => {
      localStorage.setItem('sid', JSON.stringify([e.target.value]));
  };

  handleSubmit = () => {
      const { searchId } = this.state;
      if (searchId !== null) {
          this.setState({ showContent: true });
      }
  };

  renderSearchBar() {
      const { searchId } = this.state;
      return (
      <div className="searchbar">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            defaultValue={ searchId }
            onChange={ this.handleChange }
          />
          <Button
            className="searchboxBtn"
            variant="outline-success"
            onClick={ this.handleSubmit }
          >
            Search
          </Button>
        </Form>
      </div>
      );
  }

  renderDisplayCategory() {
      // eslint-disable-next-line react/prop-types
      const { categoryDatas } = this.props;

      return (
          <>
        { categoryDatas.map((newcategory) => (
          <Accordion key={ newcategory.id }>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                onClick={ () => this.showProduct(newcategory.id) }
              >
                { newcategory.name }
              </Accordion.Header>
              { newcategory.children.map((newchildcategory) => (
                <Accordion.Body
                  key={ newchildcategory.id }
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={ () => this.showProduct(newchildcategory.id) }
                  style={ { cursor: 'pointer' } }
                >
                  { newchildcategory.name }
                </Accordion.Body>
              )) }
            </Accordion.Item>
          </Accordion>
        )) }
          </>
      );
  }

  renderData() {
      const {
          productData, page, perPage, modelShow, singleProduct
      } = this.state;
      const indexofLastpost = page * perPage;
      const indexofFirstpost = indexofLastpost - perPage;
      const items = productData.slice(indexofFirstpost, indexofLastpost);
      return (
          <>
        <div className="sproduct-list">
          <div className="sproduct-header sproduct-item spheader-row">
            <div className="sproduct-picture spheader-column">
              <h6>Picture</h6>
            </div>
            <div className="sproduct-name spheader-column">
              <h6>Name</h6>
            </div>
            <div className="sproduct-brand spheader-column">
              <h6 className="pheader-brand">Brand</h6>
              <p className="pheader-price">Price</p>
            </div>
            <div className="sproduct-artnr spheader-column">
              <h6>Artnr</h6>
            </div>
            <div className="sproduct-stock spheader-column">
              <h6>Stock</h6>
            </div>
            <div className="sproduct-order spheader-column">
              <h6>Order</h6>
            </div>
          </div>
          { items.map((newdata) => (
            <div
              className="sproduct-body sproduct-item spbody-row"
              key={ newdata.sku }
              onClick={ () => this.openCartProduct(newdata.sku) }
            >
              <div className="sproduct-picture spbody-column">
                <Card.Img
                  variant="top"
                  src={ newdata.image.url }
                  onClick={ () => this.clickModelShow(newdata.sku) }
                />
              </div>
              <div className="sproduct-name spbody-column">
                <a className="sproduct-link" href="#">
                  { newdata.name }
                </a>
              </div>
              <div className="sproduct-brand spbody-column">
                <p className="sproduct-brandlabel">Bosch</p>
                <p className="sproduct-price">
                  { `${newdata.price_range.minimum_price.regular_price.value} ${newdata.price_range.minimum_price.regular_price.currency}` }
                </p>
              </div>
              <div className="sproduct-artnr spbody-column">
                <p className="sproduct-sku">{ newdata.sku }</p>
              </div>
              <div className="sproduct-stock spbody-column">
                <h6>Stock</h6>
              </div>
              <div className="sproduct-order spbody-column">
                <h6>
                  <div className="wrapper">
                    <button
                      className="minus"
                      disabled={ newdata.no_of_conut < 1 }
                      onClick={ () => this.productDecrement(newdata.sku) }
                    >
                      -
                    </button>
                    <button className="num">{ newdata.no_of_conut }</button>
                    <button
                      className="plus"
                      onClick={ () => this.productIncrement(newdata.sku) }
                    >
                      +
                    </button>
                  </div>
                </h6>
              </div>
            </div>
          )) }
        </div>
        { singleProduct.length === 1 && (
          <Modal
            size="lg"
            show={ modelShow }
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={ this.clickModelClose }>
              <Modal.Title id="contained-modal-title-vcenter">
                Product Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={ { display: 'flex' } }>
                <div
                  style={ { width: '30%', boxShadow: '0px 0px 10px 2px grey' } }
                >
                  <Card.Img variant="top" src={ singleProduct[0].image.url } />
                </div>
                <div className="modelData" style={ { marginLeft: '24px' } }>
                  <div>
                    Name:
                    { ` ${singleProduct[0].name}` }
                  </div>
                  <div>
                    Price:
                    { ` ${singleProduct[0].price_range.minimum_price.regular_price.value} ${singleProduct[0].price_range.minimum_price.regular_price.currency}` }
                  </div>
                  <div>
                    Artnr:
                    { ` ${singleProduct[0].sku}` }
                  </div>
                  <div>Stock:</div>
                  <div>
                    Order:
                    <div className="wrapper">
                      <button
                        className="minus"
                        disabled={ singleProduct[0].no_of_conut < 1 }
                        onClick={ () => this.productDecrement(singleProduct[0].sku) }
                      >
                        -
                      </button>
                      <button className="num">
                        { singleProduct[0].no_of_conut }
                      </button>
                      <button
                        className="plus"
                        onClick={ () => this.productIncrement(singleProduct[0].sku) }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={ this.clickModelClose }>Close</Button>
            </Modal.Footer>
          </Modal>
        ) }
          </>
      );
  }

  renderCart() {
      const { showCart, singleProduct } = this.state;
      return (
          <>
        { showCart ? (
            <>
            { singleProduct.length === 1 && (
                <>
                <Card>
                  <div className="card-header">
                    <Card.Header>
                      <h2>Cart</h2>
                    </Card.Header>
                    <div style={ { marginTop: '5px', cursor: 'pointer' } }>
                      <h2>
                        <AiOutlineClose onClick={ this.closeCartProduct } />
                      </h2>
                    </div>
                  </div>
                  <div className="card-innerbody">
                    <div>
                      <Card.Img
                        variant="top"
                        src={ singleProduct[0].image.url }
                        style={ { width: '200px', objectFit: 'cover' } }
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Title>
                          <div style={ { display: 'flex' } }>
                            <div className="input-detail">
                              <label className="label1"> Name :</label>
                              <p>{ singleProduct[0].name }</p>
                            </div>
                          </div>
                        </Card.Title>
                        <Card.Title>
                          <div style={ { display: 'flex' } }>
                            <div className="input-detail">
                              <label className="label1">SKU :</label>
                              <p>{ singleProduct[0].sku }</p>
                            </div>
                          </div>
                        </Card.Title>
                        <Card.Title>
                          <div>
                            Order:
                            <div className="wrapper">
                              <button
                                className="minus"
                                disabled={ singleProduct[0].no_of_conut < 1 }
                                onClick={ () => this.productDecrement(singleProduct[0].sku) }
                              >
                                -
                              </button>
                              <button className="num">
                                { singleProduct[0].no_of_conut }
                              </button>
                              <button
                                className="plus"
                                onClick={ () => this.productIncrement(singleProduct[0].sku) }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </Card.Title>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
                <div
                  className="headertext"
                  style={ {
                      backgroundColor: 'darkgreen',
                      justifyContent: 'center',
                      marginTop: '20px',
                      cursor: 'pointer'
                  } }
                >
                  <h3 style={ { lineHeight: '3' } }>
                    <Link to={ CART_URL } onClick={ scrollToTop }>
                      <b style={ { color: '#fff', textAlign: 'center' } }> Produce to Payment</b>
                    </Link>
                  </h3>
                </div>
                <div
                  className="headertext"
                  style={ {
                      backgroundColor: 'gainsboro',
                      justifyContent: 'center',
                      marginTop: '20px',
                      cursor: 'pointer'
                  } }
                >
                  <h3 style={ { lineHeight: '3' } }>
                    <b>Add to cart</b>
                  </h3>
                </div>
                </>
            ) }
            </>
        ) : (
          <p>no products is selected</p>
        ) }
          </>
      );
  }

  renderHeaderInfo() {
      return (
      <div className="spagemoreinfo-block-wrapper">
        <div className="spagemoreinfo-block">
          <h4 className="spagemoreinfo-title">Product Deatails Information</h4>
          <button className="spagemoreinfo-actions">
            More information
            { ' >>' }
          </button>
        </div>
      </div>
      );
  }

  renderPegination() {
      const { page, productData, perPage } = this.state;
      const totalpost = productData.length;
      const pageNumbers = [];

      // eslint-disable-next-line fp/no-let
      for (let i = 1; i <= Math.ceil(totalpost / perPage); i++) {
          pageNumbers.push(i);
      }

      return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          { pageNumbers.map((number) => (
            <li
              key={ number }
              className={ `page-item ${number === page ? 'active' : ''}` }
            >
              <div
                onClick={ () => {
                    this.paginatePage(number);
                } }
                className="page-link"
                style={ { cursor: 'pointer' } }
              >
                { number }
              </div>
            </li>
          )) }
        </ul>
      </nav>
      );
  }

  render() {
      const { showContent } = this.state;

      return (
      <div className="searchpage-content-wrapper">
        <div className="searchpage-block-wrapper">
          <div className="cspage-header-block">
            { this.renderSearchBar() }
            { this.renderHeaderInfo() }
          </div>
          <div block="serachPage searchpage-block-grid">
            { showContent && (
                <>
                <div className="searchpage-content-wrapper">
                  <div className="spage-sidebar">
                    { this.renderDisplayCategory() }
                  </div>
                  <div className="spage-product-content">
                    { this.renderData() }
                  </div>
                  <div>
                    { this.renderCart() }
                  </div>
                </div>
                <Row>{ this.renderPegination() }</Row>
                </>
            ) }
          </div>
        </div>
      </div>
      );
  }
}

export default SearchpageComponent;
