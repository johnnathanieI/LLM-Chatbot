import SBButton from "./SBButton.jsx";

function SideBar() {
  return (
    <div className="flex flex-col overflow-hidden h-full min-h-0 w-[260px] p-1 border-gray-800 border-r">
      <div className="flex flex-col overflow-y-auto min-h-0 h-full flex-1 text-[14px]">
        {/* Home button and sidebar collapse button div One */}
        <div className="flex flex-col sticky top-0 z-10 bg-black">
          <div className="flex">test</div>
          {/* New chat and Search chat parallax */}
          <div className="flex flex-col">
            <SBButton>New Chat</SBButton>

            <SBButton>Search Chat</SBButton>
          </div>
        </div>
        <SBButton>Library</SBButton>
        <SBButton>Projects</SBButton>
        <div className="flex-1">Recent</div>
      </div>
      <div className="shrink-0 bg-black">Profile</div>
    </div>
  );
}

export default SideBar;
