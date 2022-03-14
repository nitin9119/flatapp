import { useState } from "react";

export const Signup = () => {
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
      <br />
      <input
        type="text"
        onChange={handleLogin}
        name="mobile"
        placeholder="Enter mobile number"
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};
