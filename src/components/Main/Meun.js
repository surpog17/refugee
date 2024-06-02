import { FaHome, FaUsers, FaBlog, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { LiaCampgroundSolid, LiaDonateSolid } from "react-icons/lia";
import { MdDynamicFeed } from "react-icons/md";

export const Admin = [
  {
    to: "/",
    text: "All Users",
    icon: <FaUsers />,
    subMenu: [
      {
        to: "/IDP",
        text: "IDP",
      },
      {
        to: "/camps",
        text: "Camps",
      },
      {
        to: "/hosts",
        text: "Host",
      },
      {
        to: "/NGOs",
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
