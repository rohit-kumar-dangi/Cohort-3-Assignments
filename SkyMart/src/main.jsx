import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from '../src/routes/AppRoutes'
import { BrowserRouter } from 'react-router';
import { ContextProvider } from "./context/MyContext.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <AppRoutes />
      <ToastContainer />
    </ContextProvider>
  </BrowserRouter>
)
