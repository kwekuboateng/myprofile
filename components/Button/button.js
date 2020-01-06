import btnCss from './button.css'

const Button = (props) => {
    return (
    <a className={btnCss.btn}>{props.name}</a>
    )
}

export default Button;