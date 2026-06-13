import "./App.css";
import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <>
      <div>
        <div className="flex h-svh w-screen flex-col">
          <div className="relative z-0 flex min-h-0 w-full flex-1">
            <div className="relative flex min-h-0 w-full flex-1">
              <SideBar />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
