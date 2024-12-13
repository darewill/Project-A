import React, { useState } from "react";
import "../style/Login.css";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate, Navigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className='lgn-bg h-[600px] bg-[url("https://static.vecteezy.com/system/resources/previews/024/658/862/non_2x/3d-male-character-standing-confused-and-working-on-a-laptop-free-png.png")] bg-no-repeat bg-[length:32%] bg-[top_-2.5rem_left_12rem]'>
    <div className="login-wrapper flex justify-center flex-col items-center mt-[150px]">
      <h1 className="text-[#0e0e0e] text-[32px] font-bold mb-[15px] cursor-default">
        Log In to Your Account
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-inp from-indigo-500 outline-none m-[10px] w-[300px] rounded "
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-inp outline-none m-[10px] w-[300px] rounded "
      />
      <Button
        onClick={handleLogin}
        variant="secondary"
          className="lgn-btn mt-[20px] rounded w-[100px] shadow-md"
        >
        Login
      </Button>
      <hr className="mt-[30px] bg-[#c3c2c2] w-[350px] h-[2px]" />
      <h1 className="text-[#0e0e0e] text-[20px] font-semibold mt-[20px] cursor-default">
        Don't have an account?
      </h1>
      <Link to="/signup">
        <h1 className="text-[#4855b7] text-[20px] font-bold ">Register</h1>
      </Link>
    </div>
    </div>
  );
}
