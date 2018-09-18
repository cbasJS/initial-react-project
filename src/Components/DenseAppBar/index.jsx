import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const propTypes = {
  classes: PropTypes.object.isRequired,
  titleDense: PropTypes.string
};

const defaultProps = {
  titleDense: "Initial React Project"
};

const DenseAppBar = props => {
  const { classes, titleDense } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            classes={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            {titleDense}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

DenseAppBar.propTypes = propTypes;
DenseAppBar.defaultProps = defaultProps;

export default withStyles(() => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
}))(DenseAppBar);
