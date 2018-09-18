import React from "react";

import DenseAppBar from "./Components/DenseAppBar";
import PaperSheet from "./Components/PaperSheet";

import CssBaseline from "@material-ui/core/CssBaseline";

export default () => (
  <div>
    <CssBaseline />
    <DenseAppBar />
    <PaperSheet text="Initial React Project is a repository to facilitate the start of a new project with <strong>React.js</strong>" />
  </div>
);
