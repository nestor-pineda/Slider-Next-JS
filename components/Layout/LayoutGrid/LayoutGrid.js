import React from "react";
import css from "./LayoutGrid.module.scss";
import PropTypes from "prop-types";

const Container = ({children, fluid}) => {
    if (fluid) {
        return <div className={css.containerFluid}>{children}</div>;
    } else {
        return <div className={css.container}>{children}</div>;
    }
};

Container.defaultProps = {
    fluid: false,
};

Container.propTypes = {
    fluid: PropTypes.bool,
};

const Row = ({children, justifyContent, alignItems, gapSize}) => {
    const style = {
        justifyContent: justifyContent,
        alignItems: alignItems,
    };
    return (
        <div className={css.row} data-gapsize={gapSize} style={style}>
            {children}
        </div>
    );
};

Row.defaultProps = {
    gapSize: "normal",
    justifyContent: "flex-start",
    alignItems: "initial",
};

Row.propTypes = {
    gapSize: PropTypes.oneOf(["small", "medium", "normal"]),
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "space-between",
        "space-around",
        "center",
    ]),
    alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "initial"]),
};

const Col = ({
                 xs,
                 sm,
                 md,
                 lg,
                 xl,
                 orderXs,
                 orderSm,
                 orderMd,
                 orderLg,
                 orderXl,
                 flex,
                 noPaddingRight,
                 noPaddingLeft,
                 children,
             }) => {
    let colxs = css["col" + xs];
    let colsm = "";
    if (sm !== "") {
        colsm = " " + css["colSM" + sm];
    }
    let colmd = "";
    if (md !== "") {
        colmd = " " + css["colMD" + md];
    }
    let collg = "";
    if (lg !== "") {
        collg = " " + css["colLG" + lg];
    }
    let colxl = "";
    if (xl !== "") {
        colxl = " " + css["colXL" + xl];
    }
    let colorderxs = "";
    if (orderXs !== "") {
        colorderxs = " " + css["orderXS" + orderXs];
    }
    let colordersm = "";
    if (orderSm !== "") {
        colordersm = " " + css["orderSM" + orderSm];
    }
    let colordermd = "";
    if (orderMd !== "") {
        colordermd = " " + css["orderMD" + orderMd];
    }
    let colorderlg = "";
    if (orderLg !== "") {
        colorderlg = " " + css["orderLG" + orderLg];
    }
    let colorderxl = "";
    if (orderXl !== "") {
        colorderxl = " " + css["orderXL" + orderXl];
    }

    let isFlex = "";
    if (flex) {
        isFlex = " " + css.colDisplayFlex;
    }
    let hasNoPaddingLeft = "";
    if (noPaddingLeft) {
        hasNoPaddingLeft = " " + css.colNoPaddingLeft;
    }
    let hasNoPaddingRight = "";
    if (noPaddingRight) {
        hasNoPaddingRight = " " + css.colNoPaddingRight;
    }

    let classes = `${colxs}${colsm}${colmd}${collg}${colxl}${colorderxs}${colordersm}${colordermd}${colorderlg}${colorderxl}${isFlex}${hasNoPaddingLeft}${hasNoPaddingRight}`;

    return <div className={classes}>{children}</div>;
};

Col.defaultProps = {
    xs: 12,
    sm: "",
    md: "",
    lg: "",
    xl: "",
    orderXs: "",
    orderSm: "",
    orderMd: "",
    orderLg: "",
    orderXl: "",
    flex: false,
    noPaddingRight: false,
    noPaddingLeft: false,
};

Col.propTypes = {
    xs: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
    sm: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
    md: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
    lg: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
    xl: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
    flex: PropTypes.bool,
    noPaddingRight: PropTypes.bool,
    noPaddingLeft: PropTypes.bool,
};

const HiddenSmDown = ({children}) => {
    return (
        <span className={`${css.hiddenSm} ${css.hiddenXs} ${css.hiddenXxs}`}>
      {children}
    </span>
    );
};

const HiddenMdDown = ({children}) => {
    return (
        <span
            className={`${css.hiddenMd} ${css.hiddenSm} ${css.hiddenXs} ${css.hiddenXxs}`}
        >
      {children}
    </span>
    );
};

const HiddenMdUp = ({children}) => {
    return (
        <span className={`${css.hiddenMd} ${css.hiddenLg} ${css.hiddenXl}`}>
      {children}
    </span>
    );
};

const HiddenLgUp = ({children}) => {
    return (
        <span className={`${css.hiddenLg} ${css.hiddenXl}`}>
      {children}
    </span>
    );
};
export {Container, Row, Col, HiddenSmDown, HiddenMdUp, HiddenLgUp, HiddenMdDown};
