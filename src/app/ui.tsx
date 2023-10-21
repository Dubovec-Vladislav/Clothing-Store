import React, { FC } from "react";
import "./style.scss";
import { withProviders } from "./providers";
import { Routing } from "pages";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Routing />
    </div>
  );
};

export default withProviders(App);
