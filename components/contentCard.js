import css from '../styles.css'

const content = (props) => {
    return (
        <section className={css.contentCard} style={props.background}>
            <div className={css.page}>
                <div className={css.contentRow}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default content