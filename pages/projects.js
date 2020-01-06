import css from '../styles.css'

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
    minHeight: '620px',
    maxWidth: '1140px',
    alignItems: 'center',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative'
}

const mainRow = {
    width: '100%',
    display: 'flex',
}
const mainColumn ={
    position: 'relative',
    minHeight: '1px',
    display: 'flex'
}

const columnWrap ={
    width: '100px',
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
        <section className={css.main}>
            <div style={overlay}></div>
            <div style={mainContainer}>
                <div style={mainRow}>
                    <div style={mainColumn}>
                        <div style={columnWrap}>
                            <div>
                                <h1 style={headTitle}>I'm Kweku</h1>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home;