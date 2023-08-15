import { Routes, Route } from 'react-router-dom';

// views
import Homepage from '../views/Homepage';
import Login from '../views/Login';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route index path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router;