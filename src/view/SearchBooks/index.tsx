import { Grid } from '@material-ui/core';
import { FC } from 'react';
import Header from '../../componentes/common/Header';
import SearchPage from '../../componentes/SearchBooks';

const SearchBooks: FC = () => {
  return(
    <Grid style={{background: '#1C2326', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', minHeight:'100vh'}}>
      <Header />
      <SearchPage />
    </Grid>
  )
}

export default SearchBooks