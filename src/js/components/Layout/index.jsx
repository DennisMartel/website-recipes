import { Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, autoCompleteData }) => {
  return (
    <Fragment>
      <Header autoCompleteData={autoCompleteData} />
      <main className='myContainer'>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  autoCompleteData: PropTypes.array
}

export default Layout