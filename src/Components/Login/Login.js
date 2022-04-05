import GoogleIcon from "@mui/icons-material/Google";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const { googleSignIn, anonymousSignIn } = useUserAuth();
  const navigate = useNavigate();

  const anonymousSignInHandler = async (e) => {
    e.preventDefault();
    try {
      await anonymousSignIn();
      navigate("/photos");
    } catch (err) {
      setError(err.message);
    }
  };

  const googleSignInHandler = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/photos");
    } catch (err) {
      setError(err.message);
    }

    console.log("YEs")
    console.log(error)
  };

  return (
    <>
      <main className="login_main">
        <div className="login_container">
          <h1 className="login_heading"> Pixs</h1>
          <p>Login using</p>
          <div className="login_btns">
            <div
              onClick={googleSignInHandler}
              className="google_login"
              title="Google"
            >
              <GoogleIcon fontSize="large" className="login_google" />
            </div>
            <div
              onClick={anonymousSignInHandler}
              className="anonymous_login"
              title="Anonymous"
            >
              <PermIdentityIcon fontSize="large" className="login_anonymous" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
