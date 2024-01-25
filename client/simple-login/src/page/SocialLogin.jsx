import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Button } from "@mui/material";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = async () => {
    googleLogin().then(async result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      navigate(from, {replace : true});
      try {
        const response = await axios.post(
          "https://simple-login-eight.vercel.app/saveUser",
          saveUser
        );

        if (response.data) {
          toast.success("Successfully logged in");

          navigate(from, { replace: true });
        } else if (response.data?.error) {
          toast.success("Login error:", response.data?.error);
          console.error("Login error:", response.data?.error);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    });
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, fontSize: 24 }}
        onClick={handleGoogleLogin}
      >
        GOOGLE
      </Button>
    </div>
  );
};

export default SocialLogin;
