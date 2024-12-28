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
  EXTRA_HEIGHT,
  itemsContainerClass,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
} from "@/shared";
import { UserPrefContext } from "@/context/UserPrefContext";
import useHighlightSection from "@/hooks/useHighlightSection";
import ProjectDescription from "./ui/ProjectDescription";

export interface SkillsInterface {
  name: string;
  src: string | React.ReactNode;
}

const Thesis = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const aContainerRef = useRef<HTMLDivElement | null>(null);
  const [aContainerHeight, setAContainerHeight] = useState(0);
  useHeightResize({ ref: aContainerRef, setHeight: setAContainerHeight });

  const thesisRef = useRef<HTMLDivElement | null>(null);
  useHighlightSection({
    ref: thesisRef,
    setSection: setSelectedSection,
    section: "Thesis",
  });

  const imgs = [
    "/assets/thesis/certificate-img.png",
    "/assets/thesis/hardbound.png",
  ];

  return (
    <div ref={thesisRef} id="thesis" className={sectionPaddingClassnames}>
      <ProjectDescription
        img={imgs[0]}
        desc={
          <h6>
            Neil Sagun and I, along with Dr. Angie Ceniza's guidance, crafted
            our undergraduate thesis as one of the requirements for our
            graduation in the BSCS (Bachelor of Science in Computer Science)
            program at the University of San Carlos. The paper is entitled,{" "}
            <span className="text-purple italic">
              SOGIE Bill Discourse Analysis Using Latent Dirichlet Allocation,
              Nonnegative Matrix Factorization, BERTopic, and Latent Semantic
              Analysis
            </span>
            . Our paper highlights the usage of{" "}
            <span className="text-purple italic">machine learning (ML)</span>{" "}
            and{" "}
            <span className="text-purple italic">
              natural language processing (NLP)
            </span>{" "}
            in social issues. On the 28th of November 2024, I presented our
            thesis at the IEEE International Conference on Communications,
            Networks and Satellite 2024 via Zoom.
          </h6>
        }
        techUsed="Python, Jupyter Notebook, RoBERTa, Latent Dirichlet Allocation (LDA), Nonnegative Matrix Factorization (NMF), Latent Semantic Analysis (LSA), BERTopic"
        index={0}
        carousel={imgs}
        upperContent={
          <div className={`${sectionTitleContainerClassnames} mb-8`}>
            <h2>Thesis</h2>
          </div>
        }
        isDescLong={true}
      />
      <div className={boxContainerClassnames}>
        <Box
          key="abstract"
          title="Abstract"
          isFoldable={true}
          childrenHeight={aContainerHeight - EXTRA_HEIGHT}
          isUnfolded={false}
        >
          <div ref={aContainerRef} className={itemsContainerClass}>
            <ProjectDescription
              img={imgs[1]}
              desc={
                <p>
                  The Sexual Orientation, Gender Identity, and Expression
                  (SOGIE) Bill is a proposed law seeking to address
                  discrimination based on an individual's SOGIE. The SOGIE Bill
                  has sparked widespread debates on social media, leading to
                  diverse public sentiments, stances, and opinions expressed
                  through textual data.{" "}
                  <span className="text-purple italic">
                    Since there are virtually no searchable papers about
                    applying machine learning (ML) or natural language
                    processing (NLP) techniques in SOGIE Bill-related documents
                    in the current literature, the researchers intend to address
                    this research gap by fulfilling their objective: using
                    sentiment analysis and topic modeling techniques to analyze
                    public discourse around the SOGIE Bill
                  </span>
                  . Sentiment analysis identifies the overall sentiment of a
                  text (negative, positive, or neutral), while topic modeling
                  uncovers the themes discussed in the text. To achieve the main
                  objective, the researchers took the following steps: (1)
                  utilized the unsupervised ML model RoBERTa to assign sentiment
                  scores to the entire corpus, dividing it into 4 subcorpora
                  according to the overall sentiments of the texts (negative,
                  positive, neutral, and other); (2) created and trained Latent
                  Dirichlet Allocation (LDA), Non-negative Matrix Factorization
                  (NMF), BERTopic, and Latent Semantic Analysis (LSA) topic
                  models for each subcorpus; (3) evaluated the performance of
                  the topic models using CV coherence, UMass coherence, and
                  perplexity scores; (4) determined the best-performing topic
                  models based on their scores and extracted their generated
                  topics (each represented by the top 30 words); (5) deduced the
                  general topics of the best-performing models based on the top
                  words; and (6) validated the general topics deduced by the
                  researchers with a lawyer to ensure their correctness and the
                  absence of bias. Results showed that{" "}
                  <span className="text-purple italic">
                    LDA consistently excelled in perplexity across the four
                    subcorpora, NMF and LSA equally excelled in CV coherence,
                    and BERTopic excelled in UMass coherence but with fewer and
                    more repetitive topics
                  </span>
                  . The outputs of this study, which are the general topics
                  representing the sentiments and stances of Filipinos about the
                  SOGIE Bill, will help lawmakers revise the bill and foster an
                  understanding of the different perspectives on the bill.
                </p>
              }
              techUsed=""
              index={1}
              carousel={imgs}
              isDescLong={true}
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Thesis;
