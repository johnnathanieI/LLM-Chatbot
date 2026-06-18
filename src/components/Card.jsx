function Card(props) {
  const { children } = props;

  return (
    <>
      <div
        className={
          "flex items-center w-full h-fit pl-2 pr-2 pt-1 pb-1 rounded-lg bg-black hover:bg-neutral-900 active:bg-neutral-800"
        }
      >
        <button
          className="w-full text-left cursor-pointer"
          onClick={() => console.log("Card button clicked!")}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default Card;
