// import React from 'react';
// import { ToastContainer, Flip } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';

// import { AppWrapper, Title, TitleContacts } from './App.styled';

// export const App = () => {
//   return (
//     <AppWrapper>
//       <Title>Phonebook</Title>
//       <ContactForm />

//       <TitleContacts>Contacts</TitleContacts>
//       <Filter />
//       <ContactList />
//       <ToastContainer transition={Flip} />
//     </AppWrapper>
//   );
// };

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const TasksPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
