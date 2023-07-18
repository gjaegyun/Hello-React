import './button.css';

function Button({children, onClick, color = 'red', className = ''}) {
    const classNames = `Button ${color} ${className}`;
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
