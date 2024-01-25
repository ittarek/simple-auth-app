import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'

// import AuthTest from './provider/AuthTest';
import { Toaster } from 'react-hot-toast';




function App() {


  return (
    <>
      {" "}
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet />
      {/* <AuthTest /> */}
    </>
  );
}

export default App
