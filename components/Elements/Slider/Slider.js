import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import * as gtag from "../../../lib/gtag";

const Slider = ({ content, titles }) => {
  // console.log(content);

  const [text, setText] = useState(content[0].content.rendered);
  const [author, setAuthor] = useState(content[0].title.rendered);
  const [title, setTitle] = useState(titles[0].title);
  const [index, setIndex] = useState(1);

  /* This handler functions increse and decrese the slider index by one eache time we click. The index is passed to the text, author, and title states to iterate the data in the array. */

  let handleIncreaseIndex = () => {
    let increseIndex = index + 1;
    setIndex(increseIndex);
    if (index > 5) {
      setIndex(4);
    }
    let testimonialsSlider = content[index].content.rendered;
    setText(testimonialsSlider);
    let testimonialAuthor = content[index].title.rendered;
    setAuthor(testimonialAuthor);
    let testimonialTitle = titles[index].title;
    setTitle(testimonialTitle);
  };

  let handleDecreaseIndex = () => {
    let increseIndex = index - 1;
    setIndex(increseIndex);
    if (index <= 0) {
      setIndex(0);
    }
    let testimonialsSlider = content[index].content.rendered;
    setText(testimonialsSlider);
    let testimonialAuthor = content[index].title.rendered;
    setAuthor(testimonialAuthor);
    let testimonialTitle = titles[index].title;
    setTitle(testimonialTitle);
  };

  console.log(`the index is: ${index}`);

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
              handleDecreaseIndex();
              prevClicked();
            }}
            className={css.arrow}
          >
            <BsChevronLeft />
          </p>
          <p
            onClick={() => {
              handleIncreaseIndex();
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
