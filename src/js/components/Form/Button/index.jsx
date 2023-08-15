import PropTypes from 'prop-types';

const Button = ({
  type,
  title,
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='w-full bg-rose-600 hover:bg-rose-500 h-12 rounded-md active:bg-rose-700'
    >
      <span className='text-white font-medium'>{title}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button'
}

export default Button