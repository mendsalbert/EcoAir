import PinnedMassage from "./PinnedMassage";
import { pinnedMassages } from "../../data/massage";

function PinnedMassages() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5">
          <svg
            className="fill-darkblack-400 dark:fill-bgray-50"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.7682 2.90596C8.94657 2.08568 7.54172 2.66664 7.54172 3.8267C7.54172 4.17204 7.40431 4.50324 7.15972 4.74744L6.07925 5.82615C5.83466 6.07034 5.50292 6.20753 5.15701 6.20753C3.99506 6.20753 3.41315 7.61009 4.23477 8.43038L5.81896 10.012L2.14059 13.6844C1.95314 13.8715 1.95314 14.175 2.14059 14.3621C2.32804 14.5492 2.63196 14.5492 2.81941 14.3621L6.49779 10.6897L8.08195 12.2713C8.90358 13.0916 10.3084 12.5106 10.3084 11.3506C10.3084 11.0052 10.4458 10.674 10.6904 10.4298L11.7709 9.35112C12.0155 9.10692 12.3472 8.96974 12.6931 8.96974C13.8551 8.96974 14.437 7.56717 13.6154 6.74688L9.7682 2.90596Z"
            />
          </svg>
          <span className="text-base text-bgray-700 dark:text-white font-medium">
            Pinned Messages (3)
          </span>
        </div>
        <div>
          <button aria-label="none">
            <svg
              className="stroke-darkblack-400 dark:stroke-gray-50"
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
        {pinnedMassages?.map((pinned) => (
          <PinnedMassage key={pinned.id} pinnedMassage={pinned} />
        ))}
      </ul>
    </div>
  );
}

export default PinnedMassages;
