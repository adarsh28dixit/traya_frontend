import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    behaviour: 1,
    maintenance: 1,
    fair: 1,
    safety: 1,
  });
  const {email, behaviour, maintenance, fair, safety } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value ,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        behaviour,
        maintenance,
        fair,
        safety,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");

  } else {
      
      alert("data added");

  }
  };
  return (
    <div className="form-container">
      <div>
        <input type="text" placeholder="Enter your email" name="email" value={email} onChange={onChange} />
      </div>
      <div>
        <h3>1: How much will you rate for driver behaviour?</h3>
        <select name="behaviour" value={behaviour} onChange={onChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <h3>1: How much will you rate for cab maintenace?</h3>
        <select name="maintenance" value={maintenance} onChange={onChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <h3>1: How much will you rate for trip fair?</h3>
        <select name="fair" value={fair} onChange={onChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <h3>1: How much will you rate for safety in cab?</h3>
        <select name="safety" value={safety} onChange={onChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
