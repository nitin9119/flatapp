import { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState({});

  const handleLogin = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleLogin}
        name=" email"
        placeholder="enter email"
      />
      <br />
      <input
        type="text"
        onChange={handleLogin}
        name="password"
        placeholder="Enter password"
      />

      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};
