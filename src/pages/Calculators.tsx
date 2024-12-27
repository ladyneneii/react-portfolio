import {
  boxContainerClassnames,
  EXTRA_HEIGHT,
  sectionPaddingClassnames,
  sectionTitleContainerClassnames,
  videosContainerClass,
} from "@/shared";
import Button from "../components/ui/Button";
import Box from "../components/ui/Box";
import useHeightResize from "@/hooks/useHeightResize";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserPrefContext } from "@/context/UserPrefContext";
import VideoDescription, {
  VideoDescriptionInterface,
} from "@/components/ui/VideoDescription";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FeaturesList } from "./TaylorSwift";
import { renderLongDesc } from "@/components/functions/renderLongDesc";

const Calculators = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const isTablet2 = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const rrContainerRef = useRef<HTMLDivElement | null>(null);
  const [rrContainerHeight, setRrContainerHeight] = useState(0);
  useHeightResize({ ref: rrContainerRef, setHeight: setRrContainerHeight });

  const prContainerRef = useRef<HTMLDivElement | null>(null);
  const [prContainerHeight, setPrContainerHeight] = useState(0);
  useHeightResize({ ref: prContainerRef, setHeight: setPrContainerHeight });

  const dsContainerRef = useRef<HTMLDivElement | null>(null);
  const [dsContainerHeight, setDsContainerHeight] = useState(0);
  useHeightResize({ ref: dsContainerRef, setHeight: setDsContainerHeight });

  const cContainerRef = useRef<HTMLDivElement | null>(null);
  const [cContainerHeight, setCContainerHeight] = useState(0);
  useHeightResize({ ref: cContainerRef, setHeight: setCContainerHeight });

  const cpuSchedInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/calculators/round-robin.png",
      altLink: "",
      desc: renderLongDesc(
        "Round Robin",
        "Round Robin is one of the CPU Scheduling algorithms I coded from scratch. The other algorithms are FCFS (First-Come, First-Served), SJS (Shortest Job First), Priority (Non-Preemptive), Priority (Preemptive), SRTF (Shortest Remaining Time First), MLQ (Multilevel Queue), and MLFQ (Multilevel Feedback Queue). This calculator constructs the Gantt chart/s for the algorithm with the information provided by the user (e.g. Arrival time, Burst Time, etc.) and a table showing the processes and their respective ending, turnaround, and waiting time."
      ),
      isImg: true,
    },
    {
      src: "/assets/calculators/mlfq.png",
      altLink: "",
      desc: renderLongDesc(
        "Multilevel Feedback Queue (MLFQ)",
        "This calculator allows the combination of MLFQ and MLQ (Multilevel Queue) algorithms.",
        true
      ),
      isImg: true,
    },
    {
      src: "/assets/calculators/mlfq-2.png",
      altLink: "",
      desc: "Multilevel Feedback Queue (MLFQ) Results",
      isImg: true,
    },
  ];

  const pageReplacementInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/calculators/fifo.png",
      altLink: "",
      desc: renderLongDesc(
        "First In, First Out (FIFO)",
        "FIFO is one of the page replacement algorithms I coded from scratch. The other algorithms are LRU (Least Recently Used), LFU (Least Frequently Used), and Optimal. The calculator constructs a table showing the pages, columns, frames, and the number of hits and faults together with the information provided by the user (e.g. page references and number of frames)."
      ),
      isImg: true,
    },
  ];

  const diskSchedulingInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/calculators/c-scan.png",
      altLink: "",
      desc: renderLongDesc(
        "Circular SCAN (C-SCAN)",
        "C-SCAN is one of the disk scheduling algorithms I coded from scratch. The other algorithms are FCFS (First-Come, First-Served), SSTF (Shortest Seek Time First), SCAN, LOOK, and C-LOOK (Circular LOOK). The calculator constructs a line chart showing the disk requests and calculates the total seek time based on the information provided by the user (e.g. disk requests and number of cylinders)."
      ),
      isImg: true,
    },
  ];

  const cryptographyInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/calculators/cryptography.png",
      altLink: "",
      desc: renderLongDesc(
        "File Encryption & Decryption",
        "I coded my own cryptographic algorithm by combining the RSA, Transposition, Vernam, Vigenere, and Caesar Cipher algorithms from scratch. The user inputs the file they want to encrypt together with a keyword they must not forget. The calculator then outputs the encrypted file together with its private key, mod, and OTP. To successfully decrypt the file, the user must input the encrypted file together with its private key, mod, OTP, and keyword."
      ),
      isImg: true,
    },
    {
      src: "/assets/calculators/flowchart-encryption-decryption.png",
      altLink: "",
      desc: "Encryption & Decryption Flowchart",
      isImg: true,
    },
  ];

  const renderCFeaturePics = (
    ref: MutableRefObject<HTMLDivElement | null>,
    featureInfo: VideoDescriptionInterface[]
  ) => {
    return (
      <div
        ref={ref}
        className={`${videosContainerClass} flex-wrap ${
          isTablet2 ? "flex-col" : ""
        }`}
      >
        {featureInfo.map(({ src, altLink, desc, thumbnail, isImg }, index) => (
          <VideoDescription
            key={src}
            src={src}
            altLink={altLink}
            desc={desc}
            thumbnail={thumbnail}
            isImg={isImg}
            index={index}
            carousel={featureInfo.map(({ src }) => src)}
          />
        ))}
      </div>
    );
  };

  const featuresList: FeaturesList[] = [
    {
      title: "CPU Scheduling Algorithms",
      height: rrContainerHeight,
      ref: rrContainerRef,
      featureInfo: cpuSchedInfo,
    },
    {
      title: "Page Replacement Algorithms",
      height: prContainerHeight,
      ref: prContainerRef,
      featureInfo: pageReplacementInfo,
    },
    {
      title: "Disk Scheduling Algorithms",
      height: dsContainerHeight,
      ref: dsContainerRef,
      featureInfo: diskSchedulingInfo,
    },
    {
      title: "Cryptography",
      height: cContainerHeight,
      ref: cContainerRef,
      featureInfo: cryptographyInfo,
    },
  ];

  const renderCBoxes = () => {
    return featuresList.map(({ title, height, ref, featureInfo }) => (
      <Box
        key={title}
        title={title}
        isFoldable={true}
        childrenHeight={height - EXTRA_HEIGHT}
      >
        {renderCFeaturePics(ref, featureInfo)}
      </Box>
    ));
  };

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Calculators</h1>
      </div>
      <div className={boxContainerClassnames}>{renderCBoxes()}</div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default Calculators;
