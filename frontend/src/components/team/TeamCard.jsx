import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa6";

const TeamCard = ({image,name,desigination}) => {
  return (
    <div className="max-sm:mx-auto ">
      <div className="  max-w-[384px]   sm:max-h-[384px]  ">
        <img src={image} alt="profile picture" className="  max-sm:h-[282px]" />
      </div>
      <p className="mt-4 text-xl font-semibold">{name}</p>
      <p className="text-stale ">{desigination}</p>
      <div className="mt-4 flex gap-4">
        <FaTwitter className="cursor-pointer" />
        <FaFacebook className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />
        <FaTelegram className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamCard;
