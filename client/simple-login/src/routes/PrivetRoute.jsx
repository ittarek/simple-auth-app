import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Spinner from './../component/Spinner';



// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user,spinner} = useContext(AuthContext)

    const location = useLocation();
    if (spinner){
        return <Spinner />
    }
      if (!user?.email) {
        toast("Please login");
      } else if (user) {
        return children;
      }
    return (<Navigate state={{from : location}} replace to = "/login"></Navigate>
       
    );
};

export default PrivetRoute;