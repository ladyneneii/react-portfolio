import React, { useContext, useRef, useState } from "react";
import Box from "./ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
// import { TbBinaryTree } from "react-icons/tb";
// import { FaCode } from "react-icons/fa6";
// import { LuBrainCircuit } from "react-icons/lu";
// import { AiOutlineCluster } from "react-icons/ai";
// import { MdOutlineSentimentSatisfied } from "react-icons/md";
// import Radio, { RadioDataTypes } from "./ui/Radio";
import {
  boxContainerClassnames,
  camelToTitleCase,
  EXTRA_HEIGHT,
  itemsContainerClass,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
  translatedSections,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";
import ProjectDescription from "./ui/ProjectDescription";

export interface SkillsInterface {
  name: string;
  src: string | React.ReactNode;
}

const Thesis = () => {
  const { setSelectedSection, selectedLanguage } = useContext(UserPrefContext);
  const aContainerRef = useRef<HTMLDivElement | null>(null);
  const [aContainerHeight, setAContainerHeight] = useState(0);
  useHeightResize({ ref: aContainerRef, setHeight: setAContainerHeight });

  const sectionId = translatedSections.Thesis[selectedLanguage];

  const thesisRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: thesisRef,
    setSection: setSelectedSection,
    section: camelToTitleCase(sectionId),
    selectedLanguage,
  });

  const imgs = [
    "/assets/thesis/certificate-img.png",
    "/assets/thesis/hardbound.png",
  ];

  const thesisDesc = {
    English: (
      <h6>
        Neil Sagun and I, along with Dr. Angie Ceniza's guidance, crafted our
        undergraduate thesis as one of the requirements for our graduation in
        the BSCS (Bachelor of Science in Computer Science) program at the
        University of San Carlos. The paper is entitled,{" "}
        <span className="text-purple italic">
          SOGIE Bill Discourse Analysis Using Latent Dirichlet Allocation,
          Nonnegative Matrix Factorization, BERTopic, and Latent Semantic
          Analysis
        </span>
        . Our paper highlights the usage of{" "}
        <span className="text-purple italic">machine learning (ML)</span> and{" "}
        <span className="text-purple italic">
          natural language processing (NLP)
        </span>{" "}
        in social issues. On the 28th of November 2024, I presented our thesis
        at the IEEE International Conference on Communications, Networks and
        Satellite 2024 via Zoom.
      </h6>
    ),
    Filipino: (
      <h6>
        Si Neil Sagun at ako, sa tulong ni Dr. Angie Ceniza, ay gumawa ng aming
        undergraduate thesis bilang isa sa mga requirements para sa aming
        pagtatapos sa programang BSCS (Bachelor of Science in Computer Science)
        sa University of San Carlos. Ang aming papel ay pinamagatang,{" "}
        <span className="text-purple italic">
          SOGIE Bill Discourse Analysis Using Latent Dirichlet Allocation,
          Nonnegative Matrix Factorization, BERTopic, and Latent Semantic
          Analysis
        </span>
        . Binibigyang-diin ng aming papel ang paggamit ng{" "}
        <span className="text-purple italic">machine learning (ML)</span> at{" "}
        <span className="text-purple italic">
          natural language processing (NLP)
        </span>{" "}
        sa mga isyung panlipunan. Noong ika-28 ng Nobyembre 2024, iprinisenta ko
        ang aming thesis sa IEEE International Conference on Communications,
        Networks and Satellite 2024 sa Zoom.
      </h6>
    ),
    Bisaya: (
      <h6>
        Si Neil Sagun ug ako, uban sa giya ni Dr. Angie Ceniza, naghimo sa among
        undergraduate thesis isip usa sa mga requirements para sa among
        pag-graduate sa BSCS (Bachelor of Science in Computer Science) nga
        programa sa University of San Carlos. Ang among papel gitawag og{" "}
        <span className="text-purple italic">
          SOGIE Bill Discourse Analysis Using Latent Dirichlet Allocation,
          Nonnegative Matrix Factorization, BERTopic, and Latent Semantic
          Analysis
        </span>
        . Ang among papel nagpunting sa paggamit sa{" "}
        <span className="text-purple italic">machine learning (ML)</span> ug{" "}
        <span className="text-purple italic">
          natural language processing (NLP)
        </span>{" "}
        sa mga isyu sa katilingban. Niadtong ika-28 sa Nobyembre 2024, ako
        nagpresentar sa among thesis sa IEEE International Conference on
        Communications, Networks and Satellite 2024 pinaagi sa Zoom.
      </h6>
    ),
  };

  const getAbstractTrans = () => {
    let title = "Abstract";
    if (selectedLanguage === "Filipino" || selectedLanguage === "Bisaya") {
      title = "Abstrak";
    } 

    return title;
  };

  const thesisAbstract = {
    English: (
      <p>
        The Sexual Orientation, Gender Identity, and Expression (SOGIE) Bill is
        a proposed law seeking to address discrimination based on an
        individual's SOGIE. The SOGIE Bill has sparked widespread debates on
        social media, leading to diverse public sentiments, stances, and
        opinions expressed through textual data.{" "}
        <span className="text-purple italic">
          Since there are virtually no searchable papers about applying machine
          learning (ML) or natural language processing (NLP) techniques in SOGIE
          Bill-related documents in the current literature, the researchers
          intend to address this research gap by fulfilling their objective:
          using sentiment analysis and topic modeling techniques to analyze
          public discourse around the SOGIE Bill
        </span>
        . Sentiment analysis identifies the overall sentiment of a text
        (negative, positive, or neutral), while topic modeling uncovers the
        themes discussed in the text. To achieve the main objective, the
        researchers took the following steps: (1) utilized the unsupervised ML
        model RoBERTa to assign sentiment scores to the entire corpus, dividing
        it into 4 subcorpora according to the overall sentiments of the texts
        (negative, positive, neutral, and other); (2) created and trained Latent
        Dirichlet Allocation (LDA), Non-negative Matrix Factorization (NMF),
        BERTopic, and Latent Semantic Analysis (LSA) topic models for each
        subcorpus; (3) evaluated the performance of the topic models using CV
        coherence, UMass coherence, and perplexity scores; (4) determined the
        best-performing topic models based on their scores and extracted their
        generated topics (each represented by the top 30 words); (5) deduced the
        general topics of the best-performing models based on the top words; and
        (6) validated the general topics deduced by the researchers with a
        lawyer to ensure their correctness and the absence of bias. Results
        showed that{" "}
        <span className="text-purple italic">
          LDA consistently excelled in perplexity across the four subcorpora,
          NMF and LSA equally excelled in CV coherence, and BERTopic excelled in
          UMass coherence but with fewer and more repetitive topics
        </span>
        . The outputs of this study, which are the general topics representing
        the sentiments and stances of Filipinos about the SOGIE Bill, will help
        lawmakers revise the bill and foster an understanding of the different
        perspectives on the bill.
      </p>
    ),
    Filipino: (
      <p>
        Ang Sexual Orientation, Gender Identity, at Expression (SOGIE) Bill ay
        isang panukalang batas na naglalayong tugunan ang diskriminasyon batay
        sa SOGIE ng isang indibidwal. Ang SOGIE Bill ay nagdulot ng malawakang
        talakayan sa social media, na nagresulta sa iba-ibang saloobin, opinyon,
        at pananaw na ipinahayag sa pamamagitan ng mga tekstong datos.{" "}
        <span className="text-purple italic">
          Dahil sa kakulangan ng mga publikasyong maaaring hanapin ukol sa
          paggamit ng machine learning (ML) o natural language processing (NLP)
          sa mga dokumentong may kaugnayan sa SOGIE Bill, layunin ng mga
          mananaliksik na tugunan ang gap na ito sa pananaliksik sa pamamagitan
          ng pagsasagawa ng kanilang layunin: gamitin ang sentiment analysis at
          topic modeling techniques upang suriin ang diskurso ng publiko ukol sa
          SOGIE Bill
        </span>
        . Tinutukoy ng sentiment analysis ang kabuuang saloobin ng isang teksto
        (negatibo, positibo, o neutral), habang ang topic modeling ay
        naglalantad ng mga temang tinalakay sa teksto. Upang makamit ang
        pangunahing layunin, isinagawa ng mga mananaliksik ang mga sumusunod na
        hakbang: (1) ginamit ang unsupervised ML model na RoBERTa upang magtakda
        ng sentiment scores sa buong corpus, hinati ito sa 4 na subcorpora ayon
        sa kabuuang saloobin ng mga teksto (negatibo, positibo, neutral, at iba
        pa); (2) nilikha at tinrain ang Latent Dirichlet Allocation (LDA),
        Non-negative Matrix Factorization (NMF), BERTopic, at Latent Semantic
        Analysis (LSA) na mga modelo ng topic para sa bawat subcorpus; (3)
        sinuri ang performance ng mga modelo ng topic gamit ang CV coherence,
        UMass coherence, at perplexity scores; (4) tinukoy ang mga pinakamahusay
        na modelo ng topic batay sa kanilang mga scores at nakuha ang kanilang
        mga nabuo na topics (bawat isa ay kinakatawan ng mga top 30 na salita);
        (5) tinukoy ang mga pangkalahatang topic ng pinakamahusay na mga modelo
        batay sa mga top na salita; at (6) pinagtibay ang mga pangkalahatang
        topic na tinukoy ng mga mananaliksik sa tulong ng isang abogado upang
        tiyakin ang kanilang katumpakan at ang kawalan ng bias. Ang mga resulta
        ay nagpakita na{" "}
        <span className="text-purple italic">
          ang LDA ay patuloy na nangunguna sa perplexity sa lahat ng apat na
          subcorpora, ang NMF at LSA ay pantay na nangunguna sa CV coherence, at
          ang BERTopic ay nangunguna sa UMass coherence ngunit may mas kaunti at
          mas paulit-ulit na mga topic
        </span>
        . Ang mga output ng pag-aaral na ito, na siyang mga pangkalahatang topic
        na kumakatawan sa saloobin at pananaw ng mga Pilipino ukol sa SOGIE
        Bill, ay makakatulong sa mga mambabatas na baguhin ang batas at
        magtaguyod ng pag-unawa sa mga magkakaibang perspektibo tungkol sa
        batas.
      </p>
    ),
    Bisaya: (
      <p>
        Ang Sexual Orientation, Gender Identity, ug Expression (SOGIE) Bill usa
        ka gisugyot nga balaod nga nagtumong sa pagtubag sa diskriminasyon base
        sa SOGIE sa usa ka indibidwal. Ang SOGIE Bill nakapukaw sa dakong
        diskusyon sa social media, nga naghatag og lain-laing mga saloobin,
        opinyon, ug panan-aw nga gipadayag pinaagi sa tekstong datos.{" "}
        <span className="text-purple italic">
          Tungod kay halos walay mga papeles nga mahimong pangitaan bahin sa
          paggamit sa machine learning (ML) o natural language processing (NLP)
          sa mga dokumento nga may kalabutan sa SOGIE Bill sa kasamtangan nga
          literatura, ang mga maghuhimo sa panukiduki nagtumong sa pagtubag
          niining research gap pinaagi sa pag-abot sa ilang tuyo: paggamit sa
          sentiment analysis ug topic modeling techniques aron usisero ang
          diskurso sa publiko bahin sa SOGIE Bill
        </span>
        . Ang sentiment analysis magtino sa kinatibuk-ang saloobin sa usa ka
        teksto (negatibo, positibo, o neutral), samtang ang topic modeling
        magbukas sa mga tema nga gihisgutan sa teksto. Aron maabot ang nag-unang
        tuyo, ang mga maghuhimo sa panukiduki nagbuhat sa mga mosunod nga
        lakang: (1) gigamit ang unsupervised ML model nga RoBERTa aron magtakda
        og sentiment scores sa tibuok corpus, nga gibahin kini ngadto sa 4 ka
        subcorpora sumala sa kinatibuk-ang saloobin sa mga teksto (negatibo,
        positibo, neutral, ug uban pa); (2) naghimo ug nag-train sa Latent
        Dirichlet Allocation (LDA), Non-negative Matrix Factorization (NMF),
        BERTopic, ug Latent Semantic Analysis (LSA) nga mga modelo sa topic para
        sa matag subcorpus; (3) gisusi ang performance sa mga modelo sa topic
        gamit ang CV coherence, UMass coherence, ug perplexity scores; (4) giila
        ang pinakamaayong performing topic models base sa ilang mga scores ug
        gi-extract ang ilang mga gipangbuhat nga mga topics (kada usa gimarkahan
        sa top 30 nga mga pulong); (5) gihimo ang paghulagway sa mga
        pangkalahatang topics sa pinakamaayong performing models base sa mga top
        nga pulong; ug (6) gisusi ang mga pangkalahatang topics nga gihimo sa
        mga maghuhimo sa panukiduki uban sa usa ka abogado aron masiguro ang
        ilang kaangayan ug ang pagkawalay bias. Ang mga resulta nagpakita nga{" "}
        <span className="text-purple italic">
          ang LDA kanunay nag-una sa perplexity sa upat nga subcorpora, ang NMF
          ug LSA nag-una sa CV coherence, ug ang BERTopic nag-una sa UMass
          coherence apan adunay pipila ug mas daghang mga repetitibo nga mga
          topic
        </span>
        . Ang mga resulta sa kini nga pagtuon, nga mao ang mga pangkalahatang
        topics nga nagrepresentar sa mga saloobin ug panan-aw sa mga Pilipino
        bahin sa SOGIE Bill, magahatag og tabang sa mga mambabatas sa pag-uswag
        sa balaod ug magpalig-on sa pagsabot sa mga lain-laing panan-aw bahin sa
        balaod.
      </p>
    ),
  };

  return (
    <div ref={thesisRef} id={sectionId} className={sectionPaddingClassnames}>
      <ProjectDescription
        img={imgs[0]}
        desc={thesisDesc}
        techUsed="Python, Jupyter Notebook, RoBERTa, Latent Dirichlet Allocation (LDA), Nonnegative Matrix Factorization (NMF), Latent Semantic Analysis (LSA), BERTopic"
        index={0}
        carousel={imgs}
        upperContent={
          <div className={`${sectionTitleContainerClassnames} mb-8`}>
            <h2>{camelToTitleCase(sectionId)}</h2>
          </div>
        }
      />
      <div className={boxContainerClassnames}>
        <Box
          key="abstract"
          title={getAbstractTrans()}
          isFoldable={true}
          childrenHeight={aContainerHeight - EXTRA_HEIGHT}
          isUnfolded={false}
        >
          <div ref={aContainerRef} className={itemsContainerClass}>
            <ProjectDescription
              img={imgs[1]}
              desc={thesisAbstract}
              techUsed=""
              index={1}
              carousel={imgs}
              disableAnimation={true}
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Thesis;
