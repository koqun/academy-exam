import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const stylegreen = {
    color : "green"
  }

  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? stylegreen : undefined)}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? stylegreen : undefined)}
      >
        About
      </NavLink>
      |
      <NavLink
        to="/board"
        style={({ isActive }) => (isActive ? stylegreen : undefined)}
      >
        Board
      </NavLink>
      <Outlet></Outlet>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Layout;
