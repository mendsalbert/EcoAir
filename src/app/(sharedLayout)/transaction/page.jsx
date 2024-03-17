import ListTab from "@/component/listTab";
import TeamChat from "@/component/teamChat";
import Wallet from "@/component/wallet";

function Transaction() {
  return (
    <>
      <section className="2xl:w-70 w-full 2xl:mb-0 mb-6">
        <ListTab pageSize={9} />
      </section>
      <section className="2xl:flex-1 w-full">
        <Wallet />
        <TeamChat />
      </section>
    </>
  );
}

export default Transaction;
