"use client";
import ProtoTypes from "prop-types";

function WhiteBtn({ text, action }) {
  return (
    <button
      aria-label="none"
      onClick={action}
      className="bg-[#1B1D21] dark:bg-white dark:text-darkblack-600 border border-transparent hover:border-[#1B1D21] hover:text-[#1B1D21] rounded-lg text-white px-14 py-4 font-bold text-sm hover:bg-white dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}

WhiteBtn.propTypes = {
  text: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default WhiteBtn;
