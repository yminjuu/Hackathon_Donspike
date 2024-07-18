import { createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './Login/pages/LoginPage';
import JoinPage from './Join/pages/JoinPage';
import MainPage from './Main/pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/join',
    element: <JoinPage></JoinPage>,
  },
  // {
  //   path: '/home/:id',
  //   element: <Home></Home>,
  // },
  {
    path: '/',
    element: <MainPage></MainPage>,
    // 추후 바로 Main으로 연결하되, 로그인 안되어있으면 login page로 route
  },
]);

export default router;
