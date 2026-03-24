import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './src/Pages/RootLayout';
import Login from './src/Pages/Login';
import Dashboard from './src/Pages/Dashboard';
import AboutUs from './src/Pages/AboutUs';
import ContactUs from './src/Pages/ContactUs';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: 'dashboard',
        Component: Dashboard,
      },
      {
        path: 'aboutus',
        Component: AboutUs,
      },
      {
        path: 'contactus',
        Component: ContactUs,
      },
    ],
  },
]);