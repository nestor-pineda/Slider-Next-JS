import React from "react";
import NextLink from "next/link";
import css from "./Link.module.scss";

/**
 * Link component
 */
const Link = ({ children, style, link }) => {
  let classes = css.link;
  if (style === "button") {
    classes = `${css.link} ${css.button} ${css.buttonGreen} ${
      link.big ? css.buttonBig : ""
    }`;
  } else if (style === "buttonOutlined") {
    classes = `${css.link} ${css.button} ${css.buttonMain}`;
  }

  const label = children ? children : link.label;

  if (link.type === "internal") {
    return (
      <NextLink href={link.path}>
        <a className={classes}>{label}</a>
      </NextLink>
    );
  } else {
    if (link.target_blank) {
      return (
        <a className={classes} href={link.url} rel="noopener" target="_blank">
          {label}
        </a>
      );
    } else {
      return (
        <a className={classes} href={link.url}>
          {label}
        </a>
      );
    }
  }
};
Link.defaultProps = {
  style: "link",
};

Link.propTypes = {};

export default Link;
