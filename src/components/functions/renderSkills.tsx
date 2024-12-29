import { SkillsInterface } from "@/components/Skills";
import { getVariants } from "@/shared";
import { motion } from "framer-motion";

export const renderSkills = (list: SkillsInterface[], disableAnimations: boolean) => {
  const Wrapper = disableAnimations ? "div" : motion.div;

  return list.map((item, index) => (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      variants={getVariants()}
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
    </Wrapper>
  ));
};
