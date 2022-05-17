import React from "react";
import PropTypes from "prop-types";
import css from "./ButtonGroup.module.scss";

/**
 * ButtonGroup component
 */
const ButtonGroup = ({children, align}) => {
    return (
        <div className={css.buttonGroup} data-align={align}>
          {children}
        </div>
    );
};

ButtonGroup.defaultProps = {
    align:"center"
};

ButtonGroup.propTypes = {
    align:PropTypes.oneOf(["center","left","right"])
};

export default ButtonGroup;