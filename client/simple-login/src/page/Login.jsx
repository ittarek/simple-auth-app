import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../component/Spinner";

const Login = () => {
  const { userLogin, spinner } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
if(spinner){
  return <Spinner />
}
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    userLogin(email, password)
      .then(async result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully logged in");
        setError("");
        navigate(from, { replace: true });

        try {
          const response = await axios.post(
            "https://simple-login-eight.vercel.app/saveUser",
            {
              email: data.get("email"),
              password: data.get("password"),
            }
          );

          if (response.data) {
            setError("");

            navigate(from, { replace: true });
          } else if (response.data?.error) {
            setError(response.data?.error);
            console.error("Login error:", response.data?.error);
            //  toast.success(response.data?.error);
          }
        } catch (error) {
          console.error("Login error:", error);
          //  toast.success(error);
          // Handle other errors (e.g., display an error message to the user)
        }
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                Don,t have an account?{" "}
                <Link to="/signup" variant="body2">
                  {" "}
                  <span className="underline text-yellow-600"> Sign Up</span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>{" "}
        <SocialLogin />
      </Container>
    </>
  );
};
export default Login;
