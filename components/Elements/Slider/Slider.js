import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";

const Slider = ({ content }) => {
  // const testimonials = [
  //   { id: 100, name: "Jon", text: "lorem ipsum hehehe" },
  //   { id: 200, name: "Alex", text: "lorem ipsum ueueueueuuee" },
  //   { id: 34, name: "Peter", text: "lorem ipsum jijijijij" },
  //   { id: 152, name: "Face", text: "lorem ipsum hahahahahaha" },
  //   { id: 235, name: "Face", text: "lorem ipsum hahahahahaha" },
  // ];

  console.log(content);

  const [text, setText] = useState(content[0].id);

  let handleClick = (index) => {
    console.log(index);
    let testimonialsSlider = content[index].id;
    setText(testimonialsSlider);
  };

  return (
    <div className="slider">
      <div>{text}</div>
      <div className={css.sliderContainer}>
        {content.map((item, i) => {
          return (
            <h1 key={i} className={css.circle} onClick={() => handleClick(i)}>
              O
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
