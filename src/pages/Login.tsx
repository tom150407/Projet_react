import { useState } from "react";
import usersData from "../data/users.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = usersData.users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      setError("");
      navigate(`/profile/${user.id}`);
    } else {
      setError("Email ou mot de passe incorrect");
    }
  }

  return (
    <main>
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Se connecter</button>

        {error && <p>{error}</p>}
      </form>
    </main>
  );
}

export default Login;
