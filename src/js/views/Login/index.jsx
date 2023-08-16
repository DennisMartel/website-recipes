import Layout from '../../components/Layout';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <div className="h-full w-full py-16">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-md lg:w-2/5 md:w-1/2 w-11/12 p-8">
            <p tabIndex={0} className='text-2xl font-extrabold leading-6 text-gray-800'>Inicia sesión en tu cuenta</p>
            <p className='block text-md mt-2 text-gray-800'>¿No tienes una cuenta? <Link to='/register' className='hover:text-gray-500 active:text-rose-600'>Crear cuenta</Link></p>
            <div className="py-6">
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
                <Link to='/reset-password' className='block text-sm text-right my-3 hover:text-gray-500 active:text-rose-600'>¿Olvidaste tu contraseña?</Link>
              </div>
              <Button title="Iniciar sesion" />
              <div className="w-full flex items-center justify-between my-8">
                <div className="w-full border bg-gray-400" />
                <p className="text-base font-medium leading-4 text-gray-600 w-full text-center">o también</p>
                <div className="w-full border bg-gray-400" />
              </div>
              <button className='w-full border border-gray-500 rounded-md h-10 font-semibold'>
                Acceder con Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login