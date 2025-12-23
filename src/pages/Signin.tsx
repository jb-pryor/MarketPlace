//imports

import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/Home")}>Back to Home</button>
      <div className="login-container">
        <div className="login-card">
          <h2>Sign In</h2>
          <input type="text" name="email" placeholder="Email"/>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <a href="/Login">Already have an account? Login</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
