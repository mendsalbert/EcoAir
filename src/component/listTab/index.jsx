import ProtoTypes from "prop-types";
import Pagination from "../Pagination";
import Filter from "../forms/Filter";
import FilterFull from "../forms/FilterFull";
import Search from "../forms/Search";
import UserTab from "./UserTab";
function ListTab({ pageSize }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <div className="flex h-[56px] w-full space-x-4">
          <Search />
          <Filter options={["January", "February", "March"]} />
        </div>
        <FilterFull />
        <UserTab pageSize={pageSize} />
        <Pagination />
      </div>
    </div>
  );
}

ListTab.propTypes = {
  pageSize: ProtoTypes.number,
};

export default ListTab;
