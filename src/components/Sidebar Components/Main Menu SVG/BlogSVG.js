import * as React from 'react';

const BlogSVG = (props) => (
  <svg
    id="Layer_blog"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 672.1 705.1"
    style={{
      enableBackground: 'new 0 0 672.1 705.1',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{`.stblog{fill:${props.fill}}`}</style>
    <path
      className="stblog"
      d="m0 705.1 176.9-158.3h402.9V182.9l-47.1 53-1.5 262.4H155.4v1.4L48.6 606.5V160.2h371.9l48.6-48.6H0v48.6"
    />
    <path
      className="stblog"
      d="M335.6 258.7H161.2v-66.6h209.2l-1 48.2H336zM96.6 305.5h354.3v48.4H96.6zM96.6 401h354.3v48.8H96.6zM379.6 292.6l74.9-18.1-56.8-56.8zM615.3 0 397.7 217.6l26.1 26.2 30.7 30.6L672.1 56.8z"
    />
  </svg>
);

export default BlogSVG;
