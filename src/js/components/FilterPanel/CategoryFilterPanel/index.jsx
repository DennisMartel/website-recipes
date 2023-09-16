import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimateHeight from "react-animate-height"
import Checkbox from '../../Form/Checkbox';

const CategoryFilterPanel = ({ options, onChange, onClick, isOpened }) => {
  const [search, setSearch] = useSearchParams();

  const onHandlerChange = useCallback(e => {
    onChange(e);
    let cats = search.get("cats")?.split(",") ?? [];
    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      cats.push(value);
    } else {
      cats = cats.filter(_value => _value !== value);
    }

    if (cats.length === 0) {
      search.delete("cats");
    } else {
      search.set("cats", cats.join(","));
    }

    if (search.get("page")) {
      search.delete("page");
    }

    setSearch(search);
  }, [search]);

  return (
    <div className='border-t border-gray-200 py-4'>
      <h3 className='-my-3 flow-root' onClick={onClick}>
        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
          <span className="font-semibold text-lg text-black">Categoria</span>
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
            {options && Array.isArray(options) && options.map(({ title }, key) => (
              <Checkbox
                id={`filter-category-${key + 1}`}
                name="category"
                key={key}
                tabIndex={1}
                title={title}
                value={title}
                onChange={onHandlerChange}
                checked={search.get("cats")?.split(",").includes(title)}
              />
            ))}
          </div>
        </div>
      </AnimateHeight>
    </div>
  )
}

CategoryFilterPanel.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  isOpened: PropTypes.bool
}

export default CategoryFilterPanel