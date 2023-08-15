import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';

const Homepage = () => {
  return (
    <Layout>
      <div className='mt-8 mb-20'>
        <div className="grid grid-cols-4 gap-4">
          <aside>
            <div className='sticky top-24 shadow rounded-md w-full bg-white px-4'>
              <div className='border-b border-gray-200 py-4'>
                <h3 className='-my-3 flow-root'>
                  <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-semibold text-lg text-black">Dificultad</span>
                    <span className="ml-6 flex items-center">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-0">
                  <div class="space-y-4">
                    <div className="flex justify-between items-center">
                      <div class="flex items-center">
                        <input id="filter-difficulty-0" name="difficulty[]" value="Muy baja" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                        <label for="filter-difficulty-0" class="ml-3 text-lg text-gray-600">Muy baja</label>
                      </div>
                      <span className='text-gray-600 text-md'>10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div class="flex items-center">
                        <input id="filter-difficulty-1" name="difficulty[]" value="Baja" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                        <label for="filter-difficulty-1" class="ml-3 text-lg text-gray-600">Baja</label>
                      </div>
                      <span className='text-gray-600 text-md'>15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div class="flex items-center">
                        <input id="filter-difficulty-2" name="difficulty[]" value="Media" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                        <label for="filter-difficulty-2" class="ml-3 text-lg text-gray-600">Media</label>
                      </div>
                      <span className='text-gray-600 text-md'>7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div class="flex items-center">
                        <input id="filter-difficulty-3" name="difficulty[]" value="Alta" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                        <label for="filter-difficulty-3" class="ml-3 text-lg text-gray-600">Alta</label>
                      </div>
                      <span className='text-gray-600 text-md'>5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div class="flex items-center">
                        <input id="filter-difficulty-4" name="difficulty[]" value="Muy alta" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-indigo-500" />
                        <label for="filter-difficulty-4" class="ml-3 text-lg text-gray-600">Muy alta</label>
                      </div>
                      <span className='text-gray-600 text-md'>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-b border-gray-200 py-4'>
                <h3 className='-my-3 flow-root'>
                  <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-semibold text-lg text-black">Categoria</span>
                    <span className="ml-6 flex items-center">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-0">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="filter-category-0" name="category[]" value="Postres" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-0" class="ml-3 text-lg text-gray-600">Postres</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-1" name="category[]" value="Pasta" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-1" class="ml-3 text-lg text-gray-600">Pasta</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-2" name="category[]" value="Verduras" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-2" class="ml-3 text-lg text-gray-600">Verduras</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-3" name="category[]" value="Huevos y lacteos" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-3" class="ml-3 text-lg text-gray-600">Huevos y lacteos</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-4" name="category[]" value="Ensaladas" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-4" class="ml-3 text-lg text-gray-600">Ensaladas</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-5" name="category[]" value="Carne" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-5" class="ml-3 text-lg text-gray-600">Carne</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-6" name="category[]" value="Pescado" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-6" class="ml-3 text-lg text-gray-600">Pescado</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-7" name="category[]" value="Salsas" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-category-7" class="ml-3 text-lg text-gray-600">Salsas</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-b border-gray-200 py-4'>
                <h3 className='-my-3 flow-root'>
                  <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-semibold text-lg text-black">Coste</span>
                    <span className="ml-6 flex items-center">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pt-6" id="filter-section-0">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="filter-cost-0" name="cost[]" value="Muy baja" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-cost-0" class="ml-3 text-lg text-gray-600">Barato</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-cost-1" name="cost[]" value="Baja" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-cost-1" class="ml-3 text-lg text-gray-600">Medio</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-cost-2" name="cost[]" value="Media" type="checkbox" class="h-5 w-5 rounded border-gray-300 text-rose-600 focus:ring-rose-50" />
                      <label for="filter-cost-2" class="ml-3 text-lg text-gray-600">Caro</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section className="col-span-3">
            <div className="mb-4 flex items-center">
              <input type="text" className="w-full rounded-lg border border-gray-400 outline-none p-2" placeholder="Buscar ..." />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
                <article className='bg-white shadow-md rounded-lg flex flex-col overflow-hidden'>
                  <figure>
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Halloumi-Pasta440x400-ae3cb36.jpg" alt="" className='h-40 w-full object-cover object-center' />
                  </figure>
                  <div className='px-4 py-3 flex flex-col flex-1'>
                    <div className="self-end float-right -mt-10 mb-1">
                      <img className="h-12 w-12 rounded-full object-cover object-center shadow-lg" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="" />
                    </div>
                    <h1 className="text-lg text-gray-700 font-semibold leading-6 mb-1 line-clamp-2">Como hacer espaguetti a la bolognesa</h1>
                    <p className="text-gray-500 text-sm mt-auto truncate">Autor: Jonh Doe</p>
                    <a href="" className="inline-block bg-rose-500 w-full rounded-lg text-white hover:bg-rose-400 text-center py-1 font-semibold mt-2">ver receta</a>
                  </div>
                </article>
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