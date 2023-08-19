import { useState, useCallback } from 'react';
import DB_products from '../../db/product_db.json';
import { filterTypes } from '../../utils/filterTypes';
import FilterPanel from '../../components/FilterPanel';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import RecipeCard from '../../components/RecipeCard';

const Homepage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    difficulties: new Set(),
    categories: new Set(),
    costs: new Set()
  });

  const handlerFilterChange = useCallback((e, filterType) => {
    setFilters(prevState => {
      const isChecked = e.target.checked;
      const value = e.target.value;
      const difficulties = new Set(prevState.difficulties);
      const categories = new Set(prevState.categories);
      const costs = new Set(prevState.costs);

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

      const filteredDifficulties = Array.from(difficulties).join(',');
      const filteredCategories = Array.from(categories).join(',');
      const filteredCosts = Array.from(costs).join(',');
      console.log('dificultades ' + filteredDifficulties);
      console.log('categorias ' + filteredCategories);
      console.log('costos ' + filteredCosts);

      return {
        difficulties,
        categories,
        costs
      }
    });
  }, [setFilters]);


  return (
    <Layout>
      <div className='mt-8 mb-20'>
        <div className="grid grid-cols-4 gap-4">
          <FilterPanel
            handlerFilter={handlerFilterChange}
            handlerClose={() => setOpenFilter(false)}
            open={openFilter}
          />
          <section className="col-span-4 lg:col-span-3">
            <div className="mb-4 flex items-center">
              <input type="text" className="w-full rounded-lg border ring-0 focus:ring-0 focus:border-gray-500 border-gray-400 outline-none p-2" placeholder="Buscar ..." />
              <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" onClick={() => setOpenFilter(!openFilter)}>
                <span className="sr-only">Filters</span>
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {DB_products.products.map((data, key) => (
                <RecipeCard data={data} key={key} />
              ))}
            </div>
            <Pagination />
          </section>
        </div>
      </div >
    </Layout >
  )
}

export default Homepage