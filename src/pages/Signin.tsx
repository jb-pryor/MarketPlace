//imports

import { useNavigate } from "react-router-dom";

/*type User = {
  email: string;
  username: string;
  password: string;
};*/

import { useEffect, useState } from 'react';

function Signin() {

  //const [users, setUsers] = useState<User[]>([]);

  /*useEffect(() => {
    fetch('http://localhost:5001/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);*/

  const navigate = useNavigate();

  //add useStates right here
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const newUser = {
      email,
      username,
      password
    };
  
    try {
      const res = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
  
      if (!res.ok) {
        throw new Error("Failed to create user");
      }
  
      // optional: redirect after success
      navigate("/Home");
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <>
      <button onClick={() => navigate("/Home")}>Back to Home</button>

      <div className="login-container">
        <div className="login-card">
          <h2>Sign In</h2>
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleSignup}>Signin</button>
          <a href="/Login">Already have an account? Login</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
