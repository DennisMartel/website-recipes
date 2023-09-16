import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import dbFilterPanel from '../../db/filter_panel.json';
import { filterTypes } from "../../utils/filterTypes";
import CategoryFilterPanel from "./CategoryFilterPanel";
import CostFilterPanel from "./CostFilterPanel";
import DifficultyFilterPanel from "./DifficultyFilterPanel";
import styles from './FilterPanel.scss';

const FilterPanel = ({ handlerFilter, handlerClose, open, categoriesData }) => {
  const [isOpenDifficultyPanelFilter, setIsOpenDifficultyPanelFilter] = useState(true);
  const [isOpenCategoryPanelFilter, setIsOpenCategoryPanelFilter] = useState(true);
  const [isOpenCostPanelFilter, setIsOpenCostPanelFilter] = useState(true);
  const filterPanelRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.querySelector('body').classList.add("noScroll");

      return () => {
        document.querySelector('body').classList.remove("noScroll");
      }
    }
  }, [open]);

  return (
    <aside>
      {open && <div className={styles.overlayFilterPanel} onClick={handlerClose} />}
      <div ref={filterPanelRef} className={classNames(
        'fixed lg:sticky right-0 top-0 lg:top-24 px-4 h-full lg:h-auto bg-white w-4/5 sm:w-3/5 md:w-1/2 lg:w-full z-50 lg:z-0 transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto',
        { ['translate-x-full']: !open }
      )}>
        <div className={styles.filterPanelHeader}>
          <h2 class={styles.filterText}>Filtros</h2>
          <button
            type="button"
            class={styles.closeBtnFilterPanel}
            onClick={handlerClose}
          >
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <DifficultyFilterPanel
          options={dbFilterPanel.difficulties}
          isOpened={isOpenDifficultyPanelFilter}
          onClick={() => setIsOpenDifficultyPanelFilter(!isOpenDifficultyPanelFilter)}
          onChange={(e) => handlerFilter(e, filterTypes.difficulties)}
        />
        <CategoryFilterPanel
          options={categoriesData}
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
    </aside >
  )
}

FilterPanel.propTypes = {
  handlerFilter: PropTypes.func,
  handlerClose: PropTypes.func,
  open: PropTypes.bool,
  categoriesData: PropTypes.array,
}

export default FilterPanel