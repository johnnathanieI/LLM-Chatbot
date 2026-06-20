export default function NewChat() {
  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">What can I help you with?</h1>
        <div className="flex mt-6 w-full max-w-md rounded-full bg-neutral-800 p-2 mx-auto @lg/main:max-w-2xl">
          {/* Img button but idk how to implement for now */}
          <button className="font-bold rounded-full md:hover:bg-neutral-700 cursor-pointer p-2 w-8 h-8 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
          <form autocomplete="off" className="flex flex-1 overflow-x-auto mr-2">
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Type your message..."
            />
          </form>
          <button className="bg-white text-black md:hover:bg-gray-200 rounded-full cursor-pointer p-2 w-8 h-8 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-up-icon lucide-arrow-up"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
