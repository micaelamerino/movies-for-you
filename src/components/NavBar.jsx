import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center place-content-between px-5 py-2 bg-gradient-to-t from-blue-900 text-white h-16">
      <h1 className="font-primary text-2xl cursor-pointer">MOVIES FOR YOU</h1>
      <button
        className="bg-white hover:bg-gray-200 text-blue-800 font-medium p-2 rounded"
        onClick={() => navigate("/home")}
      >
        CERRAR SESIÓN
      </button>
    </nav>
  );
};

export default NavBar;
