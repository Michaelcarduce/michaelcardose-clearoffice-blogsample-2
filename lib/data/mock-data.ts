import { NavItem, NavDropdown } from "../../types";
import { BarChart3 } from "lucide-react";

export const navItems: NavItem[] = [
  {
    id: "home",
    title: "HOME",
    number: "01",
    path: "/",
    hasDropdown: false,
  },
  // {
  //   id: "services",
  //   title: "SERVICES",
  //   number: "02",
  //   hasDropdown: false,
  // },
  // {
  //   id: "results",
  //   title: "RESULTS",
  //   number: "03",
  //   hasDropdown: true,
  // },
  // {
  //   id: "about",
  //   title: "ABOUT US",
  //   number: "04",
  //   hasDropdown: true,
  // },
  {
    id: "resources",
    title: "RESOURCES",
    number: "02",
    hasDropdown: true,
  },
];

export const dropdowns: Record<string, NavDropdown> = {
  resources: {
    id: "resources",
    items: [
      {
        title: "Blog",
        description: "Latest insights & articles",
        path: "/blog",
        icon: "BarChart3",
      },
    ],
  },
};
