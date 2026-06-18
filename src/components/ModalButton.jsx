function ModalButton(props) {
  const { children, active, onClick } = props;

  const buttonState = active
    ? "bg-neutral-900"
    : "bg-black hover:bg-neutral-900 active:bg-neutral-800";

  return (
    <>
      <div
        className={
          "flex items-center w-full h-fit pl-2 pr-2 pt-1 pb-1 rounded-lg" +
          buttonState
        }
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
    </>
  );
}

export default ModalButton;
