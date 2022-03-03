import React from "react";
import { useSelector } from "react-redux";
import "./about.scss";
import about_1x from "../../assets/images/about-1x.png";
import about_2x from "../../assets/images/about-2x.png";
import about_3x from "../../assets/images/about-3x.png";
import about_4x from "../../assets/images/about-4x.png";
const About = () => {
  const { section_about } = useSelector((state) => state.makadi.content);

  return (
    <section className="section-about">
      <div className="section-about__img-box">
        {/* I use picture tag to enhance responsive images as we could display a whole new image depending on media query (art direction)
        and display the image depending on the screen resolution that the browser detects automatically (density switching) by using srcSet attribute
        1x uses 1pixel for every pixel in image and 2x uses 2pixels for each pixel in image which is high resolution and size and need high screen resolution
         to display images in such quality  */}

        <picture className="section-about__img">
          <source
            srcSet={`
              ${about_1x} 1x,
              ${about_2x} 2x
            `}
            media="(max-width:37.5em)"
          />
          <img
            srcSet={`${about_3x} 1x ,${about_4x} 2x`}
            alt="happy couples"
            className="section-about__img"
            src={about_2x}
          />
        </picture>
      </div>
      <div className="section-about__content">
        {/* u-mb-md this class is in base/utilities file at sass folder as I implement all the common used styles in one place to be easy when I want to make any changes 
         and it makes my work easy in responsive design
         */}

        {/* heading-primary and site-description classes are in base/typography file at sass folder as I implement all the content styles in one place to be easy when I want to make 
         any changes and it makes my work easy in responsive design
         */}
        {/* I make the title here in h1 tag not a div or any other tag to follow semantic element design pattern to enhance SEO as search engines crawlers and spiders are 
         are so sensitive to the tags and h1 tag stands for the website main goal
         */}
        <h1 className="heading-primary u-mb-md">
          <span className="heading-primary--main">
            {section_about?.header?.split(",")[0]}
          </span>
          <span className="heading-primary--sub">
            {section_about?.header?.split(",")[1]}
          </span>
        </h1>
        <p className="site-description u-mb-md">{section_about?.text}</p>
        <div className="section-about__cta">
          {/* btn this class is in components/btn file at sass folder as I implement all the common used styles in one place to be easy when I want to make any changes 
         and it makes my work easy in responsive design
         */}
          <button className="btn btn--about"> <span className="btn__text" > download brochure</span></button>
          <button className="btn btn--about"><span className="btn__text" >show master plan</span></button>
        </div>
      </div>
    </section>
  );
};

export default About;
