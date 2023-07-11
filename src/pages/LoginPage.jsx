import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      navigate("/dashboard");
    } else {
      setError("*Debe completar los campos");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <main className="flex flex-col items-center text-center gap-5">
        <div>
          <h1 className="font-primary text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-white">MOVIES FOR YOU</h1>
          <p>Inicie sesión para comenzar a navegar</p>
        </div>
        <form
          className="flex flex-col items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="border-2 border-blue-500 rounded p-2 text-black"
            type="email"
            placeholder="correo@email.com"
            autoComplete="on"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            className="border-2 border-blue-700 rounded p-2 text-black"
            type="password"
            placeholder="password"
            autoComplete="off"
            value={password}
            onChange={handleChangePassword}
          />
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium rounded py-1 px-2 mr-1">
            INICIAR SESIÓN
          </button>
          <p className="text-red-600 font-semibold h-6">{error}</p>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
