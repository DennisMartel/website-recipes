import { useState } from "react";
import PropTypes from 'prop-types';
import dbFilterPanel from '../../db/filter_panel.json';
import { filterTypes } from "../../utils/filterTypes";
import CategoryFilterPanel from "./CategoryFilterPanel";
import CostFilterPanel from "./CostFilterPanel";
import DifficultyFilterPanel from "./DifficultyFilterPanel";

const FilterPanel = ({ handlerFilter }) => {
  const [isOpenDifficultyPanelFilter, setIsOpenDifficultyPanelFilter] = useState(true);
  const [isOpenCategoryPanelFilter, setIsOpenCategoryPanelFilter] = useState(true);
  const [isOpenCostPanelFilter, setIsOpenCostPanelFilter] = useState(true);

  return (
    <aside>
      <div className='sticky top-24 shadow rounded-md w-full bg-white px-4'>
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
  handlerFilter: PropTypes.func
}

export default FilterPanel