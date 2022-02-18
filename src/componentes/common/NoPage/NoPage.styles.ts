import { makeStyles } from '@material-ui/core';

export const useNoPageStyle = makeStyles({
  container: {
    position: 'absolute',
    backgroundColor: '#1C2326',
    color: 'white',
    width: '100%',
    height:'100%',
    padding: '5% 8%'
  },
  head: {
    width:500,
    fontSize: 24, 
    fontWeight: 400
  },
  headSecondary: {
    width:400, 
    fontSize: 150, 
    color: ' rgb(90 11 11)', 
    fontWeight: 700
  },
  link: {
    fontSize: 24, 
    color: '#26E600', 
    textDecoration:'none'
  }
});