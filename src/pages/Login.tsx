import { useNavigate } from "react-router-dom";

import './Login.css'



function Login() {

  const navigate = useNavigate();

  return (
    <>
      <button className="btn" onClick={() => navigate("/Home")}>Back to Home</button>
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <a href="/Signin">New? Signin here</a>
        </div>
      </div>
    </>
  );
}

export default Login;