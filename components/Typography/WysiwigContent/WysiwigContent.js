import React from "react";
import css from "./WysiwigContent.module.scss";

/**
 * WysiwigContent component
 */
const WysiwigContent = ({content}) => {
    return (
        <div className={css.wysiwigContent} dangerouslySetInnerHTML={{__html: content}} />
    );
};

WysiwigContent.defaultProps = {};

WysiwigContent.propTypes = {};

export default WysiwigContent;