export const renderLongDesc = (title: string, desc: string) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="text-sm font-extralight leading-[24px] text-justify">
        {desc}
      </div>
    </div>
  );
};
