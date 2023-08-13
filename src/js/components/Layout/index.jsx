import { Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className='max-w-7xl mx-auto'>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout