import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

const ResetPassword = () => {
  return (
    <Layout>
      <div className="h-full w-full py-16">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-md lg:w-7/12 md:w-9/12 w-11/12 p-8">
            <p tabIndex={0} className='text-xl md:text-2xl font-extrabold leading-6 text-gray-800'>Olvidé mi contraseña</p>
            <p className='block text-sm md:text-md mt-2 text-gray-800'>Para cambiar su contraseña, necesitamos verificar su identidad. Ingresa la dirección de correo electrónico asociado a tu cuenta</p>
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
              <Button title="Continuar" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword