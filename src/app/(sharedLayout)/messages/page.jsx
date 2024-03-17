import ChatBoxLeftBar from "@/component/massage/ChatBoxLeftBar";
import AllMessageRes from "@/component/massage/AllMessageRes";
import Conversions from "@/component/massage/Conversions";

function Inbox() {
  return (
    <>
      <ChatBoxLeftBar />
      <AllMessageRes />
      <Conversions />
    </>
  );
}

export default Inbox;
