import { AuthData } from "../../auth/AuthWrapper";

interface User {
  email: string;
  token: string;
  isAuthenticated: boolean;
}

interface AuthDataType {
  user: User;
}

export const Account = () => {
  const { user } = AuthData() as AuthDataType;

  if (!user.isAuthenticated) {
    return (
      <div className="page">
        <h2>Account</h2>
        <p>Please log in to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Your Account</h2>
      <p>Email: {user.email}</p>
      <p>Authentication Token: {user.token}</p>
    </div>
  );
};
