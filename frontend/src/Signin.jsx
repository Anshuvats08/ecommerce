import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setemail] = useState("");
  const [pass, setpassword] = useState("");
  const[error,seterror]=useState("");

  const navigate = useNavigate();
  const submitdata = async () => {
    if (!email || !pass ){
      seterror(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, pass }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();

    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
  };
  return (
    <div className="signin">
      <h1 className="side">SIGN IN</h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />

      {error && !email && <span> enter email </span>}

      <input
        type="text"
        placeholder="Enter password"
        value={pass}
        onChange={(event) => setpassword(event.target.value)}
      />
            {error && !pass && <span> enter password </span>}


      <button className="side" type="button" onClick={submitdata}> SIGN IN </button>
        
    </div>
  );
}

export default Signin;
