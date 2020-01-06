import React from 'react';

import About from '../pages/about'
import Blog from '../pages/blog'
import Home from '../pages/home'
import css from '../styles.css'


const Main = () => (
    <main className={css.contPage}>
        <div>
             <Home />
            <About />
            <Blog />
        </div>
    </main>
)

export default Main;