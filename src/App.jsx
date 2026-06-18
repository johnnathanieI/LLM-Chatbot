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
          <div className="relative flex min-h-0 w-full flex-1">
            <Routes>
              <Route path="/" element={<NewChat />} />
              <Route path="/new-chat" element={<NewChat />} />
              <Route path="/library" element={<Library />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
