import React from 'react';

import css from '../styles.css'
import Button from '../components/Button/button'

const overlay = {
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: '#4a63e7',
    opacity: .9,
    borderRadius: 20,
    boxSizing: 'border-box'
}
const mainContainer ={
    minHeight: 400,
    maxWidth: 1140,
    alignItems: 'center',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative'
}

const mainRow = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'center'
}
const mainColumn ={
    position: 'relative',
    minHeight: 1,
    display: 'flex'
}

const columnWrap ={
    width: '100%',
    position: 'relative',
    display: 'flex',
    margin: '8px 120px 0'
}

const headTitle = {
    fontFamily: "Poppins",
    fontSize: "60px",
    fontWeight: 700,
    lineHeight: ".7em",
    color: "#fff"
}

const Home = () => {
    return (
        <section className={css.contentCard}>
            <div style={overlay}></div>
            <div style={mainContainer}>
                <div style={mainRow}>
                    <div style={mainColumn}>
                        <div style={columnWrap}>
                            <div>
                                <h1 style={headTitle}>I'm Kweku</h1>
                            
                                <p style={{color: '#fff'}}>With a strong technical skill-set, attention to detail and 4  years of experience, 
                                    I work as a Full Stack engineer with a strong focus on Front-end technologies where 
                                    I create digital magic and elevate user experience.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                    <Button name={"View Projects"}/>
                    </div>
                    <div>
                        <Button name="Hire Me"/>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home;