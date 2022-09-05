import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type LayoutSize = {
  isDesktop: boolean;
  isTablet: boolean;
  isPhone: boolean;
};

export type MenuItem = {
  routelink: string;
  icon?: IconProp;
  label: string;
  items?: MenuItems;
};

export type MenuItems = MenuItem[];
