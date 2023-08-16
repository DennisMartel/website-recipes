import { Routes, Route } from 'react-router-dom';

// views
import Homepage from '../views/Homepage';
import Login from '../views/Login';
import Register from '../views/Register';
import ResetPassword from '../views/ResetPassword';

const Router = () => {
  return (
    <Routes>
      {["/home", "/"].map(path => <Route path={path} element={<Homepage />} key={path} />)}
      <Route index path="/login" element={<Login />} />
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset-password" element={<ResetPassword />} />
    </Routes>
  )
}

export default Router;