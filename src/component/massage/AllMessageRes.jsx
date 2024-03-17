import ProtoTypes from "prop-types";
import { allMassage } from "../../data/massage";
import Image from "next/image";

export const Sender = ({ img, isOnline }) => (
  <div className="w-14 h-14 relative">
    <Image
      priority={true}
      height={img.height}
      width={img.width}
      src={img.src}
      alt=""
    />
    <span
      className={`${
        isOnline ? "bg-success-300" : "bg-gray-300"
      } dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0`}
    ></span>
  </div>
);

function AllMessageRes() {
  return (
    <div className="w-full bg-white dark:bg-darkblack-600 p-2 overflow-x-scroll flex lg:hidden">
      <div className="flex space-x-5">
        {allMassage?.map((item) => (
          <Sender key={item.id} img={item.img} isOnline={item.isOnline} />
        ))}
      </div>
    </div>
  );
}

Sender.propTypes = {
  img: ProtoTypes.object,
  isOnline: ProtoTypes.bool,
};

export default AllMessageRes;
