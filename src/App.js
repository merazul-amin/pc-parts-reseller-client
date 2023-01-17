import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import routes from './Routes/routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;
