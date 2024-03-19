import Image from "next/image";
import ProtoTypes from "prop-types";

function CustomerInfo({ img, name, email, location, spent, overall }) {
  return (
    <tr className="border-b border-bgray-300 dark:border-darkblack-400">
      <td className="">
        <label className="text-center">
          <input
            type="checkbox"
            className="h-5 w-5 cursor-pointer rounded-full border border-bgray-400 bg-transparent text-success-300 focus:outline-none focus:ring-0"
          />
        </label>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <div className="flex w-full items-center space-x-2.5">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              priority={true}
              height={img.height}
              width={img.width}
              src={img.src}
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {name}
          </p>
        </div>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {email}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {location}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ${spent}
        </p>
      </td>
      <td className="px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          ${overall}
        </p>
      </td>
    </tr>
  );
}

CustomerInfo.propTypes = {
  img: ProtoTypes.object,
  name: ProtoTypes.string,
  email: ProtoTypes.string,
  location: ProtoTypes.string,
  spent: ProtoTypes.string,
};

export default CustomerInfo;
