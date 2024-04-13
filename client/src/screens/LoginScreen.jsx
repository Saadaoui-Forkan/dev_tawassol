import React, { useEffect, useState } from "react";
import FormInput from "../components/utils/FormInput";
import Button from "../components/utils/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/apiCalls/authApiCall";
import { alertActions } from "../redux/slices/alertSlice";
import Message from "../components/utils/Message";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
  const { alerts } = useSelector((state) => state.alert);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));

    alerts.map((alert) => dispatch(alertActions.clearAlert(alert.id)));
    setEmail('')
    setPassword('')
   
  };

  useEffect(() => {
    if (alerts.length > 0) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  return (
    <div className="flex flex-col items-center justify-center p-20 bg-fuchsia-50">
      {alerts.length > 0 &&
        show &&
        alerts.map((alert, index) => (
          <Message error key={index}>
            {alert.message}
          </Message>
        ))}
        
      <form
        className="bg-white shadow-2xl rounded-2xl p-6 w-10/12 sm:w-3/5 lg:w-1/3"
        onSubmit={submitHandler}
      >
        <h2 className="font-roboto mb-5 text-2xl text-fuchsia-700 font-bold text-center">
          Login
        </h2>
        <FormInput
          type="email"
          label="email"
          forLabel="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-[-15px] text-xs text-zinc-900">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email.
        </div>
        <FormInput
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
      </form>
    </div>
  );
}

export default LoginScreen;
