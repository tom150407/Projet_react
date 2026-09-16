import { useParams } from "react-router-dom";
import usersData from "../data/users.json";

function Profile() {
  const { id } = useParams();

  const user = usersData.users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <main>
        <h1>Profil introuvable</h1>
      </main>
    );
  }

  return (
    <main className="profile">
      <h1>Mon profil</h1>

      <img src={user.image} alt={user.username} />

      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </main>
  );
}

export default Profile;
