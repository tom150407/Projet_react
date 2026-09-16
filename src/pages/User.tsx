import { useNavigate, useParams } from "react-router-dom";
import usersData from "../data/users.json";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = usersData.users.find((user) => user.id === Number(id));

  if (!user) {
    return <h1>Utilisateur introuvable</h1>;
  }

  return (
    <main className="user-detail">
      <button onClick={() => navigate(-1)}>← Retour</button>

      <h1>{user.username}</h1>

      <img src={user.image} alt={user.username} />
    </main>
  );
}

export default User;
