/*  For the button, obviously there's changes to hover
    Seems like some buttons have an effect on hover where
    an icon appears for context whether it's a new link pop-up
    or if creating a whole new file? folder? not sure yet.
    There's also a different button for logo so maybe we only make this
    a general button for the sidebar and then make a different one for the logo?

    Another insight, on button click when in tab specifically for New Chat,
    Button is highlighted
*/
function SBButton(props) {
  const { children, active, onClick } = props;

  const buttonState = active
    ? "bg-neutral-800"
    : "bg-black md:hover:bg-neutral-900";

  return (
    <div
      className={`flex items-center w-full h-fit pl-2 pr-2 pt-1 pb-1 rounded-lg ${buttonState}`}
    >
      <img
        className="w-4 h-4 mr-2"
        src="..\assets\react.svg"
        alt="button icon"
      />
      <button className="w-full text-left cursor-pointer" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default SBButton;
