import React, { useState } from "react";

export default function ConditionalFrom() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   const handleChange2 = (e) => {
  //     const { name, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (!formData.userName || !formData.email || !formData.password) {
      setError("all the are required");
      return;
    }
    if (!formData.terms) {
      setError("accept the checkbox");
      return;
    }
    setError("");
    alert("form submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>conditional form</h2>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
