import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Avatar, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";




const Header = () => {
    const { user, loggedOut } = useContext(AuthContext);
const handleLogOut = () =>{
loggedOut()
.then(Result =>{
    console.log(Result);
    
})
}
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> Home</Link>
          </Typography>
          {user?.email ? (
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
          )}
          <Tooltip title={user?.displayName}>
            {" "}
            <Avatar className="ms-2" alt="User" src={user?.photoURL} />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
