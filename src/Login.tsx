import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

interface UserForm {
  email: string;
  password: string;
  confirmPassword?: string;
}

enum FormType {
  LOGIN,
  REGISTER,
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
  const [form, setForm] = useState<UserForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      formType === FormType.REGISTER &&
      form.password !== form.confirmPassword
    ) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      const url =
        formType === FormType.LOGIN
          ? "https://reqres.in/api/login"
          : "https://reqres.in/api/register";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (formType === FormType.LOGIN) {
        localStorage.setItem("token", data.token);
        navigate("/user");
      } else {
        navigate("/user");
      }

      // Chuyển hướng người dùng sau khi thành công
      console.log("Đăng nhập/Đăng ký thành công", data);
      <User />;
    } catch (err) {
      setError(
        formType === FormType.LOGIN
          ? "Đăng nhập thất bại."
          : "Đăng ký thất bại.",
      );
    }
  };

  const toggleFormType = () => {
    setFormType(
      formType === FormType.LOGIN ? FormType.REGISTER : FormType.LOGIN,
    );
    setForm({ email: "", password: "", confirmPassword: "" });
    setError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="text-center"
          required
        />
        <label htmlFor="email" className="font-thin">
          eve.holt@reqres.in
        </label>
      </div>
      <div className="flex gap-2">
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
          className="text-center"
          required
        />
        <label htmlFor="email" className="font-thin">
          cityslicka / pistol
        </label>
      </div>

      {formType === FormType.REGISTER && (
        <div className="flex gap-2">
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Xác nhận mật khẩu"
            className="text-center"
            required
          />
          <label htmlFor="email" className="font-thin">
            pistol
          </label>
        </div>
      )}
      {error && <p>{error}</p>}
      <button type="submit">
        {formType === FormType.LOGIN ? "Đăng nhập" : "Đăng ký"}
      </button>
      <button type="button" onClick={toggleFormType}>
        {formType === FormType.LOGIN
          ? "Chuyển sang đăng ký"
          : "Chuyển sang đăng nhập"}
      </button>
    </form>
  );
};

export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// interface UserForm {
//   email: string;
//   password: string;
//   confirmPassword?: string;
// }

// enum FormType {
//   LOGIN,
//   REGISTER,
// }

// const AuthForm: React.FC = () => {
//   const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
//   const [form, setForm] = useState<UserForm>({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (
//       formType === FormType.REGISTER &&
//       form.password !== form.confirmPassword
//     ) {
//       setError("Mật khẩu xác nhận không khớp.");
//       return;
//     }

//     try {
//       let response;
//       if (formType === FormType.LOGIN) {
//         response = await axios.post("https://reqres.in/api/login", {
//           email: form.email,
//           password: form.password,
//         });
//         localStorage.setItem("token", response.data.token);
//       } else {
//         response = await axios.post("https://reqres.in/api/register", {
//           email: form.email,
//           password: form.password,
//         });
//         // Có thể tự động đăng nhập sau khi đăng ký thành công
//         console.log("cut");
//       }
//       // Chuyển hướng người dùng sau khi thành công
//       console.log("cm");
//     } catch (err) {
//       setError(
//         formType === FormType.LOGIN
//           ? "Đăng nhập thất bại."
//           : "Đăng ký thất bại.",
//       );
//     }
//   };

//   const toggleFormType = () => {
//     setFormType(
//       formType === FormType.LOGIN ? FormType.REGISTER : FormType.LOGIN,
//     );
//     setForm({ email: "", password: "", confirmPassword: "" });
//     setError(null);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col items-center justify-center text-center"
//     >
//       <input
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="text-center"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="Mật khẩu"
//         className="text-center"
//         required
//       />
//       {formType === FormType.REGISTER && (
//         <input
//           type="password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           placeholder="Xác nhận mật khẩu"
//           className="text-center"
//           required
//         />
//       )}
//       {error && <p>{error}</p>}
//       <button type="submit">
//         {formType === FormType.LOGIN ? "Đăng nhập" : "Đăng ký"}
//       </button>
//       <button type="button" onClick={toggleFormType}>
//         {formType === FormType.LOGIN
//           ? "Chuyển sang đăng ký"
//           : "Chuyển sang đăng nhập"}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;
