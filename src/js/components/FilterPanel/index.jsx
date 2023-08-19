import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import dbFilterPanel from '../../db/filter_panel.json';
import { filterTypes } from "../../utils/filterTypes";
import CategoryFilterPanel from "./CategoryFilterPanel";
import CostFilterPanel from "./CostFilterPanel";
import DifficultyFilterPanel from "./DifficultyFilterPanel";
import styles from './FilterPanel.scss';

const FilterPanel = ({ handlerFilter, handlerClose, open }) => {
  const [isOpenDifficultyPanelFilter, setIsOpenDifficultyPanelFilter] = useState(true);
  const [isOpenCategoryPanelFilter, setIsOpenCategoryPanelFilter] = useState(true);
  const [isOpenCostPanelFilter, setIsOpenCostPanelFilter] = useState(true);
  const filterPanelRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.querySelector('body').classList = "noScrollable";
      
      return () => {
        document.querySelector('body').classList.remove("noScrollable");
      }
    }
  }, []);

  const closeFilterPanel = (e) => {
    if (filterPanelRef.current) {
      // handlerClose();
      if (!(filterPanelRef.current.contains(e.target))) {
      }
    }
  }

  return (
    <aside>
      {open && <div className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-25 z-50' />}
      <div onClick={closeFilterPanel} ref={filterPanelRef} className={classNames(
        styles.filterPanel,
        'fixed lg:sticky right-0 top-0 lg:top-24 px-4 h-full lg:h-auto bg-white w-4/5 sm:w-3/5 md:w-1/2 lg:w-full z-50 lg:z-0 transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto',
        styles.test,
        { ['translate-x-full']: !open }
      )}>
        <DifficultyFilterPanel
          options={dbFilterPanel.difficulties}
          isOpened={isOpenDifficultyPanelFilter}
          onClick={() => setIsOpenDifficultyPanelFilter(!isOpenDifficultyPanelFilter)}
          onChange={(e) => handlerFilter(e, filterTypes.difficulties)}
        />
        <CategoryFilterPanel
          options={dbFilterPanel.categories}
          isOpened={isOpenCategoryPanelFilter}
          onClick={() => setIsOpenCategoryPanelFilter(!isOpenCategoryPanelFilter)}
          onChange={(e) => handlerFilter(e, filterTypes.categories)}
        />
        <CostFilterPanel
          options={dbFilterPanel.costs}
          isOpened={isOpenCostPanelFilter}
          onClick={() => setIsOpenCostPanelFilter(!isOpenCostPanelFilter)}
          onChange={(e) => handlerFilter(e, filterTypes.costs)}
        />
      </div>
    </aside>
  )
}

FilterPanel.propTypes = {
  handlerFilter: PropTypes.func,
  handlerClose: PropTypes.func
}

export default FilterPanel