/* eslint-disable react/prop-types */
const MessageCart = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-primary  w-[30px] h-[30px] rounded-full p-[6px] text-white flex items-center justify-center">{icon}</div>

      <h3 className="text-[22px] font-semibold">{title}</h3>
      <p className="text-stale">{description}</p>
    </div>
  );
};

export default MessageCart;
