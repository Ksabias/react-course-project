import React, { ReactNode } from "react";
import "./Default.scss";
import Header from "layouts/Header/Header";

type Props = {
  children: JSX.Element | ReactNode[];
};

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="Default">
        <Header />
        <div className="DefaultWrapper">{children}</div>
      </div>
    </>
  );
};

export default Default;
