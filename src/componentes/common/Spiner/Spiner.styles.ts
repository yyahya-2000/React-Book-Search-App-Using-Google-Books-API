import { makeStyles, Theme } from '@material-ui/core';

export const useSpinerStyles = makeStyles((theme: Theme) => ({
  circularProgress: {
    color: theme.palette.success.light
  }
}));