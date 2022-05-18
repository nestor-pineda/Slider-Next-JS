import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import * as gtag from "../../../lib/gtag";

const Slider = ({ content, titles }) => {
  const [text, setText] = useState(content[0].content.rendered);
  const [author, setAuthor] = useState(content[0].title.rendered);
  const [title, setTitle] = useState(titles[0].title);
  const [slideIndex, setSlideIndex] = useState(1);

  /* This handler functions increse and decrese the slider slideIndex by one eache time we click. The slideIndex is passed to the text, author, and title states to iterate the data in the array. */

  let IncreaseSlideIndex = () => {
    if (slideIndex !== content.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === content.length - 1) {
      setSlideIndex(1);
    }

    let testimonialsSlider = content[slideIndex].content.rendered;
    setText(testimonialsSlider);
    let testimonialAuthor = content[slideIndex].title.rendered;
    setAuthor(testimonialAuthor);
    let testimonialTitle = titles[slideIndex].title;
    setTitle(testimonialTitle);

    console.log(content[slideIndex]);
  };

  let decreaseSlideIndex = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(content.length - 1);
    }
    let testimonialsSlider = content[slideIndex].content.rendered;
    setText(testimonialsSlider);
    let testimonialAuthor = content[slideIndex].title.rendered;
    setAuthor(testimonialAuthor);
    let testimonialTitle = titles[slideIndex].title;
    setTitle(testimonialTitle);
    console.log(content[slideIndex]);
  };

  console.log(`the slideIndex is: ${slideIndex}`);

  const nextClicked = () => {
    gtag.event({
      action: "nextClicked",
      category: "slider",
      lable: "next post",
    });
  };

  const prevClicked = () => {
    gtag.event({
      action: "prevClicked",
      category: "slider",
      lable: "next post",
    });
  };

  return (
    <div className={css.slider}>
      <div className={css.title}>
        <h1>{title}</h1>
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
          <p
            onClick={() => {
              decreaseSlideIndex();
              prevClicked();
            }}
            className={css.arrow}
          >
            <BsChevronLeft />
          </p>
          <p
            onClick={() => {
              IncreaseSlideIndex();
              nextClicked();
            }}
            className={css.arrow}
          >
            <BsChevronRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
