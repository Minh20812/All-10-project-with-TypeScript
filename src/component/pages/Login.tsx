import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

interface FormData {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();

  const [formData, setFormData] = useReducer(
    (formData: FormData, newItem: Partial<FormData>) => {
      return { ...formData, ...newItem };
    },
    { email: "", password: "" },
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doLogin = async () => {
    try {
      await login(formData.email, formData.password);
      navigate("/account");
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div className="page">
      <h2>Login page</h2>
      <div className="inputs">
        <div className="input">
          <input
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input">
          <input
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="button">
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>
    </div>
  );
};
