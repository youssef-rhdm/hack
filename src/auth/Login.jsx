import { useState } from "react";

import { LoginSchema } from "../validation/LoginSchema";

export default function Login() {
  const [FormData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isvalid = await LoginSchema.validate(FormData)
      .then((data) => {
        console.table(data);
      })
      .catch((err) => {
        console.warn(err.errors);
      });
    // console.log(FormData);
  };
  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            value={FormData.email}
            required
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={FormData.password}
            onChange={(e) => {
              handleInputs(e);
            }}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
