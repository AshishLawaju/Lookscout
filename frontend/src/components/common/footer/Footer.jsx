import google from "./assets/google.png";
import mailclimp from "./assets/mailclimp.png";
import paypal from "./assets/paypal.png";
import pintrest from "./assets/pintrest.png";
import slack from "./assets/slack.png";
import twilio from "./assets/twilio.png";
import logo from "../../../assets/images/logo.png";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import dot from "./assets/dot.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const images = [twilio, slack, google, paypal, pintrest, mailclimp];
const Footer = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const footerData = [
    {
      title: "Products",
      data: ["features", "solution", "integrations", "Enterprise", "Solutions"],
    },
    {
      title: "Resources",
      data: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "Why Choose Us?",
      data: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "Company",
      data: ["About Us", "News", "Leadership", "Enterprise", "Media Kit"],
    },
  ];

  return (
    <div className="">
      <div className="bg-[#2b63d9] py-16 text-white">
        <div className="container flex flex-col items-center ">
          <p className="text-sm font-semibold uppercase">1% OF THE INDUSTRY</p>
          <p className="mt-8 text-center text-3xl font-semibold">
            Welcome to your new digital reality that <br /> which will rock your
            world truly at all.
          </p>
          {user.value ? (
            ""
          ) : (
            <div className="mt-8 flex flex-col gap-4 max-sm:w-full sm:flex-row">
              <button
                className="btn rounded-md bg-white text-primary"
                onClick={()=>{navigate('/signup');  scrollTo(0,0)}}
              >
                Sign up
              </button>
              <button className="btn rounded-md bg-primary text-white" onClick={()=>{navigate('/login'); scrollTo(0,0)}}>
                Log in
              </button>
            </div>
          )}
          <div className="mt-16 flex  items-center justify-center gap-8 max-sm:flex-col sm:flex-wrap sm:gap-16">
            {images.map((el) => (
              <img src={el} alt="" key={el} className=" h-[24px]" />
            ))}
          </div>
        </div>
      </div>

      {/* main footer  */}
      <div className=" container py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className=" w-full grid-cols-2 place-content-between  justify-between  gap-8 sm:grid sm:grid-cols-3 lg:flex">
          {/* <div className="flex w-full   justify-evenly lg:justify-between "> */}
          <div className="grid-1fr w-full sm:max-w-[247px]  ">
            <img src={logo} alt="logo" className="h-[28] w-[150]" />
            <p className="mt-4 text-stale">
              Generate outside the box thinking with the possibility to targtet
              the low.
            </p>
            <div className="mt-4 flex gap-6  max-lg:hidden max-sm:flex max-sm:justify-evenly max-sm:text-2xl">
              <FaFacebook />
              <FaGoogle />
              <FaApple />
              <FaInstagram />
            </div>
          </div>
          <div className="max-sm:hidden lg:hidden"></div>

          {footerData.map((data) => (
            <div key={data.title} className="max-sm:hidden">
              <p className="font-semibold">{data.title}</p>
              <ul className="mt-6 text-stale">
                {data.data.map((el) => (
                  <li className="cursor-pointer capitalize" key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-6 grid grid-cols-2 gap-6 sm:hidden ">
            {footerData.map((data) => (
              <div key={data.title} className="">
                <p className="font-semibold">{data.title}</p>
                <ul className="mt-6 text-stale">
                  {data.data.map((el) => (
                    <li className="cursor-pointer capitalize" key={el}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center ">
          <img src={dot} alt="dot" height={32} width={32} />
          <div className="flex w-full items-center justify-between">
            <p className="mt-4 w-full text-stale max-sm:text-center lg:text-center">
              &#169; 2023 Lookscout. All Rights Reserved.
            </p>
            <div className="mt-4 flex gap-6 max-sm:hidden lg:hidden">
              <FaFacebook className="cursor-pointer text-2xl" />
              <FaGoogle className="cursor-pointer text-2xl" />
              <FaApple className="cursor-pointer text-2xl" />
              <FaInstagram className="cursor-pointer text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
