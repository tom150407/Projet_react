import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/userList">Utilisateurs</Link>
        <Link to="/login">Connexion</Link>
      </nav>
    </header>
  );
}

export default Header;
