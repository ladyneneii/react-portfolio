import React, { useEffect, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";

type Props = {};

const Skills = (props: Props) => {
  const pl = [
    { name: "TypeScript", src: "/assets/pl-typescript.png" },
    { name: "JavaScript", src: "/assets/pl-javascript.png" },
    { name: "C", src: "/assets/pl-c.png" },
    { name: "Python", src: "/assets/pl-python.png" },
    { name: "Java", src: "/assets/pl-java.png" },
    { name: "C#", src: "/assets/pl-csharp.png" },
    { name: "PHP", src: "/assets/pl-php.png" },
  ];
  const plContainerRef = useRef<HTMLDivElement | null>(null);
  const [plContainerHeight, setPlContainerHeight] = useState(0);
  useHeightResize({ ref: plContainerRef, setHeight: setPlContainerHeight });

  useEffect(() => {
    console.log(plContainerHeight);
  }, [plContainerHeight]);

  const EXTRA_SPACE = 80;
  
  return (
    <div className={`border-t-2 pt-6 pb-12`}>
      <div className="text-center mb-6">
        <h1>Skills</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Box
          title="Programming Languages"
          isFoldable={true}
          childrenHeight={plContainerHeight - EXTRA_SPACE}
        >
          <div
            ref={plContainerRef}
            className="flex items-center justify-center flex-wrap mb-8"
          >
            {pl.map((lang) => (
              <div
                key={lang.name}
                className="flex gap-4 items-center justify-center w-[140px] h-[140px] relative"
              >
                <img src={lang.src} alt="" width={50} className="rounded-lg" />
                <p className="absolute bottom-1">{lang.name}</p>
              </div>
            ))}
          </div>
        </Box>
        <Box title="Web Development" isFoldable={true}>
          alsdjfka
        </Box>
      </div>
    </div>
  );
};

export default Skills;
