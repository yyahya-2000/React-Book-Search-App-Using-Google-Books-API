import { Box, Button, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { FC, Fragment, useEffect } from 'react';
import { booksService } from '../../../services/books/books.service';
import { getUrlAdress } from '../../../utils';
import Header from '../../common/Header';
import { useBookDetailStyles } from './BookDetail.styles';
import HtmlElement from '../../common/HtmlElement';
import Spiner from '../../common/Spiner';

const BookDetail: FC = () => {
  const classes = useBookDetailStyles();
  const {bookDetails, loading} = booksService;
  const url = getUrlAdress(window.location.pathname)
  const id = url[url.length - 1].name
  useEffect(() => {
    if (id === null) return;
    if (bookDetails.id !== id) {
      booksService.fetchBookDetail(id);
      return;
    }
  },[bookDetails, id]);
  useEffect(()=>{
    return function cleanupPage() {
      booksService.cleanDetail();
    }
  },[])

  if (loading) {
    return (
    <Fragment>
      <Header/>
      <Box className={classes.spinerBox}>
        <Spiner />
      </Box> 
    </Fragment>
  )}

  return(
    <Box style={{background: '#1C2326'}}>
      <Header />
      <Box className={classes.container}>
        <Grid container justifyContent={'center'}>
          <Grid className={classes.bookCover} item md={4}>
            <img src={bookDetails.imageUrl} alt={bookDetails.title} />
            <p>{bookDetails.pageCount} pages</p>
          </Grid>
          <Grid className={classes.textContent} item md={8}>
            {bookDetails.categories && <p className={classes.categories}>{bookDetails.categories?.join(', ')}</p>}
            <h2>
              {bookDetails.title}
            </h2>
            {bookDetails.authors && <p>{bookDetails.authors?.join(', ')}</p>}
            {bookDetails.publishedDate && <p>Published in {bookDetails.publishedDate}</p>}
            {bookDetails.description && <HtmlElement component="div" classes={classes.bookDesc} html={bookDetails.description} />}
            <Button className={classes.previewBtn} href={bookDetails.previewLink} target="_blank">Preview on Google</Button>
            <Grid><Button onClick={(e)=>window.history.back()} className={classes.backHome} variant="outlined">&#8592; back home</Button></Grid>
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default observer(BookDetail);