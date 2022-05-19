import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import * as gtag from "../../../lib/gtag";

/* We merge both arrays to a single array, the data fetched and the hard coded titels to latter handle the iformation form a single source */
const Slider = ({ content, titles }) => {
  const contentWithTitle = content.map((t1) => ({
    ...t1,
    ...titles.find((t2) => t2.id === t1.id),
  }));

  /* States to set the contnet of each slide deppending on the index */
  const [text, setText] = useState(contentWithTitle[0].content.rendered);
  const [author, setAuthor] = useState(contentWithTitle[0].title.rendered);
  const [title, setTitle] = useState(contentWithTitle[0].mainTitle);
  const [slideIndex, setSlideIndex] = useState(1);

  let testimonialsSlider = contentWithTitle[slideIndex].content.rendered;
  let testimonialAuthor = contentWithTitle[slideIndex].title.rendered;
  let testimonialTitle = contentWithTitle[slideIndex].mainTitle;

  /* Handler function that increse the slider "slideIndex" state by one eache time we click.*/
  let IncreaseSlideIndex = () => {
    if (slideIndex !== contentWithTitle.length - 1) {
      setSlideIndex(slideIndex + 1);
    }

    setText(testimonialsSlider);
    setAuthor(testimonialAuthor);
    setTitle(testimonialTitle);
  };

  /* Handler function that decreases the slider "slideIndex" state by one eache time we click.*/
  let decreaseSlideIndex = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }

    setText(testimonialsSlider);
    setAuthor(testimonialAuthor);
    setTitle(testimonialTitle);
  };

  /* GTAG traking functions */
  const nextClickedHandler = () => {
    gtag.event({
      action: "nextClicked",
      category: "slider",
      lable: "next post",
    });
  };

  const prevClickedHandler = () => {
    gtag.event({
      action: "prevClicked",
      category: "slider",
      lable: "next post",
    });
  };

  console.log(slideIndex);

  return (
    <div className={css.slider}>
      <div className={css.title}>
        <h3>{title}</h3>
      </div>
      <div className={css.content}>
        <div
          className={css.testimonialText}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <p
          className={css.testimonialAuthor}
          dangerouslySetInnerHTML={{ __html: author }}
        ></p>
        <div className={css.arrows}>
          <button
            disabled={slideIndex < 1 ? true : false}
            onClick={() => {
              decreaseSlideIndex();
              prevClickedHandler();
            }}
            className={css.arrow}
          >
            <BsChevronLeft />
          </button>

          <button
            disabled={slideIndex === contentWithTitle.length - 1 ? true : false}
            onClick={() => {
              IncreaseSlideIndex();
              nextClickedHandler();
            }}
            className={css.arrow}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
