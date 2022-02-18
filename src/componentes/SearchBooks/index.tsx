import { FC, useState } from 'react';
import { booksService } from '../../services/books/books.service';
import BookCard from './BookCard';
import { useBooksListStyles } from './BooksList.styles';
import { observer } from 'mobx-react-lite'
import { Box, Button, Grid } from '@material-ui/core';
import SmoothList from 'react-smooth-list';
import Spiner from '../common/Spiner';


const SearchPage: FC = () => {
  const classes = useBooksListStyles();
  const {books, loading, total, thereIsMore} = booksService;
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page + 1);
    booksService.fetchBooksPaging(page);
  }
  
  return(
    <Grid>
      {total > 0 && <h3 className={classes.resultCount}>Found {total + (total > 1 ? ' books' : ' book')} </h3>}
      <SmoothList>
        <Grid className={classes.container}>
          {books.map(element=> 
            <BookCard key={element.id} id={element.id} imageUrl={element.imageUrl} categories={element.categories} title={element.title} authors={element.authors}/>
          )}      
        </Grid>
      </SmoothList>
      <Box display={'grid'} justifyContent={'center'} padding={'0 16px 16px 0'}>
        {loading && <Spiner />}
        {thereIsMore && !loading && <Button className={classes.loadBtn} onClick={()=>handlePageChange()} variant="outlined">More</Button>}
      </Box>
    </Grid>
  )
}

export default observer(SearchPage);