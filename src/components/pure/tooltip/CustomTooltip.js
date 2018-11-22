import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.common.white,
    color: '#000',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    whiteSpace: 'pre-line'
  }
});

const CustomTooltip = ({children, toolText, classes, ...props}) =>
  <div>
    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={toolText} classes={{ tooltip: classes.lightTooltip }}>
      {children}
    </Tooltip>
  </div>
;

export default withStyles(styles, { withTheme: true })(CustomTooltip);