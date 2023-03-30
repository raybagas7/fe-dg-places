import React, { useState } from 'react';
import BlogSVG from '../Main Menu SVG/BlogSVG';
import BrowseSVG from '../Main Menu SVG/BrowseSVG';
import MerlionSVG from '../Main Menu SVG/MerlionSVG';
import VideosSVG from '../Main Menu SVG/VideosSVG';
import AboutSVG from '../Main Menu SVG/AboutSVG';
import '../../../styles/asidemenu.css';

const MainMenuContainer = () => {
  const [hover, setHover] = useState({
    browse: false,
    merlion: false,
    videos: false,
    blog: false,
    about: false,
  });

  const hoverHandler = (menuSVG) => {
    if (menuSVG === 'merlion') {
      setHover({ merlion: !hover.merlion });
    }

    if (menuSVG === 'videos') {
      setHover({ videos: !hover.videos });
    }

    if (menuSVG === 'blog') {
      setHover({ blog: !hover.blog });
    }

    if (menuSVG === 'about') {
      setHover({ about: !hover.about });
    }
  };
  return (
    <section className="main-menu">
      <nav>
        <ul>
          <li className="ative-main-menu">
            <div className="browse-icon">
              <BrowseSVG fill={'#ffffff '} />
            </div>
            <p>Browse</p>
          </li>
          <li
            onMouseEnter={() => {
              hoverHandler('merlion');
            }}
            onMouseLeave={() => {
              hoverHandler('merlion');
            }}
          >
            <div className="melion-icon">
              <MerlionSVG fill={hover.merlion ? '#ffffff' : '#8298a0'} />
            </div>
            <p>Suggest Attraction</p>
          </li>
          <li
            onMouseEnter={() => {
              hoverHandler('videos');
            }}
            onMouseLeave={() => {
              hoverHandler('videos');
            }}
          >
            <div className="videos-icon">
              <VideosSVG fill={hover.videos ? '#ffffff' : '#8298a0'} />
            </div>
            <p>Videos</p>
          </li>
          <li
            onMouseEnter={() => {
              hoverHandler('blog');
            }}
            onMouseLeave={() => {
              hoverHandler('blog');
            }}
          >
            <div className="blog-icon">
              <BlogSVG fill={hover.blog ? '#ffffff' : '#8298a0'} />
            </div>
            <p>Blog</p>
          </li>
          <li
            onMouseEnter={() => {
              hoverHandler('about');
            }}
            onMouseLeave={() => {
              hoverHandler('about');
            }}
          >
            <div className="about-icon">
              <AboutSVG fill={hover.about ? '#ffffff' : '#8298a0'} />
            </div>
            <p>About</p>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainMenuContainer;
