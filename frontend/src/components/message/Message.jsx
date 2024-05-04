import { FaShareAlt } from "react-icons/fa";
import MessageCart from "./MCart.jsx";
import { TfiTarget } from "react-icons/tfi";
import { FaPenClip } from "react-icons/fa6";
import { ImTree } from "react-icons/im";
import { GrIntegration } from "react-icons/gr";

const Message = () => {
  const messageData1 = [
    {
      icon: <FaShareAlt />,
      title: "Easier Work Organization",
      description:
        "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. ",
    },
    {
      icon: <TfiTarget />,
      title: "Fast Connection",
      description:
        "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. ",
    },
    {
      icon: <FaShareAlt />,
      title: "Streamlined Processes",
      description:
        "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible. ",
    },
  ];

  const messageData2 = [
    {
      icon: <GrIntegration />,
      title: "Easier Integrations",
      description:
        "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information. ",
    },
    {
      icon: <ImTree />,
      title: "Marketing Analytics",
      description:
        "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate. ",
    },
    {
      icon: <FaPenClip />,
      title: "Workflow Builder",
      description:
        "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
    },
  ];
  return (
    <div className="container  py-10  sm:py-14 lg:py-16">
      <div className="text-center">
        <h2 className="text-[32px] font-semibold sm:font-bold">
          Message for all
        </h2>
        <p className="text-stale">
          {" "}
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>

      <div className="sm:grid-cols-2   sm:gap-3 max-lg:grid">
        <div className="lg:mt-[64px] sm:mt-[52px] mt-[40px]  grid grid-cols-1 place-content-center place-items-center gap-10 sm:gap-16  lg:grid-cols-3 ">
          {messageData1.map((el) => (
            <MessageCart
              key={el.title}
              icon={el.icon}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
        <div className="lg:mt-[64px] sm:mt-[52px] mt-[40px]  grid grid-cols-1    gap-10 sm:gap-16  lg:hidden ">
          {messageData2.map((el) => (
            <MessageCart
              key={el.title}
              icon={el.icon}
              title={el.title}
              description={el.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
