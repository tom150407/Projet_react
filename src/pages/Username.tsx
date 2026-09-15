import { useNavigate, useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Retour</button>

      <h1>User name is {username}</h1>
    </div>
  );
}

export default User;
