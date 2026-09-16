import { Link } from "react-router-dom";
import usersData from "../data/users.json";

function UserList() {
  return (
    <main>
      <h1>User List</h1>

      <ul className="user-list">
        {usersData.users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserList;
