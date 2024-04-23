import "./Login.css";
/*import { checkAll } from "../../validation.js";*/

const Login = () => {
  return (
    <>
      <div className="main-container">
        <div className="login-background">
          Login Login Login Login Login Login Login Login Login Login Login
          Login Login Login Login Login Login Login Login Login Login Login
          Login Login Login Login Login Login Login Login Login Login Login
          Login Login Login
        </div>

        <div className={"heading"}>
          Login <br /> &emsp; &emsp; Login <br /> &emsp; Login
        </div>

        <form className="form-container">
          <div>
            <label className={"input-label"} htmlFor="email">
              Email
            </label>
            <br />
            <input className={"input-container"} type="email" id="email" />
          </div>

          <div>
            <label className={"input-label"} htmlFor="password">
              Password
            </label>
            <br />
            <input
              className={"input-container"}
              type="password"
              id="password"
            />
          </div>

          <div></div>

          <button className={"login-button"}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
