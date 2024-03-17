"use client";
import ProtoTypes from "prop-types";

function SlideBtn({ name, handleBtn, status }) {
  return (
    <div className="flex items-center justify-between">
      <span
        className="text-base font-medium text-bgray-800 dark:text-white capitalize"
        id="availability-label"
      >
        {name}
      </span>
      <button
        aria-label="none"
        type="button"
        onClick={() => handleBtn(name)}
        className="switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
        role="switch"
        aria-checked="false"
        aria-labelledby="availability-label"
        aria-describedby="availability-description"
        style={{ background: status[name] && "#22C55E" }}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            status[name] ? "translate-x-5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

SlideBtn.propTypes = {
  name: ProtoTypes.string,
  handleBtn: ProtoTypes.func,
  status: ProtoTypes.object,
};

export default SlideBtn;
