import { SkillsInterface } from "@/components/Skills";

export const renderSkills = (list: SkillsInterface[]) => {
  return list.map((item) => (
    <div
      key={item.name}
      className="flex gap-4 items-center justify-center w-[140px] flex-col"
    >
      <div className="h-[80px] flex items-center">
        {typeof item.src === "string" ? (
          <img src={item.src} alt="" width={50} className="rounded-lg" />
        ) : (
          item.src
        )}
      </div>
      <div>
        <p className="text-center h-[50px]">{item.name}</p>
      </div>
    </div>
  ));
};
