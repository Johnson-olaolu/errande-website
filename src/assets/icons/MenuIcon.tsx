import React from "react";

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {}
const MenuIcon: React.FC<MenuIconProps> = (props) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor" />
      <rect x="9" y="12" width="22" height="2" fill="currentColor" />
      <rect x="9" y="19" width="22" height="2" fill="currentColor" />
      <rect x="9" y="26" width="22" height="2" fill="currentColor" />
    </svg>
  );
};

export default MenuIcon;
