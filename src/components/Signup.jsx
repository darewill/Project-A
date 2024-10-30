import React from "react";
import "../style/Signup.css";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='h-[600px] bg-[url("https://static.vecteezy.com/system/resources/previews/024/658/912/large_2x/3d-male-character-pointing-left-with-confidence-free-png.png")] bg-no-repeat bg-[length:32%] bg-[top_-2.5rem_left_12rem]'>
      <div className="lgn-wrapper flex justify-center flex-col items-center mt-[150px]">
        <h1 className="text-[#0e0e0e] text-[32px] font-bold mt-[80px] mb-[15px] cursor-default">
          Create a New Account
        </h1>
        <Input
          type="firstame"
          placeholder=" Firstname"
          className="lgn-inp from-indigo-500 outline-none m-[10px] w-[300px] rounded "
        />
        <Input
          type="lastname"
          placeholder=" Lastname"
          className="lgn-inp from-indigo-500 outline-none m-[10px] w-[300px] rounded "
        />
        <Input
          type="email"
          placeholder=" Email"
          className="lgn-inp from-indigo-500 outline-none m-[10px] w-[300px] rounded "
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
          Signup
        </Button>
        <hr className="mt-[30px] bg-[#c3c2c2] w-[350px] h-[2px]" />
        <h1 className="text-[#0e0e0e] text-[20px] font-semibold mt-[20px] cursor-default">
          Already have an account?
        </h1>
        <Link to='/login'>
            <h1 className='text-[#4855b7] text-[20px] font-bold '>Login</h1>
        </Link>
      </div>
    </div>
  );
}
