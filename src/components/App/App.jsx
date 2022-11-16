import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from '../Layout';
import { AppWrapper } from './App.styled';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      {isRefreshing ? (
        <Loader />
      ) : (
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ToastContainer transition={Flip} />
        </AppWrapper>
      )}
      ;
    </ChakraProvider>
  );
};
