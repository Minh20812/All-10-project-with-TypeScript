import { Link } from "react-router-dom";

const MenuButton = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/pj1">UserProfile</Link>
              </li>
              <li>
                <Link to="/pj2">Search</Link>
              </li>
              <li>
                <Link to="/pj3">CollectionList</Link>
              </li>
              <li>
                <Link to="/pj4">ProductReview</Link>
              </li>
              <li>
                <Link to="/pj5">UserList</Link>
              </li>
              <li>
                <Link to="/pj6">BuySubscription</Link>
              </li>
              <li>
                <Link to="/pj7">Notification</Link>
              </li>
              <li>
                <Link to="/pj8">Job Cards</Link>
              </li>
              <li>
                <Link to="/pj9">List</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MenuButton;
