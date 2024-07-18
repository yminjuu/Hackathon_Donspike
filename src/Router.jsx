import { createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/join',
    element: <Join></Join>,
  },
  // {
  //   path: '/home/:id',
  //   element: <Home></Home>,
  // },
  {
    path: '/',
    element: <Main></Main>,
    // 추후 바로 Main으로 연결하되, 로그인 안되어있으면 login page로 route
  },
]);

export default router;
