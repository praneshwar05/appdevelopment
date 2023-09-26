import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slice/userSlice';

const SignOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(logout());
    localStorage.removeItem('id');
    navigate('/login');
  };
  return (
    <div className="cursor-pointer">
      <button
        className="text-center position-relative cursor-pointer bg-none btn"
        type="button"
        onClick={logOutUser}
      >
        <img src="/log-out.png" alt="Log Out" style={{ cursor: 'pointer' }} />
        <p>
          <b>Logout</b>
        </p>
      </button>
    </div>
  );
};

export default SignOutBtn;
