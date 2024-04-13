import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../SliceWithMultiReducers/AuthSlice";
import { useState } from "react";
import swal from "sweetalert";

async function loginUser(credentials) {
  return fetch(
    "http://localhost:8080/api/v1/auth/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    
    const response = await loginUser({
      email,
      password,
    });
    
    if ("token" in response) {
      dispatch(authActions.login(response["token"]));
    } else {
      swal("Failed", "INvalid credentials", "error");
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
