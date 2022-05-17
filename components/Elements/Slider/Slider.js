import { useState } from "react";
import "./Slider.module.scss";
import css from "./Slider.module.scss";

const Slider = () => {
  const testimonials = [
    { id: 0, name: "Jon", text: "lorem ipsum hehehe" },
    { id: 1, name: "Alex", text: "lorem ipsum ueueueueuuee" },
    { id: 2, name: "Peter", text: "lorem ipsum jijijijij" },
    { id: 3, name: "Face", text: "lorem ipsum hahahahahaha" },
  ];

  const [text, setText] = useState(testimonials[0].name);

  let handleClick = (index) => {
    console.log(index);
    let testimonialsSlider = testimonials[index].name;
    setText(testimonialsSlider);
  };

  return (
    <div className="slider">
      <div>{text}</div>
      <div className={css.sliderContainer}>
        {testimonials.map((item, i) => {
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
