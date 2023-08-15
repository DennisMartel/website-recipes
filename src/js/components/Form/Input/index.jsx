import PropTypes from 'prop-types';

const Input = ({
  type,
  id,
  label,
  name,
  tabIndex,
  placeholder
}) => {
  return (
    <div className='w-full'>
      {!!label ? <label className='block font-medium text-xs text-gray-700 mb-1' htmlFor={id}>{label}</label> : null}
      <input
        aria-label={label}
        className='border-gray-300 focus:border-gray-400 ring-0 focus:ring-0 w-full text-md rounded-md placeholder-transparent'
        type={type}
        id={id}
        name={name}
        tabIndex={tabIndex}
        placeholder={placeholder}
      />
    </div>
  )
}

Input.propTypes = {
  initialValue: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text'
}

export default Input