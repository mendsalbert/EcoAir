import UserFilter from "@/component/forms/UserFilter";
import UsersList from "@/component/user/UsersList";
import RightSidebar from "@/component/user/RightSidebar";

function Users() {
  return (
    <>
      <div className="2xl:flex-1 w-full">
        <UserFilter />
        <UsersList />
      </div>
      <RightSidebar />
    </>
  );
}

export default Users;
