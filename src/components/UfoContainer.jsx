import Ufo from "../assets/ufo-flying-svgrepo-com.svg";

const UfoContainer = ({ activeSection }) => {
  return (
    <div className="flex items-center gap-2 select-none">
      <img
        id="ufo-logo"
        src={Ufo}
        alt="ufo mascot"
        className="w-8 h-8 md:w-9 md:h-9 animation-float drop-shadow-[0_0_8px_rgba(0,240,118,0.6)]"
      />
      {activeSection && (
        <span className="font-space tracking-wider text-xs md:text-sm font-semibold uppercase text-emerald-400 glow-text">
          {activeSection}
        </span>
      )}
    </div>
  );
};

export default UfoContainer;
