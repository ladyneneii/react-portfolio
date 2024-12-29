export const renderLongDesc = (
  title: string,
  desc: string,
  isCentered?: boolean
) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-normal">{title}</p>
      <p
        className={`text-sm font-extralight leading-[28px] ${
          !isCentered ? "text-justify" : "text-center"
        }`}
      >
        {desc}
      </p>
    </div>
  );
};
