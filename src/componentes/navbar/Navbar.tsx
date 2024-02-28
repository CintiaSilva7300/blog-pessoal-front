import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  let navbarComponent;
  if (usuario.token) {
    navbarComponent = (
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="flex items-center gap-1">
              Postagens
            </Link>
            <Link to="/temas" className="flex items-center gap-1">
              Temas
            </Link>
            <Link to="/cadastroTema" className="flex items-center gap-1">
              Novo tema
            </Link>
            <Link to="/perfil" className="flex items-center gap-1">
              Perfil
            </Link>
            <Link to="" onClick={logout} className=" flex items-center gap-1">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
