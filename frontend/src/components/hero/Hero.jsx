const Hero = () => {
  return (
    <div className="bg-bgColor">
      <div className="mx-auto  px-3 flex max-w-[600px] flex-col gap-4 py-[32px] text-center sm:py-[48px] md:py-20">
        <p className="text-primary text-[14px] font-semibold uppercase">
          1% of the industry{" "}
        </p>
        <h2 className="text-[36px] sm:text-[52px]  font-semibold sm:font-bold sm:leading-[60px] ">
          Hype got you here. <br /> Stay for the support.
        </h2>
        <p className="text-stale text-[18px] font-light">
          We’ve been told it is possible to revolutionize the payment industry.
          We have not reinvented the wheel, we decided to build upon it -
          successfully.
        </p>
      </div>
    </div>
  );
};

export default Hero;
