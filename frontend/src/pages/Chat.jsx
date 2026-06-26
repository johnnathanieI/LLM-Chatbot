import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
  const [inputValue, setInputValue] = useState(" ");
  const { chatid } = useParams();
  const [messages, setMessages] = useState([
    {
      text: "Test message",
      sender: "user",
    },
    {
      text: "Test message",
      sender: "ai",
    },
  ]);

  return (
    <div className="flex flex-col h-full">
      <div className="relative z-10 flex flex-1 flex-col items-center mt-4 w-full max-w-md mx-auto @lg/main:max-w-2xl">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`message ${message.sender} ${message.sender === "user" ? "self-end" : "self-start"}`}
          >
            {message.text}
          </p>
        ))}
      </div>
      <div className="flex-none bottom-0 p-4 sticky">
        <div className="flex w-full max-w-md rounded-full bg-neutral-800 pt-2 pb-2 pl-2 mx-auto @lg/main:max-w-2xl">
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
          >
            <input
              type="text"
              autoFocus
              className="bg-transparent outline-none w-full"
              placeholder="Type your message..."
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
