import React from "react";

type IProfileCircleIcon = React.SVGProps<SVGSVGElement>;
const ProfileCircleIcon = (props: IProfileCircleIcon) => {
  return (
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.9639 25.2285C23.8298 25.2093 23.6573 25.2093 23.5039 25.2285C20.1306 25.1135 17.4473 22.3535 17.4473 18.961C17.4473 15.4918 20.2456 12.6743 23.7339 12.6743C27.2031 12.6743 30.0206 15.4918 30.0206 18.961C30.0014 22.3535 27.3373 25.1135 23.9639 25.2285Z"
        stroke="currentColor"
        stroke-width="1.95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.6531 37.8786C33.2414 41.0028 28.7181 42.9003 23.7347 42.9003C18.7514 42.9003 14.2281 41.0028 10.8164 37.8786C11.0081 36.077 12.1581 34.3136 14.2089 32.9336C19.4606 29.4453 28.0472 29.4453 33.2606 32.9336C35.3114 34.3136 36.4614 36.077 36.6531 37.8786Z"
        stroke="currentColor"
        stroke-width="1.95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.735 42.9002C34.3205 42.9002 42.9017 34.319 42.9017 23.7336C42.9017 13.1481 34.3205 4.56689 23.735 4.56689C13.1496 4.56689 4.56836 13.1481 4.56836 23.7336C4.56836 34.319 13.1496 42.9002 23.735 42.9002Z"
        stroke="currentColor"
        stroke-width="1.95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ProfileCircleIcon;
