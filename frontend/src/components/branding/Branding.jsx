import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";
import bImg from "../../assets/images/brand.webp";
const Branding = () => {
  return (
    <div className="container lg:flex flex-col lg:flex-row items-center gap-28 py-16">
      <div className="flex-1">
        <h4 className="text-2xl font-semibold">
          Demonstrate branding <br /> consequently think outside
        </h4>
        <p className="mt-4 text-[16px] text-stale">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
          tellus faucibus mauris quisque mauris in.
        </p>
        <ul className="mt-6 text-[16px] text-stale">
          <li className="flex items-center gap-1">
            <IoIosCheckmark className="text text-2xl text-primary" />
            Enterprise-grade security
          </li>
          <li className="flex items-center gap-1">
            <IoIosCheckmark className="text text-2xl text-primary" />
            99.9% guaranteed uptime SLA
          </li>
          <li className="flex items-center gap-1">
            <IoIosCheckmark className="text text-2xl text-primary" />
            Designated customer success team
          </li>
        </ul>
        <button className="btn mt-10 flex items-center gap-1 rounded-md bg-primary text-white">
          Start now{" "}
          <FaArrowRightLong
            className="text-sm
            "
          />
        </button>
      </div>
      <div
        className={`max-lg:mt-6  max-lg:w-full  h-[300px] lg:h-[560px]  flex-1 bg-cover  bg-center px-16 text-center flex items-end justify-center`}
        style={{
          backgroundImage: `url(${bImg})`,
        }}
      >
        <div className=" flex flex-col items-center justify-center gap-y-2 lg:gap-y-6  p-4 lg:py-6  mb-6 lg:mb-12 rounded-md bg-white w-full sm:w-[60%] lg:w-[80%]">
          <p className=" text-sm sm:text-md lg:text-xl font-semibold">Check Us Out</p>
          <hr className=" lg:h-4 h-1 border-none bg-slate-200 rounded-md w-[70%]" />
          <hr className="lg:h-4 h-1 border-none bg-slate-200 rounded-md w-[50%]" />
          <button className="btn bg-primary text-white rounded-md text-xs">Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default Branding;
