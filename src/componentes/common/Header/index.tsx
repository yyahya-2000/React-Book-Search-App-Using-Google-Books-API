import { ChangeEvent, FC, useState } from 'react';
import { useHeaderStyles } from './Header.styles'
import { booksService } from '../../../services/books/books.service';
import { useNavigate } from "react-router-dom";
import { Grid, IconButton, InputAdornment, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const categories = [ 'all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortTypes = [ 'relevance', 'newest'];

const Header: FC = () => {
  const classes = useHeaderStyles();
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState('');
  const [category, setCategory] = useState('all');
  const [sortType, setSortType] = useState('relevance');

  const changeCategory = (event:ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const changeSortType = (event:ChangeEvent<HTMLInputElement>) => {
    setSortType(event.target.value);
  };
  const changeSearchField = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value.trim());
  };
  const runSearch = () => {
    if(!searchField) {
      booksService.cleanBooks();
      return
    }
    navigate('/');
    booksService.fetchAllBooks(searchField, category, sortType);
  };

  return(
    <Grid className={classes.root}>
      <h1>Search for books</h1>
      <Grid className={classes.container}>
        <Grid className={classes.textfield}>
          <TextField id="filled-size-normal" label="Search Google books" variant="filled" value={searchField} type="search" onChange={changeSearchField} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e) => runSearch()}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
            )}} onKeyPress={event => event.key === "Enter" && runSearch()}/>
        </Grid>
        <Grid className={classes.textfield}>
          <TextField
            id="outlined-select-category"
            select
            label="Select category"
            value={category}
            variant="filled"
            onChange={changeCategory}
          >
            {categories.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid className={classes.textfield}>
          <TextField
            id="outlined-select-currency"
            select
            label="Setect sorting type"
            variant="filled"
            value={sortType}
            onChange={changeSortType}
          >
            {sortTypes.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Grid>
    
  )
}

export default Header