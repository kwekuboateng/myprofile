import React from 'react';

import Header from './Header/header.js';
import Main from './Main'
import css from '../styles.css'
import headCss from '../components/Header/header.css'
import MyImage from '../pages/myImage'

const layoutStyle = { 
  width: '265px',
  height: '600px',
  background: "#4a63e7",
  margin: 40,
  top: 50,
  transform: "translateX(0)",
  transition: "all .3s east-in-out",
  overflow: "hidden",
  position: "fixed",
  borderRadius: 20,
  boxShadow: '0px 6px 15px 0px rgba(0,0,0,.2)'
};


const Layout = () => {
  return (
    <>
    <div className={css.siteWrapper}>
        <div className={headCss.mobileHeader + " " + headCss.py2 + " " + headCss.px3 + " " + headCss.mt4}>
            <button className={headCss.menuIcon + " " + headCss.mr2}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a>
              <MyImage style={{width: "40px", height: "40px", borderRadius: "100px"}}/>
            </a>
            <a className={headCss.myName + " " + headCss.ml2}>
              Frederick Boateng
            </a>
        </div>
        <Header />

        <Main />
    </div>
    </>
  )
};

//layout as a higher order component 
// const withLayout = Page => {
//     return () => (
//         <div style={layoutStyle}>
//             <Header />
//             <Page />
//         </div>
//     )
// }

export default Layout;