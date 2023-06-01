import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
