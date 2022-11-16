import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { AppWrapper } from './App.styled';

// import { RestrictedRoute } from 'components/RestrictedRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Home } from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

// const HomePage = lazy(() => import('pages/Home'));
// const RegisterPage = lazy(() => import('pages/Register'));
// const LoginPage = lazy(() => import('pages/Login'));
// const TasksPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};
