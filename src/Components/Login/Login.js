import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Login = () => {
  const { anonymousSignIn } = useUserAuth();
  const navigate = useNavigate();

  const anonymousSignInHandler = async (e) => {
    e.preventDefault();
    try {
      await anonymousSignIn();
      navigate("/photos");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <main className="login_main">
        <div className="login_container">
          <h1 className="login_heading"> Pixs</h1>
          <p>Login as guest</p>
          <div className="login_btns">
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

      <div className="info_msg">
        <Alert variant="outlined" severity="info">
          <h4> Info :- Please do not add personal images.</h4>
        </Alert>
      </div>
    </>
  );
};

export default Login;
