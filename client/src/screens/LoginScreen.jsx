import React, { useState } from "react";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";
import { Link } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center p-20 bg-fuchsia-50">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-10/12 sm:w-3/5 lg:w-1/3">
        <h2 className="font-roboto mb-5 text-2xl text-fuchsia-700 font-bold text-center">
          Login
        </h2>
        <Input
          type="email"
          label="email"
          forLabel="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-[-15px] text-xs text-zinc-900">
          This site uses Gravatar so if you want a profile image, use a
          Gravatar email.
        </div>
        <Input
          type="password"
          label="password"
          forLabel="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-center mt-4 flex-col">
          <Button type={"submit"}>Login</Button>
          <p className="text-fuchsia-800 mt-2">
            New in DevTawassol?{" "}
            <Link className="font-bold" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
