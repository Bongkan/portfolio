import UfoLandingSvg from "../assets/ufo-alien-svgrepo-com.svg";

const UfoLanding = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        id="ufo-landing-logo"
        src={UfoLandingSvg}
        alt="ufo alien landing"
        className="w-10 h-10 md:w-12 md:h-12 animation-float drop-shadow-[0_0_12px_rgba(0,240,118,0.7)]"
      />
    </div>
  );
};

export default UfoLanding;
