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

const Padayon = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const isTablet2 = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const rlContainerRef = useRef<HTMLDivElement | null>(null);
  const [rlContainerHeight, setRlContainerHeight] = useState(0);
  useHeightResize({ ref: rlContainerRef, setHeight: setRlContainerHeight });

  const hContainerRef = useRef<HTMLDivElement | null>(null);
  const [hContainerHeight, setHContainerHeight] = useState(0);
  useHeightResize({ ref: hContainerRef, setHeight: setHContainerHeight });

  const ssContainerRef = useRef<HTMLDivElement | null>(null);
  const [ssContainerHeight, setSsContainerHeight] = useState(0);
  useHeightResize({ ref: ssContainerRef, setHeight: setSsContainerHeight });

  const mtContainerRef = useRef<HTMLDivElement | null>(null);
  const [mtContainerHeight, setMtContainerHeight] = useState(0);
  useHeightResize({ ref: mtContainerRef, setHeight: setMtContainerHeight });

  const bvContainerRef = useRef<HTMLDivElement | null>(null);
  const [bvContainerHeight, setBvContainerHeight] = useState(0);
  useHeightResize({ ref: bvContainerRef, setHeight: setBvContainerHeight });

  const rContainerRef = useRef<HTMLDivElement | null>(null);
  const [rContainerHeight, setRContainerHeight] = useState(0);
  useHeightResize({ ref: rContainerRef, setHeight: setRContainerHeight });

  const gContainerRef = useRef<HTMLDivElement | null>(null);
  const [gContainerHeight, setgContainerHeight] = useState(0);
  useHeightResize({ ref: gContainerRef, setHeight: setgContainerHeight });

  const registerLoginInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-register-login.mp4",
      altLink:
        "https://drive.google.com/file/d/1DjeHD60okuXB1ZYxRMQgKx1ULGB6yY7t/view?usp=sharing",
      desc: renderLongDesc(
        "Register & Login",
        "Both register and login forms have form validations."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-register-login-thumbnail.png",
    },
  ];

  const homeInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-home.mp4",
      altLink:
        "https://drive.google.com/file/d/1Gfi05Ssf9SNOiwMYFablwFNwYaa2WV2M/view?usp=sharing",
      desc: renderLongDesc(
        "Mental Health Professionals Near Me (Home) Page",
        "Upon logging in to your account, you will be redirected to the home page, which is also the Mental Health Professionals Near Me page, where the website will ask for your permission to use your location. The reason for that is the home page contains a grid of profiles from mental health professionals, and they are arranged according to how near they are to you. You are allowed to not grant location permissions, but the profiles on the home page will not be arranged accordingly."
      ),

      thumbnail: "/assets/padayon/thumbnails/p-home-thumbnail.png",
    },
  ];

  const safeSpaceInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-post-reply-crud.mp4",
      altLink:
        "https://drive.google.com/file/d/1NbehsAHYOkltmXzBtnjXM9Ca3K0nrYH6/view?usp=sharing",
      desc: renderLongDesc(
        "Post & Reply CRUD",
        "The Safe Space page is essentially a forum where users interact with each other by posting and replying to posts. Users can perform CRUD (Create, Read, Update, and Delete) operations on their posts and replies, which are reflected in the database. Deleted posts can be undone only if they have replies; otherwise, they are permanently deleted."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-post-reply-crud-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-reply-levels.mp4",
      altLink:
        "https://drive.google.com/file/d/150bW1KmLXFY3ZDdshVCPE7BHn6I_seFH/view?usp=sharing",
      desc: renderLongDesc(
        "Multi-Level/Infinitely Nested Replies",
        "The replies are infinitely nested, which means you can reply to a post, reply to another reply, reply to a reply to a reply, reply to a reply to a reply to a reply, and so on. Each post/reply can also contain multiple replies, with each reply being infinitely nested, allowing for better organization of multiple topics on one post."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-reply-levels-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-editHistory-triggering.mp4",
      altLink:
        "https://drive.google.com/file/d/1VZg7Howg9vZbATj9j4thOxBbdOWNoaqA/view?usp=sharing",
      desc: renderLongDesc(
        "Edit History & Mark as Triggering",
        "In editing a post or reply, users are allowed to mark it as triggering and display a warning message to warn users that their post/reply contains slightly triggering content. This warning message may contain trigger warnings that indicate the content of the post/reply. The content of the posts or replies marked as triggering will not be displayed right away; instead, their warning messages will be shown first to the users together with a button that allows them to view or hide the actual content. The warning message gives the users an idea of what the content is about, letting them judge whether they should view or ignore the content. Furthermore, since posts and replies can be edited, their edit history is visible to users to ensure transparency."
      ),
      thumbnail:
        "/assets/padayon/thumbnails/p-editHistory-triggering-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-hideFromNMHP.mp4",
      altLink:
        "https://drive.google.com/file/d/1Fc-Xtg06t9R-bZQDtnaSAy1HGruIbn5P/view?usp=sharing",
      desc: renderLongDesc(
        "Hide From NMHP (Nonmental Health Professionals)",
        "The website has four types of users: Guest, Mental Health Professionals (MHP), Nonmental Health Professionals (NMHP), and Admins. MHPs include registered therapists, psychologists, and psychiatrists who have proven their credibility; therefore, they have the privilege of hiding posts or replies from anyone on the Safe Space forum if they deem them to be inappropriate or too triggering even for the Mark as Triggering feature to solve. This is to protect NMHPs from consuming triggering content. Only MHPs and admins have the ability to hide or unhide posts and replies. Posts and replies hidden by the MHPs and admins cannot be seen by NMHPs; instead, they can only see a note saying that the content has been hidden. MHPs and admins can still see the hidden content together with a note that it has been hidden from NMHPs."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-hideFromNMHP-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-admin.mp4",
      altLink:
        "https://drive.google.com/file/d/1lBBLKsRmic1_dfy73UVNBqu40oM1AN24/view?usp=sharing",
      desc: renderLongDesc(
        "Delete as Admin",
        "Admins are mental health professionals who manage the website, so they have the highest power on the platform. Not only can they hide/unhide posts and replies, but they can also delete posts or replies from anyone. This is to ensure the safety of users and to correct violators who post offensive content. Deleted posts can be undone only if they have replies; otherwise, they are permanently deleted."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-admin-thumbnail.png",
    },
  ];

  const messagesWorldInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-messages.mp4",
      altLink:
        "https://drive.google.com/file/d/1VFospwBb-wqs-JMs6nsKjgH5s5JbKbDD/view?usp=sharing",
      desc: renderLongDesc(
        "One-on-One & Group Messaging",
        "Clicking on a user's icon redirects you to their profile, which contains the Message button. Clicking on that button creates a chat box between you and the user, allowing you to message the person one-on-one. This is useful for NMHPs looking for MHPs near them as they can message them right away for inquiries. You can also create or join a group chat. Providing the credentials of an existing group chat allows you to join that group chat while providing credentials of a group chat that does not exist yet automatically creates that group chat for you, and you can share the credentials with the other users on the platform."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-messages-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-theWorld.mp4",
      altLink:
        "https://drive.google.com/file/d/19L5x0h9Y-kQN_I1rySdsr1JF7z8fODbU/view?usp=sharing",
      desc: renderLongDesc(
        "The World",
        "The World is a map of the entire world containing the locations of MHPs. This is useful for NMHPs who are traveling and want to see which MHPs are around the area of their destination. Clicking on any profile picture on the map redirects you to that MHP's profile where you can initiate a conversation with them."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-theWorld-thumbnail.png",
    },
  ];

  const blockVerifyInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-block.mp4",
      altLink:
        "https://drive.google.com/file/d/1vbef00JyB1AxhwtJqrezlWXCwZGzA7dm/view?usp=sharing",
      desc: renderLongDesc(
        "Block/Unblock User",
        "Admins are allowed to block a user for violating the community standards. Users of blocked accounts will not be able to log in to their accounts even if they have provided the correct credentials; instead, a note will be displayed saying one of the admins has blocked their account and that they must message them to appeal for unblocking their account."
      ),
      thumbnail: "/assets/padayon/thumbnails/p-block-thumbnail.png",
    },
    {
      src: "/assets/padayon/p-verify.mp4",
      altLink:
        "https://drive.google.com/file/d/1akaaz4XGT4FnOn5ccUd-ukhxxLmz4X8r/view?usp=sharing",
      desc: renderLongDesc(
        "Verify/Unverify MHP",
        "Users who are registered as MHPs have to fill out a form where they provide their credentials as registered mental health professionals. Upon submitting the form, their accounts will be considered as NMHP until one of the admins reviews their filled-out form and verifies them as MHP. Upon verification, admins hold the power to unverify them if they violate any standards on the platform."
      ),

      thumbnail: "/assets/padayon/thumbnails/p-verify-thumbnail.png",
    },
  ];

  const responsiveInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-responsive.mp4",
      altLink:
        "https://drive.google.com/file/d/1W4c1U3aYFtHhZew_hkykZT4dEMgu6JyX/view?usp=sharing",
      desc: (
        <span className="text-sm font-extralight">
          The website is also mobile-responsive, although the UI can be
          improved.
        </span>
      ),
      thumbnail: "/assets/padayon/thumbnails/p-responsive-thumbnail.png",
    },
  ];

  const guestInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/padayon/p-guest.png",
      altLink: "",
      desc: (
        <div className="leading-[24px] font-extralight text-justify">
          Guests are not registered users of Padayon, so their credentials do
          not exist in the database. Guests can still access some of the
          website's features, but they are unable to interact with the
          registered users or affect changes to the website in any way. As seen
          in the photo above, the input fields on the Messages page are
          disabled.
        </div>
      ),
      isImg: true,
    },
  ];

  const renderTFeatureVids = (
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
            carousel={guestInfo.map(({ src }) => src)}
          />
        ))}
      </div>
    );
  };

  const featuresList: FeaturesList[] = [
    {
      title: "User Authentication",
      height: rlContainerHeight,
      ref: rlContainerRef,
      featureInfo: registerLoginInfo,
    },
    {
      title: "Home Page",
      height: hContainerHeight,
      ref: hContainerRef,
      featureInfo: homeInfo,
    },
    {
      title: "Safe Space",
      height: ssContainerHeight,
      ref: ssContainerRef,
      featureInfo: safeSpaceInfo,
    },
    {
      title: "Messages & The World",
      height: mtContainerHeight,
      ref: mtContainerRef,
      featureInfo: messagesWorldInfo,
    },
    {
      title: "User Blocking and Verification",
      height: bvContainerHeight,
      ref: bvContainerRef,
      featureInfo: blockVerifyInfo,
    },
    {
      title: "Website Responsiveness",
      height: rContainerHeight,
      ref: rContainerRef,
      featureInfo: responsiveInfo,
    },
    {
      title: "Guests",
      height: gContainerHeight,
      ref: gContainerRef,
      featureInfo: guestInfo,
    },
  ];

  const renderTBoxes = () => {
    return featuresList.map(({ title, height, ref, featureInfo }) => (
      <Box
        key={title}
        title={title}
        isFoldable={true}
        childrenHeight={height - EXTRA_HEIGHT}
      >
        {renderTFeatureVids(ref, featureInfo)}
      </Box>
    ));
  };

  return (
    <div className={sectionPaddingClassnames}>
      <div className={sectionTitleContainerClassnames}>
        <h1>Padayon;</h1>
      </div>
      <div className={boxContainerClassnames}>{renderTBoxes()}</div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default Padayon;
