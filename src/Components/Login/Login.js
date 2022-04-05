import GoogleIcon from "@mui/icons-material/Google";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Login = () => {
  return (
    <>
      <main className="login_main">
        <h1> Pixs</h1>

        <div className="login_btns">
          <div className="login_google">
            <GoogleIcon />
          </div>
          <div className="login_anonymous">
            <PermIdentityIcon />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
