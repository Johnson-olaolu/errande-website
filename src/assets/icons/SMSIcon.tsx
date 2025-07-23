import React from "react";

type ISMSIcon = React.SVGProps<SVGSVGElement>;
const SMSIcon = (props: ISMSIcon) => {
  return (
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M33.3184 39.7454H14.1517C8.40169 39.7454 4.56836 36.8704 4.56836 30.1621V16.7454C4.56836 10.0371 8.40169 7.16211 14.1517 7.16211H33.3184C39.0684 7.16211 42.9017 10.0371 42.9017 16.7454V30.1621C42.9017 36.8704 39.0684 39.7454 33.3184 39.7454Z"
        stroke="currentColor"
        stroke-width="1.95"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3171 17.7036L27.3179 22.4953C25.3437 24.0669 22.1045 24.0669 20.1304 22.4953L14.1504 17.7036"
        stroke="currentColor"
        stroke-width="1.95"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SMSIcon;
