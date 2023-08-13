import { Routes, Route } from 'react-router-dom';

// views
import Homepage from '../views/Homepage';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
    </Routes>
  )
}

export default Router;