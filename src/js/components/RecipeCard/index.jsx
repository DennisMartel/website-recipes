import PropTypes from 'prop-types';

const RecipeCard = ({ data }) => {
  return data && (
    <article className='bg-white shadow-md rounded-lg flex flex-col overflow-hidden'>
      <figure>
        <img src={`https://tureceta-svc.solutionsmartel.com/storage/${data.image_link}`} alt="" className='h-40 w-full object-cover object-center' />
      </figure>
      <div className='px-4 py-3 flex flex-col flex-1'>
        <div className="self-end float-right -mt-10 mb-1">
          <img className="h-12 w-12 rounded-full object-cover object-center shadow-lg" src={data.author_image} alt={data.author_name} />
        </div>
        <h1 className="text-lg text-gray-700 font-semibold leading-6 mb-1 line-clamp-2">{data.title}</h1>
        <p className="text-gray-500 text-sm mt-auto truncate">Autor: {data.author_name}</p>
        <a href="" className="inline-block bg-rose-500 w-full rounded-lg text-white hover:bg-rose-400 text-center py-1 font-semibold mt-2">Ver receta</a>
      </div>
    </article>
  )
}

RecipeCard.propTypes = {
  data: PropTypes.object
}

export default RecipeCard