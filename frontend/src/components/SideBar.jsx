import { useNavigate, useLocation } from "react-router-dom";
import SBButton from "./SBButton.jsx";
import ModalButton from "./ModalButton.jsx";
import Card from "./Card.jsx";
import { useState } from "react";
import {
  ChatIcon,
  LibraryIcon,
  ProjectsIcon,
  SearchIcon,
} from "../assets/icons.jsx";

//function MinimizeSideBar() {}

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("new-chat"); // For modals and other buttons that don't have a route change

  return (
    <div className="flex flex-col overflow-hidden h-full min-h-0 w-[260px] p-2 border-neutral-800 border-r">
      <div className="flex flex-col overflow-y-auto min-h-0 h-full flex-1 text-[14px]">
        {/* Home button and sidebar collapse button div One */}
        <div className="flex flex-col sticky top-0 z-10 bg-black">
          <div className="flex justify-left w-full">test</div>
          {/* New chat and Search chat parallax */}
          <div className="flex flex-col">
            <SBButton
              active={location.pathname === "/" || activeButton === "new-chat"}
              onClick={() => {
                navigate("/");
                setActiveButton("new-chat");
              }}
              icon={<ChatIcon />}
            >
              New Chat
            </SBButton>
            <ModalButton
              active={activeButton === "search-chat"}
              // onClick={() => {
              //   setActiveButton(
              //     activeButton === "search-chat" ? null : "search-chat",
              //   );
              // }}
              icon={<SearchIcon />}
            >
              Search Chat
            </ModalButton>
          </div>
        </div>
        <SBButton
          active={
            location.pathname === "/library" || activeButton === "library"
          }
          onClick={() => {
            navigate("/library");
            setActiveButton("library");
          }}
          icon={<LibraryIcon />}
        >
          Library
        </SBButton>
        <SBButton
          active={
            location.pathname === "/projects" || activeButton === "projects"
          }
          onClick={() => {
            navigate("/projects");
            setActiveButton("projects");
          }}
          icon={<ProjectsIcon />}
        >
          Projects
        </SBButton>
        <div className="flex">Recent</div>
        <Card
          active={location.pathname === "/wad"} //UID pathname for when new chat cards are implemented
          onClick={() => console.log("Card clicked!")} // Will eventually navigate to the specific chat when implemented
        >
          Card 1
        </Card>
      </div>
      <div className="shrink-0 bg-black">Profile</div>
    </div>
  );
}

export default SideBar;
