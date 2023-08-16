import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  type,
  title,
  cssClass,
  onClick
}) => {
  const buttonClasses = classNames(
    'block w-full bg-rose-600 hover:bg-rose-500 h-12 rounded-md active:bg-rose-700',
    { [cssClass]: !!cssClass }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      <span className='text-lg text-white font-medium'>{title}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  cssClass: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button'
}

export default Button