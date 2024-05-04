import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import AdminLogin from "./pages/AdminLogin.jsx";
import  { Toaster } from 'react-hot-toast';
import Message from "./pages/Message.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<App />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/adminlogin"} element={<AdminLogin />}></Route>
          <Route path={"/message"} element={<Message />}></Route>
        </Routes>
      <Footer />
    
 <Toaster />
      </BrowserRouter>
    </Provider>
  </>,
);
