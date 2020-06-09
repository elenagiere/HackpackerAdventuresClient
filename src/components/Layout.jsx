import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from './MainHeader.jsx';
import OurLocation from './OurLocation.jsx';
// import UpperEmailPrompt from './UpperEmailPrompt.jsx';
import Footer from './Footer.jsx';


export default function Layout({ children }) {

    return (
        <div>
            <MainHeader></MainHeader>
            {children}
            {/* <UpperEmailPrompt></UpperEmailPrompt> */}
            <Footer></Footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};