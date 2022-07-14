import { Alert, Button, Input, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Registration = () => {
  const { handleRegistration, error, loading, setError } =
    useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!name || !email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Please complete all the fields");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegistration(formData, navigate);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          alignItems: "center",
        }}>
        <Typography>Registration</Typography>
        {error ? (
          <div>
            {error.map((item, index) => (
              <Alert key={item + index}>{item}</Alert>
            ))}
          </div>
        ) : null}
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          placeholder="Password confirmation"
        />
        <Button onClick={handleSave}>Registration</Button>
      </div>
    </div>
  );
};

export default Registration;
