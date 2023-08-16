import { useState, useCallback } from 'react';
import DB_products from '../../db/product_db.json';
import { filterTypes } from '../../utils/filterTypes';
import FilterPanel from '../../components/FilterPanel';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import RecipeCard from '../../components/RecipeCard';

const Homepage = () => {
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
      console.log('dificultades '+filteredDifficulties);
      console.log('categorias '+filteredCategories);
      console.log('costos '+filteredCosts);

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
          />
          <section className="col-span-3">
            <div className="mb-4 flex items-center">
              <input type="text" className="w-full rounded-lg border ring-0 focus:ring-0 focus:border-gray-500 border-gray-400 outline-none p-2" placeholder="Buscar ..." />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {DB_products.products.map((data, key) => (
                <RecipeCard data={data} key={key} />
              ))}
            </div>
            <Pagination />
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage