import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";

const Slider = ({ content, titles }) => {
  // console.log(content);

  const [text, setText] = useState(content[0].content.rendered);
  const [author, setAuthor] = useState(content[0].title.rendered);
  const [title, setTitle] = useState(titles[0].title);

  const [index, setIndex] = useState(0);

  /* This handler functions increse and decrese the slider index by one eache time we click. The index is passed to the text, author, and title states to iterate the data in the array. */

  let handleIncreaseIndex = () => {
    let increseIndex = index + 1;
    setIndex(increseIndex);
    if (index >= 4) {
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

  // console.log(`the index is: ${index}`);

  return (
    <div className="slider">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <div dangerouslySetInnerHTML={{ __html: author }}></div>
      <p onClick={() => handleIncreaseIndex()} className={css.circle}>
        (+) add
      </p>
      <p onClick={() => handleDecreaseIndex()} className={css.circle}>
        (-) Decrese
      </p>
    </div>
  );
};

export default Slider;
