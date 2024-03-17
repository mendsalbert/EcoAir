import usm from "/public/static/images/message/u-sm.png";
import Image from "next/image";

function Typing() {
  return (
    <div className="flex justify-start items-end space-x-3">
      <div className="flex space-x-3">
        <div>
          <Image
            priority={true}
            height={usm.height}
            width={usm.width}
            src={usm.src}
            className="shrink-0"
            alt=""
          />
        </div>
        <div className="p-3 text-bgray-500 text-sm font-normal">
          <span className="font-semibold text-bgray-900 dark:text-bgray-50">
            Eleanor Pena{" "}
          </span>
          is typing...
        </div>
      </div>
      <div>
        <span className="text-xs text-bgray-500 font-medium">10:15 AM</span>
      </div>
    </div>
  );
}

export default Typing;
