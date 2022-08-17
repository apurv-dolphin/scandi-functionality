/* eslint-disable max-lines */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @scandipwa/scandipwa-guidelines/no-jsx-variables */
import { SWITCH_ITEMS_TYPE } from '@scandipwa/scandipwa/src/component/Router/Router.config';
import UrlRewrites from '@scandipwa/scandipwa/src/route/UrlRewrites';
import { Route } from 'react-router-dom';

import Searchpage from 'Route/searchpage';
import {
    Breadcrumbs,
    CartPage,
    Checkout,
    CmsPage,
    ConfirmAccountPage,
    ContactPage,
    CookiePopup,
    CreateAccountPage,
    DemoNotice,
    Footer,
    ForgotPasswordPage,
    Header,
    HomePage,
    LoginAccountPage,
    MenuPage,
    MyAccount,
    NavigationTabs,
    NewVersionPopup,
    NotificationList,
    OfflineNotice,
    OrderPrintPage,
    PasswordChangePage,
    ProductComparePage,
    Router as SourceRouter,
    SearchPage,
    SendConfirmationPage,
    SomethingWentWrong,
    StyleGuidePage,
    WishlistShared,
    withStoreRegex
} from 'SourceComponent/Router/Router.component';

export {
    CartPage,
    Checkout,
    CmsPage,
    CookiePopup,
    DemoNotice,
    Header,
    HomePage,
    MyAccount,
    PasswordChangePage,
    SearchPage,
    SendConfirmationPage,
    ConfirmAccountPage,
    MenuPage,
    Footer,
    NavigationTabs,
    NewVersionPopup,
    NotificationList,
    WishlistShared,
    OfflineNotice,
    ContactPage,
    ProductComparePage,
    CreateAccountPage,
    LoginAccountPage,
    ForgotPasswordPage,
    SomethingWentWrong,
    StyleGuidePage,
    Breadcrumbs,
    OrderPrintPage,
    withStoreRegex
};

/** @namespace myFirstApp/Component/Router/Component */
export class RouterComponent extends SourceRouter {
  // TODO implement logic
  [SWITCH_ITEMS_TYPE] = [
      {
          component: (
        <Route
          path={ withStoreRegex('/') }
          exact
          render={ (props) => <HomePage { ...props } /> }
        />
          ),
          position: 10
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/search-page') }
          exact
          render={ (props) => <Searchpage { ...props } /> }
        />
          ),
          position: 10
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/search/:query/') }
          render={ (props) => <SearchPage { ...props } /> }
        />
          ),
          position: 25
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/page') }
          render={ (props) => <CmsPage { ...props } /> }
        />
          ),
          position: 40
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/cart') }
          exact
          render={ (props) => <CartPage { ...props } /> }
        />
          ),
          position: 50
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/checkout/:step?') }
          render={ (props) => <Checkout { ...props } /> }
        />
          ),
          position: 55
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/createPassword/') }
          render={ (props) => <PasswordChangePage { ...props } /> }
        />
          ),
          position: 60
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/create/') }
          render={ (props) => <CreateAccountPage { ...props } /> }
        />
          ),
          position: 61
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/login/') }
          render={ (props) => <LoginAccountPage { ...props } /> }
        />
          ),
          position: 62
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/forgotpassword/') }
          render={ (props) => <ForgotPasswordPage { ...props } /> }
        />
          ),
          position: 63
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/confirmation') }
          render={ (props) => <SendConfirmationPage { ...props } /> }
        />
          ),
          position: 64
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/confirm') }
          render={ (props) => <ConfirmAccountPage { ...props } /> }
        />
          ),
          position: 65
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/sales/order/view/order_id/:orderId?') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 70
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/sales/order/history') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 71
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/downloadable/customer/products') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 72
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/wishlist') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 73
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/address') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 74
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/newsletter/manage') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 75
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/customer/account/:tab?') }
          render={ (props) => <MyAccount { ...props } /> }
        />
          ),
          position: 76
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/menu') }
          render={ (props) => <MenuPage { ...props } /> }
        />
          ),
          position: 80
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/wishlist/shared/:code') }
          render={ (props) => <WishlistShared { ...props } /> }
        />
          ),
          position: 81
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/contact') }
          render={ (props) => <ContactPage { ...props } /> }
        />
          ),
          position: 82
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/compare') }
          render={ (props) => <ProductComparePage { ...props } /> }
        />
          ),
          position: 83
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/styleguide') }
          render={ (props) => <StyleGuidePage { ...props } /> }
        />
          ),
          position: 84
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/sales/order/print/order_id/:orderId?') }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 90
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/sales/order/printInvoice/order_id/:orderId?') }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 91
      },
      {
          component: (
        <Route
          path={ withStoreRegex('/sales/order/printShipment/order_id/:orderId?') }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 92
      },
      {
          component: (
        <Route
          path={ withStoreRegex(
              '/sales/order/printCreditmemo/order_id/:orderId?'
          ) }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 93
      },
      {
          component: (
        <Route
          path={ withStoreRegex(
              '/sales/order/printInvoice/invoice_id/:invoiceId?'
          ) }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 94
      },
      {
          component: (
        <Route
          path={ withStoreRegex(
              '/sales/order/printShipment/shipment_id/:shipmentId?'
          ) }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 95
      },
      {
          component: (
        <Route
          path={ withStoreRegex(
              '/sales/order/printCreditmemo/creditmemo_id/:refundId?'
          ) }
          render={ (props) => <OrderPrintPage { ...props } /> }
        />
          ),
          position: 95
      },
      {
          component: <Route render={ (props) => <UrlRewrites { ...props } /> } />,
          position: 1000
      }
  ];
}

export default RouterComponent;
