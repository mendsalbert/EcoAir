"use client";
import ProtoTypes from "prop-types";
function GreenBtn({ text, action, className }) {
  return (
    <button
      onClick={() => (action ? action() : "")}
      className={`bg-success-300 hover:bg-success-400 transition-all text-white py-4 w-full font-bold rounded-lg ${
        className ? className : "mt-14"
      }`}
      aria-label="none"
    >
      {text}
    </button>
  );
}

GreenBtn.propTypes = {
  text: ProtoTypes.string,
  className: ProtoTypes.string,
  action: ProtoTypes.func,
};

export default GreenBtn;
