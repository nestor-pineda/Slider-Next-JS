import React from "react";
import PropTypes from "prop-types";
import css from "./SectionCentered.module.scss";

const SectionCentered = ({children}) => {
  return (
    <section className={css.section}>
      {children}
    </section>
  );
};


export default SectionCentered;
