import Image from "next/image";
import ProtoTypes from "prop-types";
function PinnedMassage({ pinnedMassage }) {
  const { img, title, massage, time, isOnline, isTyping, status } =
    pinnedMassage;

  return (
    <li className="p-3.5 flex justify-between hover:bg-bgray-100 hover:dark:bg-darkblack-500 hover:rounded-lg transition-all cursor-pointer">
      <div className="flex space-x-3 grow">
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
        <div>
          <h4 className="text-xl font-bold text-bgray-900 dark:text-white">
            {title}
          </h4>
          <span
            className={`text-sm font-medium ${
              isTyping
                ? "text-success-300"
                : massage === "missed_call"
                ? "text-error-300"
                : " text-bgray-600 dark:text-bgray-50"
            }`}
          >
            {isTyping
              ? title.split(" ")[0] + " is Typing..."
              : massage === "missed_call"
              ? "Missed Call"
              : massage}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-semibold text-bgray-700 dark:text-bgray-50">
          {time}
        </span>
        <span>
          {status === "" ? (
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6665 6.49599L7.22208 10.9332C6.60843 11.5459 6.60843 12.5392 7.22208 13.1518C7.83573 13.7645 8.83065 13.7645 9.4443 13.1518L13.8887 8.7146C15.116 7.48929 15.116 5.50268 13.8887 4.27738C12.6614 3.05207 10.6716 3.05207 9.4443 4.27738L4.99985 8.7146C3.1589 10.5526 3.1589 13.5325 4.99985 15.3704C6.8408 17.2084 9.82557 17.2084 11.6665 15.3704L16.111 10.9332"
                stroke="#2A313C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.82772 0.791259C10.0574 1.0162 10.0574 1.38089 9.82772 1.60583L3.94536 7.36569C3.71565 7.59061 3.34319 7.59061 3.11347 7.36569L0.172288 4.48576C-0.0574295 4.26083 -0.0574295 3.89612 0.172288 3.6712C0.402012 3.44627 0.77446 3.44627 1.00418 3.6712L3.52942 6.14385L8.99584 0.791259C9.22554 0.566325 9.59801 0.566325 9.82772 0.791259Z"
                fill={status === "seen" ? "#22C55E" : "#A0AEC0"}
              />
              {status !== "sent" && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.82772 4.61241C10.0574 4.81236 10.0574 5.13653 9.82772 5.33648L3.94536 10.4563C3.71565 10.6563 3.34319 10.6563 3.11347 10.4563L0.172288 7.89641C-0.0574295 7.69648 -0.0574295 7.37229 0.172288 7.17236C0.402012 6.97243 0.77446 6.97243 1.00418 7.17236L3.52942 9.37027L8.99584 4.61241C9.22554 4.41247 9.59801 4.41247 9.82772 4.61241Z"
                  fill={status === "seen" ? "#22C55E" : "#A0AEC0"}
                />
              )}
            </svg>
          )}
        </span>
      </div>
    </li>
  );
}

PinnedMassage.propTypes = {
  pinnedMassage: ProtoTypes.object,
};

export default PinnedMassage;
