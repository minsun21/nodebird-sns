import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

import wrapper from '../store/configureStore';

const App = ({Component}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
