import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const propTypes = {
  classes: PropTypes.object.isRequired,
  titlePaper: PropTypes.string,
  text: PropTypes.string
};

const defaultProps = {
  titlePaper: "Welcome to Initial React Project",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut beatae, voluptas eum dolorem nobis unde. Totam voluptas sequi hic corporis, nisi maiores facilis, minus molestias itaque earum obcaecati vero!"
};

const PaperSheet = props => {
  const { classes, titlePaper, text } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {titlePaper}
        </Typography>
        <Typography component="p" dangerouslySetInnerHTML={{ __html: text }} />
      </Paper>
    </div>
  );
};

PaperSheet.propTypes = propTypes;
PaperSheet.defaultProps = defaultProps;

export default withStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
}))(PaperSheet);
