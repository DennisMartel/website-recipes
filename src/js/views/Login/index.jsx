import Layout from '../../components/Layout';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Link } from 'react-router-dom';
import styles from './Login.scss';

const Login = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.loginWrapper}>
            <p tabIndex={0} className={styles.title}>Inicia sesión en tu cuenta</p>
            <p className={styles.subtitle}>¿No tienes una cuenta? <Link to='/register' className={styles.subtitleLink}>Crear cuenta</Link></p>
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
                <Link to='/reset-password' className={styles.resetPasswordLink}>¿Olvidaste tu contraseña?</Link>
              </div>
              <Button title="Iniciar sesion" />
              <div className={styles.orBox}>
                <div className={styles.orLine} />
                <p className={styles.orText}>o también</p>
                <div className={styles.orLine} />
              </div>
              <button className={styles.googleBtn}>
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