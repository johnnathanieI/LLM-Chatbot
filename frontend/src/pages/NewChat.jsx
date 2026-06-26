import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewChat() {
  const [text, setText] = useState(" ");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const uid = crypto.randomUUID();
    const payload = {
      uid,
      messages: [{ sender: "user", text }],
    };
    navigate(`/c/${uid}`, { state: payload });
    {
      /* So, This is navigating wrong I believe since a new chat is not being made? */
    }
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">What can I help you with?</h1>
        <div className="flex mt-6 w-full max-w-md rounded-full bg-neutral-800 pt-2 pb-2 pl-2 mx-auto @lg/main:max-w-2xl">
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
          <form
            autocomplete="off"
            className="flex flex-1 overflow-x-auto mr-2 ml-2 text-sm"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              autoFocus
              className="bg-transparent outline-none w-full"
              placeholder="Type your message..."
              input={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-white text-black md:hover:bg-gray-200 rounded-full cursor-pointer p-2 w-8 h-8 flex items-center justify-center shrink-0"
            >
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
          </form>
        </div>
      </div>
    </div>
  );
}
