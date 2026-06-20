import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import NewChat from "./pages/NewChat.jsx";
import Library from "./pages/Library.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-svh w-screen flex-col">
        <div className="relative z-0 flex min-h-0 w-full flex-1">
          <SideBar />
          <div className="relative flex min-h-0 w-full flex-1 @container/main">
            <div className="relative flex flex-col w-full flex-1 overflow-y-auto">
              {/* Top bar */}
              <div className="flex bg-white w-full min-h-0 justify-items-between h-12 p-2"></div>
              <Routes>
                <Route path="/" element={<NewChat />} />
                <Route path="/library" element={<Library />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
