import React from "react";
import styles from "./withHideActions.module.scss";
export const withHideActions = (Comp) => ({
  hideMobile,
  hideDesktop,
  className,
  ...rest
}) => {
  const nClassName = `
      ${!!className ? className : ""} 
      ${!!hideDesktop ? styles.hideDesktop : ""} 
      ${!!hideMobile ? styles.hideMobile : ""}
    `.trim();
  return <Comp {...rest} className={nClassName} />;
};

export default withHideActions;
