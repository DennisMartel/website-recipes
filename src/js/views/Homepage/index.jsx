import { useState, useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// Actions
import { getRecipesDataAsync } from "../../actions/recipes";
import { getCategoriesDataAsync } from '../../actions/categories';
// Utils
import { filterTypes } from '../../utils/filterTypes';
// Components
import FilterPanel from '../../components/FilterPanel';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import RecipeCard from '../../components/RecipeCard';

const PageSize = 12;
let RECIPES = [];

const Homepage = ({ recipes, categories, dispatch }) => {
  const [search] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(parseInt(search.get("page")) > 1 ? parseInt(search.get("page")) : 1);
  const [showPagination, setShowPagination] = useState(false);
  const [filters, setFilters] = useState({
    difficulties: new Set(),
    categories: new Set(),
    costs: new Set(),
    recipes: RECIPES
  });

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  const prevRecipesData = useRef(recipes);
  const prevCategoriesData = useRef(categories)
  useEffect(() => {
    if (!(prevRecipesData.current.ended && recipes.data)) {
      dispatch(getRecipesDataAsync());
    }

    if (!(prevRecipesData.current.ended && categories.data)) {
      dispatch(getCategoriesDataAsync());
    }

    prevRecipesData.current = recipes;
    prevCategoriesData.current = categories;
  }, []);

  useEffect(() => {
    if (recipes.data && !recipes.isError) {
      setFilters({
        recipes: recipes.data
      });
      RECIPES = recipes.data;
      setShowPagination(true);
    }
  }, [recipes]);

  const handlerFilterChange = useCallback((e, filterType) => {
    setCurrentPage(1);
    setFilters(prevState => {
      const isChecked = e.target.checked;
      const value = e.target.value;
      const difficulties = new Set(prevState.difficulties);
      const categories = new Set(prevState.categories);
      const costs = new Set(prevState.costs);
      let recipes = RECIPES;

      switch (filterType) {
        case filterTypes.difficulties:
          isChecked ? difficulties.add(value) : difficulties.delete(value);
          break;
        case filterTypes.categories:
          isChecked ? categories.add(value) : categories.delete(value);
          break;
        case filterTypes.costs:
          isChecked ? costs.add(value) : costs.delete(value);
          break;
      }

      if (difficulties.size) {
        recipes = recipes.filter(recipe => {
          return difficulties.has(recipe.level_name);
        });
      }

      if (categories.size) {
        recipes = recipes.filter(recipe => {
          return categories.has(recipe.category_name);
        });
      }

      if (costs.size) {
        recipes = recipes.filter(recipe => {
          return costs.has(recipe.cost_name);
        });
      }

      return {
        difficulties,
        categories,
        costs,
        recipes
      }
    });
  }, [filters]);

  return (
    <Layout autoCompleteData={RECIPES}>
      <div className='mt-8 mb-20'>
        <div className="grid grid-cols-4 gap-4">
          <FilterPanel
            categoriesData={categories.data}
            handlerFilter={handlerFilterChange}
            handlerClose={() => setOpenFilter(false)}
            open={openFilter}
          />
          <section className="col-span-4 lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filters.recipes.map((data, key) => (
                <RecipeCard data={data} key={key} />
              )).slice(firstPageIndex, lastPageIndex)}
            </div>
            {showPagination ? (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={filters.recipes.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            ) : null}
          </section>
        </div>
      </div >
    </Layout >
  )
}

Homepage.propTypes = {
  dispatch: PropTypes.func,
  recipes: PropTypes.object,
  categories: PropTypes.object,
}

export default connect(state => ({
  recipes: state.recipes.recipes,
  categories: state.categories.categories
}), null)(Homepage);