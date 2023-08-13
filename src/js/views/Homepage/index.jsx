import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';

const Homepage = () => {
  return (
    <Layout>
      <div className='mt-8 mb-20'>
        <div className="grid grid-cols-3 gap-4">
          <aside>
            <div className='sticky top-24 shadow rounded-md w-full p-12 bg-white'>

            </div>
          </aside>
          <section className="col-span-2">
            <div class="mb-4 flex items-center">
              <input type="text" class="w-full rounded-lg border border-gray-400 outline-none p-2" placeholder="Buscar ..." />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                <article className='bg-white shadow-md rounded-lg flex flex-col overflow-hidden'>
                  <figure>
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Halloumi-Pasta440x400-ae3cb36.jpg" alt="" className='h-40 w-full object-cover object-center' />
                  </figure>
                  <div className='px-4 py-3 flex flex-col flex-1'>
                    <div class="self-end float-right -mt-10 mb-1">
                      <img class="h-12 w-12 rounded-full object-cover object-center shadow-lg" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="" />
                    </div>
                    <h1 class="text-lg text-gray-700 font-semibold leading-6 mb-1 line-clamp-2">Como hacer espaguetti a la bolognesa</h1>
                    <p class="text-gray-500 text-sm mt-auto truncate">Autor: Jonh Doe</p>
                    <a href="" class="inline-block bg-rose-500 w-full rounded-lg text-white hover:bg-rose-400 text-center py-1 font-semibold mt-2">ver receta</a>
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