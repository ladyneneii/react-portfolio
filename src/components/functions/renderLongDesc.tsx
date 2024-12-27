export const renderLongDesc = (
  title: string,
  desc: string,
  isCentered?: boolean
) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div
        className={`text-sm font-extralight leading-[24px] ${
          !isCentered ? "text-justify" : "text-center"
        }`}
      >
        {desc}
      </div>
    </div>
  );
};
