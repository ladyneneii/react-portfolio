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

const Table = () => {
  const { setSelectedSection } = useContext(UserPrefContext);
  const isTablet2 = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    setSelectedSection("");
  }, [setSelectedSection]);

  const gcfContainerRef = useRef<HTMLDivElement | null>(null);
  const [gcfContainerHeight, setGcfContainerHeight] = useState(0);
  useHeightResize({ ref: gcfContainerRef, setHeight: setGcfContainerHeight });

  const sContainerRef = useRef<HTMLDivElement | null>(null);
  const [sContainerHeight, setSContainerHeight] = useState(0);
  useHeightResize({ ref: sContainerRef, setHeight: setSContainerHeight });

  const rprContainerRef = useRef<HTMLDivElement | null>(null);
  const [rprContainerHeight, setRprContainerHeight] = useState(0);
  useHeightResize({ ref: rprContainerRef, setHeight: setRprContainerHeight });

  const crContainerRef = useRef<HTMLDivElement | null>(null);
  const [crContainerHeight, setCrContainerHeight] = useState(0);
  useHeightResize({ ref: crContainerRef, setHeight: setCrContainerHeight });

  const actrContainerRef = useRef<HTMLDivElement | null>(null);
  const [actrContainerHeight, setActrContainerHeight] = useState(0);
  useHeightResize({ ref: actrContainerRef, setHeight: setActrContainerHeight });

  const fpgbContainerRef = useRef<HTMLDivElement | null>(null);
  const [fpgbContainerHeight, setFpgbContainerHeight] = useState(0);
  useHeightResize({ ref: fpgbContainerRef, setHeight: setFpgbContainerHeight });

  const cfeContainerRef = useRef<HTMLDivElement | null>(null);
  const [cfeContainerHeight, setCfeContainerHeight] = useState(0);
  useHeightResize({ ref: cfeContainerRef, setHeight: setCfeContainerHeight });

  const cContainerRef = useRef<HTMLDivElement | null>(null);
  const [cContainerHeight, setCContainerHeight] = useState(0);
  useHeightResize({ ref: cContainerRef, setHeight: setCContainerHeight });

  const globalColumnFiltersInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-global-column-search.mp4",
      altLink:
        "https://drive.google.com/file/d/16h1p5UR27YmgqwnU1u4QkWXTr7ELGbQs/view?usp=sharing",
      desc: "Global & Column Filters with Input Fields",
      thumbnail:
        "/assets/table/thumbnails/t-global-column-search-thumbnail.png",
    },
    {
      src: "/assets/table/t-select.mp4",
      altLink:
        "https://drive.google.com/file/d/1mXxZvy0o_F7rlCqL-tYp8FDVvIsUreq-/view?usp=sharing",
      desc: "Column Filters with Select Fields",
      thumbnail: "/assets/table/thumbnails/t-select-thumbnail.png",
    },
    {
      src: "/assets/table/t-date-range.mp4",
      altLink:
        "https://drive.google.com/file/d/1H0bFjv4FcTcTC1J5fdlMF9Zz2Ieblu6d/view?usp=sharing",
      desc: "Column Filters with Date Range",
      thumbnail: "/assets/table/thumbnails/t-date-range-thumbnail.png",
    },
    {
      src: "/assets/table/t-select-date-range.mp4",
      altLink:
        "https://drive.google.com/file/d/1XQxoyr9d8TCL3SCMIFSFATS_uIKdGhUM/view?usp=sharing",
      desc: "Column Filters with Date Range and Select",
      thumbnail: "/assets/table/thumbnails/t-select-date-range-thumbnail.png",
    },
  ];

  const renderLongDesc = (title: string, desc: string) => {
    return (
      <div className="flex flex-col gap-2">
        <p>{title}</p>
        <div className="text-sm font-extralight leading-[24px] text-justify">
          {desc}
        </div>
      </div>
    );
  };

  const sortingInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-sorting.mp4",
      altLink:
        "https://drive.google.com/file/d/1f0Gx79HvpP8w2oMrEZFPtAdbrTEe4B38/view?usp=sharing",
      desc: renderLongDesc(
        "Simple Sorting (Ascend, Descend, None)",
        "This also allows multi-sorting where multiple columns can be sorted in case the previous columns being sorted have the same values."
      ),

      thumbnail: "/assets/table/thumbnails/t-sorting-thumbnail.png",
    },
    {
      src: "/assets/table/t-custom-sorting.mp4",
      altLink:
        "https://drive.google.com/file/d/1qGFk4KTgaMSCFOSlpBs9m3yVxhXvX-y0/view?usp=sharing",
      desc: renderLongDesc(
        "Custom Sorting (Sort According to a Substring)",
        "This has the same characteristics as simple sorting except you can specify which substring should be sorted instead of the entire value or string."
      ),

      thumbnail: "/assets/table/thumbnails/t-custom-sorting-thumbnail.png",
    },
  ];

  const rowPaginationInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-rows-pagination.mp4",
      altLink:
        "https://drive.google.com/file/d/1LPpTJNNj4BAFT39mdZ5UFFaHBotyWiL3/view?usp=sharing",
      desc: renderLongDesc(
        "Pagination & Number of Rows Per Page",
        "Select the number of rows each page displays and navigate through the pages using the page buttons or input field."
      ),
      thumbnail: "/assets/table/thumbnails/t-rows-pagination-thumbnail.png",
    },
    {
      src: "/assets/table/t-row-selection.mp4",
      altLink:
        "https://drive.google.com/file/d/1O1KyhxK-6vQ_qrbcQdRmXogu7TFrbxfw/view?usp=sharing",
      desc: renderLongDesc(
        "Select or Deselect Rows",
        "Selecting/deselecting all rows will apply to all rows, but selecting/deselecting all rows with applied filters will only apply to all filtered rows."
      ),
      thumbnail: "/assets/table/thumbnails/t-row-selection-thumbnail.png",
    },
  ];

  const colReorderInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-col-reordering.mp4",
      altLink:
        "https://drive.google.com/file/d/1czcVa0Zj3jjbyCF_ciUcJEL671Al8Dfv/view?usp=sharing",
      desc: (
        <span className="text-sm font-extralight">
          Move the columns and change their positions using the drag & drop
          column feature.
        </span>
      ),
      thumbnail: "/assets/table/thumbnails/t-col-reordering-thumbnail.png",
    },
  ];

  const actionResponsivenessInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-actions-crud.mp4",
      altLink:
        "https://drive.google.com/file/d/1hGrPKKLNkLvo56eoUATnNasZkfB_Gx8r/view?usp=sharing",
      desc: renderLongDesc(
        "CRUD Actions",
        "Perform CRUD (Create, Read, Update, and Delete) actions on table rows using the options in the Action column. The available actions may be the same for all rows or may vary depending on one or multiple columns, whether they have string or number values."
      ),
      thumbnail: "/assets/table/thumbnails/t-actions-crud-thumbnail.png",
    },
    {
      src: "/assets/table/t-responsive.mp4",
      altLink:
        "https://drive.google.com/file/d/1uJE2isDHOaP1T-2oNR2rbmY4hax3zXT1/view?usp=sharing",
      desc: renderLongDesc(
        "Table Responsiveness",
        "The table is both tablet and mobile-responsive. However, the table does not 'look' responsive because the entire page (i.e. the table's surrounding components) and the rest of the pages on the website are not mobile responsive as specified by the product owner. If they were, the table would be mobile responsive as it was created to be so. The table also features a pair of left and right buttons that allow the user to scroll through wide tables horizontally. They are fixed to the page, so users can still access them no matter how far they have scrolled through the entire page vertically."
      ),

      thumbnail: "/assets/table/thumbnails/t-responsive-thumbnail.png",
    },
  ];

  const presetsGroupInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-filter-presets.mp4",
      altLink:
        "https://drive.google.com/file/d/1V0qT894Z71lcfs_n2tSxhfX2Bgv_rwMK/view?usp=sharing",
      desc: renderLongDesc(
        "Filter Presets",
        "The table allows users to create and save presets with predefined filters for different purposes. In creating a preset, users can customize which columns to display (and the order in which they are displayed), which string matching operators (e.g. Begins with, Ends with, Contains, Is, Is like, Does not begin with, etc.) to apply to which columns (combined using AND and OR operators), which columns are being sorted in which order, and which columns are being used for Group By."
      ),
      thumbnail: "/assets/table/thumbnails/t-filter-presets-thumbnail.png",
    },
    {
      src: "/assets/table/t-group-by.mp4",
      altLink:
        "https://drive.google.com/file/d/1G-psgLKsb7TyHMczMYnSQxIeF6qxRj1o/view?usp=sharing",
      desc: renderLongDesc(
        "Group By",
        "Group By is a subfeature in Filter Presets that allows the table to group the rows according to the unique values in the chosen column. For example, if you group the table by the Status column, since the unique values of the column are Approved, Rejected, Expired, and Pending, the rows in the table will be grouped according to those Status values."
      ),
      thumbnail: "/assets/table/thumbnails/t-group-by-thumbnail.png",
    },
  ];

  const clearExportInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-clear-filters.mp4",
      altLink:
        "https://drive.google.com/file/d/1Fec2FDpNRGh69fODwG--X4kYgTsq0dy1/view?usp=sharing",
      desc: renderLongDesc(
        "Clear Filter",
        "In the default view or preset, clicking on the Clear Filter button removes all filters, row selections, sorts, and other customizations made by the user and resets everything back to how the table looked initially. If in a user-defined view or preset, clicking on the Clear Filter button will only remove customizations not saved in the preset, thus resetting the table back to its predefined settings in the preset, NOT to the default view."
      ),
    },
    {
      src: "/assets/table/t-export.mp4",
      altLink:
        "https://drive.google.com/file/d/1z_WbGtyv_MeHKTPLnISPVzoPLhVWJLLZ/view?usp=sharing",
      desc: renderLongDesc(
        "Table Export",
        "Exporting the table exports all resulting rows across all pages into an Excel (.xlsx) sheet. If customizations have been applied (filters, sorts, etc.), only the resulting rows across all pages in the table are exported."
      ),
      thumbnail: "/assets/table/thumbnails/t-export-thumbnail.png",
    },
  ];

  const customizeInfo: VideoDescriptionInterface[] = [
    {
      src: "/assets/table/t-multiple-tables.png",
      altLink: "",
      desc: "No Filter Preset, Clear Filters, and Download Buttons",
      isImg: true,
    },
    {
      src: "/assets/table/t-noFilters-download.png",
      altLink: "",
      desc: renderLongDesc(
        "Multiple Tables",
        "Here, the two pairs of left and right buttons for each table do not interfere with each other as they are now positioned relative to their respective table instead of being positioned fixed to the entire page."
      ),
      isImg: true,
    },
    {
      src: "/assets/table/t-small.png",
      altLink: "",
      desc: renderLongDesc(
        "Small Table",
        "This is a table without any filter or download options above it. It also does not contain any column filters. It is possible to specify which columns do not contain any column filters, making it easier for customization by the developers. The table is also able to store link values (in blue) that fulfill a defined action as shown above."
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
            carousel={customizeInfo.map(({ src }) => src)}
          />
        ))}
      </div>
    );
  };

  const featuresList: FeaturesList[] = [
    {
      title: "Global & Column-Specific Searches/Filters",
      height: gcfContainerHeight,
      ref: gcfContainerRef,
      featureInfo: globalColumnFiltersInfo,
    },
    {
      title: "Sorting & Multi-Sorting",
      height: sContainerHeight,
      ref: sContainerRef,
      featureInfo: sortingInfo,
    },
    {
      title: "Pagination, Row Display, and Row Selection",
      height: rprContainerHeight,
      ref: rprContainerRef,
      featureInfo: rowPaginationInfo,
    },
    {
      title: "Column Reordering",
      height: crContainerHeight,
      ref: crContainerRef,
      featureInfo: colReorderInfo,
    },
    {
      title: "CRUD Actions & Table Responsivenesss",
      height: actrContainerHeight,
      ref: actrContainerRef,
      featureInfo: actionResponsivenessInfo,
    },
    {
      title: "Filter Presets & Group By",
      height: fpgbContainerHeight,
      ref: fpgbContainerRef,
      featureInfo: presetsGroupInfo,
    },
    {
      title: "Clear Filter & Table Export",
      height: cfeContainerHeight,
      ref: cfeContainerRef,
      featureInfo: clearExportInfo,
    },
    {
      title: "Table Variants",
      height: cContainerHeight,
      ref: cContainerRef,
      featureInfo: customizeInfo,
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
        <h1>FilPass V2 Table</h1>
      </div>
      <div className={boxContainerClassnames}>{renderTBoxes()}</div>
      <div className="flex justify-center">
        <Button onClick={() => window.history.back()} content="Go back" />
      </div>
    </div>
  );
};

export default Table;
