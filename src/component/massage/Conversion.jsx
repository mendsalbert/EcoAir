import Image from "next/image";
import ProtoTypes from "prop-types";
function Conversion({ time, text, img, self }) {
  return self ? (
    <div className="flex justify-end items-end space-x-3 ">
      <div>
        <span className="text-xs text-bgray-500 font-medium">{time}</span>
      </div>
      <div className="flex space-x-3">
        <div className="p-3 bg-success-300 rounded-r-lg rounded-b-lg text-white text-sm font-medium max-w-sm">
          {text}
        </div>
        <div>
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            className="shrink-0"
            alt=""
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-start items-end space-x-3">
      <div className="flex space-x-3">
        <div>
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            className="shrink-0"
            alt=""
          />
        </div>
        <div className="p-3 bg-bgray-200 dark:bg-darkblack-600  dark:text-bgray-50 rounded-r-lg rounded-b-lg text-bgray-900 text-sm font-medium">
          {text}
        </div>
      </div>
      <div>
        <span className="text-xs text-bgray-500 font-medium">{time}</span>
      </div>
    </div>
  );
}

Conversion.propTypes = {
  time: ProtoTypes.string,
  text: ProtoTypes.string,
  img: ProtoTypes.object,
  self: ProtoTypes.bool,
};

export default Conversion;
