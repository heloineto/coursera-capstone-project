import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Reservations from './pages/Reservations';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/reservations',
        element: <Reservations />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
