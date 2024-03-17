import { allMassage } from "../../data/massage";
import PinnedMassage from "./PinnedMassage";

function AllMessages() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5">
          <svg
            className="fill-darkblack-400 dark:fill-bgray-50"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.00016 2C2.5274 2 1.3335 3.19391 1.3335 4.66667V11.3333C1.3335 12.8061 2.5274 14 4.00016 14H12.0002C13.4729 14 14.6668 12.8061 14.6668 11.3333V4.66667C14.6668 3.19391 13.4729 2 12.0002 2H4.00016ZM4.27751 4.91728C4.04775 4.7641 3.73732 4.82619 3.58414 5.05595C3.43096 5.28572 3.49305 5.59615 3.72281 5.74933L6.24361 7.42986C7.3073 8.13898 8.69303 8.13898 9.75671 7.42986L12.2775 5.74933C12.5073 5.59615 12.5694 5.28572 12.4162 5.05595C12.263 4.82619 11.9526 4.7641 11.7228 4.91728L9.20201 6.59781C8.47423 7.083 7.5261 7.083 6.79832 6.59781L4.27751 4.91728Z"
            />
          </svg>
          <span className="text-base text-bgray-700 dark:text-bgray-50 font-medium">
            All Messages (22)
          </span>
        </div>
        <div>
          <button aria-label="none">
            <svg
              className="stroke-darkblack-400 dark:stroke-bgray-50"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 12.1761C9.07936 12.1761 8.33317 11.4311 8.33317 10.5121C8.33317 9.59312 9.07936 8.84814 9.99984 8.84814C10.9203 8.84814 11.6665 9.59312 11.6665 10.5121C11.6665 11.4311 10.9203 12.1761 9.99984 12.1761Z"
                strokeWidth="1.5"
              />
              <path
                d="M16.6665 12.1761C15.746 12.1761 14.9998 11.4311 14.9998 10.5121C14.9998 9.59312 15.746 8.84814 16.6665 8.84814C17.587 8.84814 18.3332 9.59312 18.3332 10.5121C18.3332 11.4311 17.587 12.1761 16.6665 12.1761Z"
                strokeWidth="1.5"
              />
              <path
                d="M3.33317 12.1761C2.4127 12.1761 1.6665 11.4311 1.6665 10.5121C1.6665 9.59312 2.4127 8.84814 3.33317 8.84814C4.25365 8.84814 4.99984 9.59312 4.99984 10.5121C4.99984 11.4311 4.25365 12.1761 3.33317 12.1761Z"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className="pt-2 divide-y divide-bgray-300 dark:divide-darkblack-400">
        {allMassage?.map((item) => (
          <PinnedMassage key={item.id} pinnedMassage={item} />
        ))}
      </ul>
    </div>
  );
}

export default AllMessages;
