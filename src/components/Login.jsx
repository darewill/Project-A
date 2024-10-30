import React from "react";
import "../style/Login.css";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='h-[600px] bg-[url("https://static.vecteezy.com/system/resources/previews/024/658/862/non_2x/3d-male-character-standing-confused-and-working-on-a-laptop-free-png.png")] bg-no-repeat bg-[length:32%] bg-[top_-2.5rem_left_12rem]'>
      <div className="lgn-wrapper flex justify-center flex-col items-center mt-[150px]">
        <h1 className="text-[#0e0e0e] text-[25px] font-bold mt-[80px] mb-[15px] cursor-default">
          Login To Your Account
        </h1>
        <Input
          type="email"
          placeholder=" Email"
          className="lgn-inp outline-none m-[10px] w-[300px] rounded "
        />
        <Input
          type="password"
          placeholder=" Password"
          className="lgn-inp outline-none m-[10px] w-[300px] rounded "
        />
        <Button
          variant="secondary"
          className="lgn-btn mt-[20px] rounded w-[100px] shadow-md"
        >
          Login
        </Button>
        <hr className="mt-[30px] bg-[#c3c2c2] w-[350px] h-[2px]" />
        <h1 className="text-[#0e0e0e] text-[20px] font-semibold mt-[20px] cursor-default">
          Don't have an account?
        </h1>
        <Link to='/signup'>
            <h1 className='text-[#4855b7] text-[20px] font-bold '>Register</h1>
        </Link>
      </div>
    </div>
  );
}
