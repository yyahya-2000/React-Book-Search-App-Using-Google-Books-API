import { makeStyles, Theme } from '@material-ui/core';

export const useBooksListStyles = makeStyles((theme: Theme)=>({
 container: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '10px',
  padding: '1em',
 },
 resultCount: {
  textAlign: 'center',
  color: 'white'
 },
 loadBtn:{
  borderRadius: 0,
  color: theme.palette.success.light,
  borderColor: theme.palette.success.light
 }
}));