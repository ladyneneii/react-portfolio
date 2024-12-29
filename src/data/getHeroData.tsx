import { AvailableLanguagesType } from "@/types";

export const getValueProp = (selectedLanguage: AvailableLanguagesType) => {
  let valueProp = <h1></h1>;

  if (selectedLanguage === "English") {
    valueProp = (
      <h1>
        Transforming your ideas into{" "}
        <span className="text-purple font-extralight italic">elegant</span>{" "}
        <span className="whitespace-nowrap">code and</span>{" "}
        <span className="text-purple font-extralight italic">meaningful</span>{" "}
        creations
      </h1>
    );
  } else if (selectedLanguage === "Filipino") {
    valueProp = (
      <h1>
        Binibigyang-buhay ang iyong mga ideya sa pamamagitan ng{" "}
        <span className="text-purple font-extralight italic">eleganteng</span>{" "}
        <span className="whitespace-nowrap">code at</span>{" "}
        <span className="text-purple font-extralight italic">makabuluhang</span>{" "}
        likha
      </h1>
    );
  } else if (selectedLanguage === "Bisaya") {
    valueProp = (
      <h1>
        Tigbuhat sa imong mga ideya ngadto sa{" "}
        <span className="text-purple font-extralight italic">elegante</span>{" "}
        <span className="whitespace-nowrap">nga code ug</span>{" "}
        <span className="text-purple font-extralight italic">makahulugang</span>{" "}
        mga kreasyon
      </h1>
    );
  }

  return valueProp;
};

export const getIntro = (selectedLanguage: AvailableLanguagesType) => {
  let intro = <h4></h4>;

  if (selectedLanguage === "English") {
    intro = (
      <h4 className="font-extralight">
        I am <span className="font-normal">Ernest Curativo</span>—a{" "}
        <span className="text-purple">software engineer</span> in{" "}
        <span className="whitespace-nowrap">Cebu, Philippines.</span>
      </h4>
    );
  } else if (selectedLanguage === "Filipino") {
    intro = (
      <h4 className="font-extralight">
        Ako si <span className="font-normal">Ernest Curativo</span>—isang{" "}
        <span className="text-purple">software engineer</span> sa{" "}
        <span className="whitespace-nowrap">Cebu, Philippines.</span>
      </h4>
    );
  } else if (selectedLanguage === "Bisaya") {
    intro = (
      <h4 className="font-extralight">
        Ako si <span className="font-normal">Ernest Curativo</span>—usa ka{" "}
        <span className="text-purple">software engineer</span> sa{" "}
        <span className="whitespace-nowrap">Cebu, Philippines.</span>
      </h4>
    );
  }

  return intro;
};

export const getTransitionsLabel = (
  selectedLanguage: AvailableLanguagesType
) => {
  let label = "";

  if (selectedLanguage === "English") {
    label = "Disable transitions";
  } else if (selectedLanguage === "Filipino" || selectedLanguage === "Bisaya") {
    label = "I-disable ang transitions";
  }

  return label;
};

export const getAnimationsLabel = (
  selectedLanguage: AvailableLanguagesType
) => {
  let label = "";

  if (selectedLanguage === "English") {
    label = "Disable animations";
  } else if (selectedLanguage === "Filipino" || selectedLanguage === "Bisaya") {
    label = "I-disable ang animations";
  }

  return label;
};

export const getViewCVLabel = (selectedLanguage: AvailableLanguagesType) => {
  let label = "";

  if (selectedLanguage === "English") {
    label = "View CV";
  } else if (selectedLanguage === "Filipino") {
    label = "Silipin ang CV";
  } else if (selectedLanguage === "Bisaya") {
    label = "Tan-awa ang CV";
  }

  return label;
};

export const getDownloadCVLabel = (
  selectedLanguage: AvailableLanguagesType
) => {
  let label = "";

  if (selectedLanguage === "English") {
    label = "Download CV";
  } else if (selectedLanguage === "Filipino" || selectedLanguage === "Bisaya") {
    label = "I-download ang CV";
  }

  return label;
};
