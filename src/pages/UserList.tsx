import { Link } from "react-router-dom";

function UserList() {
  const users = ["Paul", "Jean", "Marie"];

  return (
    <div>
      <h1>Liste des utilisateurs</h1>

      {users.map((user) => (
        <div key={user}>
          <Link to={`/user/${user}`}>{user}</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
