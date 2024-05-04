import Branding from "./components/branding/Branding";
import Faq from "./components/FAQ/FAQ";
import Hero from "./components/hero/Hero";
import Message from "./components/message/Message";
import Team from "./components/team/Team";

import { Helmet } from "react-helmet";
import { backendURL, url } from "./constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setuser } from "./app/slice/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({tokenfromapp :token});
    if (token) {
      axios
        .get(`${backendURL}/api/getuser`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          console.log({ res });
          dispatch(setuser(res.data.data));
          // dispatch(setRole(res.data.data.role))
        })
        .catch((err) => console.log(err));

         
    }
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lookscout | Home</title>
        <link rel="canonical" href={`${url}`} />
      </Helmet>
      <Hero />
      <Message />
      <Branding />
      <Faq />
      <Team />
    </>
  );
};

export default App;
