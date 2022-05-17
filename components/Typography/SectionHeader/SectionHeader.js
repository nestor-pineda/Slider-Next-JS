import React from "react";
import css from "./SectionHeader.module.scss";

/**
 * SectionHeader component
 */
const SectionHeader = ({ children, index, type }) => {
  if (type === "h3") {
    return <h3 className={css.sectionHeader}>{children}</h3>;
  } else if (index === 0) {
    return <h1 className={css.sectionHeader}>{children}</h1>;
  } else {
    return (
      <h2
        className={`${css.sectionHeader} ${
          type === "post" ? css.sectionHeaderPost : ""
        }`}
      >
        {children}
      </h2>
    );
  }
};

SectionHeader.defaultProps = {};

SectionHeader.propTypes = {};

export default SectionHeader;
