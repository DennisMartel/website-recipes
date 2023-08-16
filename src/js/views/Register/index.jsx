import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

const register = () => {
  return (
    <Layout>
      <div className="h-full w-full py-16">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-md lg:w-3/5 md:w-4/5 w-11/12 p-8">
            <div className="w-full lg:w-9/12 mx-auto">
              <p tabIndex={0} className='text-xl md:text-2xl font-extrabold leading-6 text-gray-800'>Crea tu cuenta</p>
              <p className='block text-sm md:text-md mt-2 text-gray-800'>Ya tienes una cuenta? <Link to='/login' className='hover:text-gray-500 active:text-rose-600'>Inicia sesion</Link></p>
              <div className="py-6">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <Input
                    id='name'
                    label='Nombres'
                    name='name'
                    placeholder='Nombres'
                    type='text'
                    tabIndex={1}
                  />
                  <Input
                    id='lastname'
                    label='Apellidos'
                    name='lastname'
                    placeholder='Apellidos'
                    type='text'
                    tabIndex={1}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    id='emai'
                    label='Correo electronico'
                    name='email'
                    placeholder='Correo electronico'
                    type='email'
                    tabIndex={1}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    id='password'
                    label='Cotrasena'
                    name='password'
                    placeholder='Contrasena'
                    type='password'
                    tabIndex={1}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    id='confirm-password'
                    label='Confirmar contrasena'
                    name='confirm-password'
                    placeholder='confirmar contrasena'
                    type='password'
                    tabIndex={1}
                  />
                </div>
                <Button title="Crear cuenta" />
                <div className="w-full flex items-center justify-between my-8">
                  <div className="w-full border bg-gray-400" />
                  <p className="text-base font-medium leading-4 text-gray-600 w-full text-center">o también</p>
                  <div className="w-full border bg-gray-400" />
                </div>
                <button className='w-full border border-gray-500 rounded-md h-10 font-semibold hover:bg-gray-100'>
                  Acceder con Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default register