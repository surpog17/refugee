import { FaHome, FaUsers, FaBlog, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { LiaCampgroundSolid, LiaDonateSolid } from "react-icons/lia";
import { MdDynamicFeed } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const Admin = [
  {
    to: "/",
    text: "All Users",
    icon: <FaUsers />,
    subMenu: [
      {
        to: "/idp",
        text: "IDPs",
      },
      {
        to: "/camps",
        text: "Camps",
      },
      {
        to: "/hosts",
        text: "Hosts",
      },
      {
        to: "/ngos",
        text: "NGOs",
      },
    ],
  },
  // {
  //   to: "/feeds",
  //   text: "Feeds",
  //   icon: <FaHome />,
  // },
  {
    to: "/settings",
    text: "Settings",
    icon: <FaCogs />,
  },
];
export const Ipd = [
  {
    to: "/",
    text: "Feed & Story",
    icon: <MdDynamicFeed />,
  },
  {
    to: "/users",
    text: "IDP Users",
    icon: <FaUsers />,
  },
  {
    to: "/users",
    text: "IDP Users",
    icon: <FaUsers />,
  },
  {
    to: "/settings",
    text: "Settings",
    icon: <FaCogs />,
  },
];
export const CampAdmin = [
  {
    to: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    to: "/idp",
    text: "IDP Users",
    icon: <FaUsers />,
  },
  {
    to: "/complain",
    text: "Complain",
    icon: <GrCompliance />,
  },
  {
    to: "/report",
    text: "Report",
    icon: <HiOutlineDocumentReport />,
  },
  {
    to: "/settings",
    text: "Settings",
    icon: <FaCogs />,
  },
];
export const NGOs = [
  {
    to: "/",
    text: "Donation",
    icon: <LiaDonateSolid />,
  },
  {
    to: "/camp-idp",
    text: "Camps & IDP",
    icon: <LiaCampgroundSolid />,
  },
  {
    to: "/settings",
    text: "Settings",
    icon: <FaCogs />,
  },
];
export const volunteer = [
  {
    to: "/",
    text: "Donation",
    icon: <LiaDonateSolid />,
  },
  {
    to: "/camp-idp",
    text: "Camps & IDP",
    icon: <LiaCampgroundSolid />,
  },
  {
    to: "/settings",
    text: "Settings",
    icon: <FaCogs />,
  },
];
