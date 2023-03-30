import * as React from 'react';

const AboutSVG = (props) => (
  <svg
    data-name="Layer about"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 718.41 718.41"
    {...props}
  >
    <path
      d="M360.8 0C162.41 0 1.59 160.82 1.59 359.2S162.41 718.41 360.8 718.41 720 557.59 720 359.2 559.18 0 360.8 0Zm55.36 565a51.09 51.09 0 0 1-51.09 51.09h-7.53A51.08 51.08 0 0 1 306.46 565V305.43a51.08 51.08 0 0 1 51.08-51.08h7.53a51.08 51.08 0 0 1 51.09 51.08Zm-53.57-347.1a53.57 53.57 0 1 1 53.57-53.57 53.57 53.57 0 0 1-53.57 53.57Z"
      transform="translate(-1.59)"
      style={{
        fill: `${props.fill}`,
      }}
    />
  </svg>
);

export default AboutSVG;
