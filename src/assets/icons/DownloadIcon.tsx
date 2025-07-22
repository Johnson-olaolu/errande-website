import React from "react";

type DownloadIconProps = React.SVGProps<SVGSVGElement>;
const DownloadIcon = (props: DownloadIconProps) => {
  return (
    <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.59281" y="1.03715" width="51.9259" height="51.9259" rx="25.963" stroke="currentColor" stroke-width="0.962963" />
      <path
        d="M30.9971 23.8999C34.5971 24.2099 36.0671 26.0599 36.0671 30.1099V30.2399C36.0671 34.7099 34.2771 36.4999 29.8071 36.4999H23.2971C18.8271 36.4999 17.0371 34.7099 17.0371 30.2399V30.1099C17.0371 26.0899 18.4871 24.2399 22.0271 23.9099"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M26.5566 17V29.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M29.907 27.6499L26.557 30.9999L23.207 27.6499"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
