import { Theme, makeStyles } from "@material-ui/core";


export const useBookDetailStyles = makeStyles((theme:Theme)=>({
  spinerBox: {
    background: '#1C2326',
    height: '100vh',
    display: 'grid',
    placeItems: 'center'

  },
  container: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    backgroundSize: '100%',
    minHeight: '50vh',
    padding: '30px 5% 30px 5%',
    color: 'white'
  },
  bookCover: {
    height: '80vh',
    width: '40%',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, .15)',
    backdropFilter: 'blur(5px)',
    "& img": {
      marginTop: '10%',
      width: '60%',
      height: '80%',
      boxShadow: '0px 0px 9px 3px rgb(203 197 197 / 63%)',
    },
    [theme.breakpoints.down(960)]: {
      width:"350px",
      height: '60vh',
    }
  },
  categories: {
    textDecorationLine: 'underline'
  },
  bookDesc: {
    padding: 10,
    border: '1px solid #d9d9d9',
    wordWrap: 'break-word',
    textAlign: 'justify'
  },
  previewBtn: {
    border: '1px solid #a9a300 !important',
    color: '#a9a300 !important',
    borderRadius: '0 !important',
    marginTop: '10px !important'
  },
  textContent: {
    paddingLeft: '2rem',
    [theme.breakpoints.down(960)]: {
      paddingLeft: 0
    }
  },
  backHome: {
    borderRadius: 0,
    color: theme.palette.success.light,
    borderColor: theme.palette.success.light,
    marginTop: '16px'
  }
}));