function ModalButton(props) {
  const { children, active, onClick, icon } = props;

  const buttonState = active
    ? "bg-neutral-900"
    : "bg-black hover:bg-neutral-900 active:bg-neutral-800";

  return (
    <>
      <div
        className={
          "flex items-center w-full h-fit pl-2 pr-2 pt-1 pb-1 rounded-lg " +
          buttonState
        }
      >
        <div className="mr-2">{icon}</div>
        <button className="w-full text-left cursor-pointer" onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
}

export default ModalButton;
