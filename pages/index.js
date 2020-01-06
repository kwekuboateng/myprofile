
import React from 'react';

import Layout from '../components/MyLayout';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faHome, faCheckSquare, faUserAlt, faGripHorizontal, faPencilAlt, faPhoneAlt, faFile } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee, faHome, faCheckSquare, faUserAlt, faFile, faGripHorizontal, faPencilAlt, faPhoneAlt)


export default function Index (){
  return (
  <>
    <Layout />
    <style global jsx>{`
       html,
       body, #__next {
          height: 100vh;
        }
        body {
          color: #777;
          background-color: #f6f7ff;
          font-family: "Open Sans",sans-serif;
          font-size: 14px;
          line-height: 1.7;
          overflow-x: hidden;
          display: block;
          text-align: left;
          overflow-wrap: break-word;
        }
      `}</style>
  </>
  );
}
//higher order component usage
// const Page = () => (
//     <p>Hello Next.js</p>
//   );
  
//   export default withLayout(Page);

