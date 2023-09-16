import classNames from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = ({
  id,
  name,
  value,
  checked,
  cssClass,
  titleClass,
  tabIndex,
  title,
  onChange
}) => {
  const checkboxClasses = classNames(
    'h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50',
    { [cssClass]: !!cssClass }
  )

  const titleClasses = classNames(
    'ml-3 text-lg text-gray-600',
    { [titleClass]: !!titleClass }
  )

  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        type="checkbox"
        className={checkboxClasses}
        onChange={onChange}
        tabIndex={tabIndex}
      />
      <label htmlFor={id} className={titleClasses}>{title}</label>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  cssClass: PropTypes.string,
  titleClass: PropTypes.string,
  tabIndex: PropTypes.any,
  title: PropTypes.string,
  onChange: PropTypes.func,
}

export default Checkbox