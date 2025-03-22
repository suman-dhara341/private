import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { loginApi } from "../action/action";

const Login = () => {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = await loginApi(input);
    console.log(req);
  };

  return (
    <div className="grid grid-cols-2 gap-9 bg-[#f8f8fa]">
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/cd67/6611/7f82c568c1607e834ef24bd46481d7b0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h~HLuPn98EglG8-x0k6C1B3zIo6~XKRJmOSCdcS0GjQ3KYsm13~cS-e1s0FzRvdnlAUrKRLz~RbIhcffr5XUk2RjpxHnEgOECtNahmlmJoS4coxUtMFfBQw8QEWTnG7607-qOT-7zYzW6Gy5XwblIowtnUTvxkno9cisA99FwIFQ4E1bMrPtQAxgIeXtT2chy~09mjxA-OgPXUcYsJABsiVTGmNPU1FvUlBIomqlbntmjKtzoQ2ZNZaK61-a6auO2QO-nIe9tIspoweMCgF35PYw6t8UolbNhaDV-7c7~XioGfp9tpbW64qZhaFpHS66AGxkOXCsN49UUK~1qs1d7w__"
          alt=""
          className="object-cover"
        />
        <div className="absolute top-9 left-2 text-white space-y-7 p-9">
          <p className="  text-3xl font-semibold ">
            We help thousands of schools to Raise fund
          </p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center w-56 mb-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/3ac8/394e/d6c4dd5ee2b53797b553ea9a376223ef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KgE4w6SL7m7EB1KqV9egOljZAAh2xqP10DUnOsqr2HbROGYkIdNyQN~d2-c1deJQWRPADij1ysp46bYnzETp93CM31U~ByzmWPShDBJLZDTmkJIe15gL88rMXNyhvuoD~sTxqZMNBXZcE~dz0iZyNGn6Fewf5-g2Q28aD8k4UP6SeuO7~HxsaT-SNAxke-JteQEeUcRaizPoD7BWR5NlspuHYuhzdVCrtAD~YpRjpqxm651u6S4J1mKnfYE6fBXGtmkmnzFlJbQc25G3rRWA5Y-B5yMHDlQi-4WhiLwe2mHQf6SLH2wror7C5p12RodT4Qmsrqy511zzsYgIKFTbQg__"
            alt=""
            className="h-full w-full"
          />
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-sm">Please Insert Your Login Details</p>
          </div>

          <div>
            <p className="text-gray-700 mb-1 text-sm">Email</p>
            <input
              type="email"
              className="border rounded-md h-8 outline-none px-1 py-2 w-72 bg-white"
              name="email"
              onChange={handleChange}
              value={input?.email}
              required
            />
          </div>
          <div>
            <p className="text-gray-700 mb-1 text-sm">Password</p>
            <input
              type="password"
              className="border rounded-md h-8 outline-none px-1 py-2 w-72 bg-white"
              name="password"
              onChange={handleChange}
              value={input?.password}
              required
            />
          </div>
          <p className="text-[#5aad18] text-sm">forgot password</p>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-[#5aad18] p-3 rounded-full w-52">
              Login
            </button>
          </div>
          <div className="border-t mt-4">
            <p className="mt-4 text-center">
              Don’t you have any account?{" "}
              <NavLink to={"/sign-up"} className="text-[#5aad18]">
                Sign up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
