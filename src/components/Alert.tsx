import React, { ReactNode } from "react";

interface Props {
  //   children: ReactNode;
  isShow: boolean;
  children: string;
  hideAlert: () => void;
}

const Alert = ({ isShow, children, hideAlert }: Props) => {
  return (
    <div
      className={
        isShow
          ? "alert alert-warning alert-dismissible show"
          : "alert alert-warning alert-dismissible fade"
      }
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={hideAlert}
      ></button>
    </div>
  );
};

export default Alert;
