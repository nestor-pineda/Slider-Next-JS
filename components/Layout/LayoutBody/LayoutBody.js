import React from "react";
import css from "./LayoutBody.module.scss";
import { useRouter } from "next/router";

/**
 * LayoutBody component
 */
const LayoutBody = ({ children, seo }) => {
  const router = useRouter();
  const getPathFromUrl = (url) => url.split(/[?#]/)[0];
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

  return (
    <div className={css.layoutBody}>
      <main className={css.layoutBody__content}>{children}</main>
    </div>
  );
};

LayoutBody.defaultProps = {};

LayoutBody.propTypes = {};

export default LayoutBody;
