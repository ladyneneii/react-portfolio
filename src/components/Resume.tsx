import React from "react";

const Resume = () => {
  return (
    <div className="h-[100vh]">
      <iframe
        src="/src/data/Curativo-CV.pdf"
        style={{ width: "100%", height: "100%" }}
        title="Resume PDF"
      />
    </div>
  );
};

export default Resume;
