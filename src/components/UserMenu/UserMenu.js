import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { selectUser } from 'redux/auth/selectors';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector(selectUser);

  return (
    <div>
      <p>Welcome</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
