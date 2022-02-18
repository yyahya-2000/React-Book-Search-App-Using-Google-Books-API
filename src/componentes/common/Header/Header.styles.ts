import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = makeStyles({
  root: {
    backgroundImage: 'url(https://queencitypride.ca/wp-content/uploads/2018/03/QCP18-Google-Form-Header.jpg)',
    backgroundSize: "cover",
    textAlign: "center",
    '& h1': {
      color: "white",
      padding: '10px 0',
      margin: 0
    }
  },
  container: {
    backdropFilter: "grayscale(50%)",
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoRows: 'minmax(fit-containt, auto)',
    gap: '10px',
    width: "80%",
    margin: '0 auto',
    paddingBottom: 25,
    '&>div:first-of-type': {
      gridColumn: 'auto / span 2',
    }
    },
  textfield: {
    "& .MuiFormControl-root": {
      background: 'white',
      width: "100%"
    }
  }
});