import { makeStyles } from '@material-ui/core';

export const useBookCardStyles = makeStyles({
  root: {
    position: "relative",
    color: '#e9e6e6',
    backgroundColor: 'rgba(255, 255, 255, .15)',
    backdropFilter: 'blur(5px)',
    filter: 'brightness(0.8)',
    "&:hover":{
      filter: 'none'
    },
    "& img": {
      objectFit: 'cover',
      width: '50%',
      display: 'block',
      margin: 'auto',
      paddingTop: '20%',
      marginBottom: '20%',
      height: 'auto'
    }
  },
  categories: {
    textDecorationLine: 'underline'
  }
});