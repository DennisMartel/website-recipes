import PropTypes from 'prop-types';
import Checkbox from '../../Form/Checkbox';
import AnimateHeight from 'react-animate-height';

const CostFilterPanel = ({ options, onChange, onClick, isOpened }) => {
  return (
    <div className='border-b border-gray-200 py-4'>
      <h3 className='-my-3 flow-root' onClick={onClick}>
        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
          <span className="font-semibold text-lg text-black">Coste</span>
          <span className="ml-6 flex items-center">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </span>
        </button>
      </h3>
      <AnimateHeight height={isOpened ? 'auto' : 0} duration={500}>
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            {options && Array.isArray(options) && options.map(({ label }, key) => (
              <Checkbox
                id={`filter-cost-${key + 1}`}
                name="cost[]"
                key={key}
                tabIndex={1}
                title={label}
                value={label}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      </AnimateHeight>
    </div>
  )
}

CostFilterPanel.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  isOpened: PropTypes.bool
}

export default CostFilterPanel;