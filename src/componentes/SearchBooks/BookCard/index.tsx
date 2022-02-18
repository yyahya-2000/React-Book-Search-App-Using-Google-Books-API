import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useBookCardStyles } from './BookCard.styles';
import { Link } from 'react-router-dom';
import { BookItem } from '../../../models';


const BookCard: FC<BookItem> = ({id, imageUrl, categories, title, authors }) => {
  const classes = useBookCardStyles();
  return(
      <CardActionArea className={classes.root} component={Link} to={`/books/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography className={classes.categories} variant="body2">
            {categories && categories?.slice(0,1).join(', ') + (categories?.length > 4 ? ', ...' : '')}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 33) + (title.length > 33 ? '...' : '')}
          </Typography>
          <Typography variant="body2">
            {authors && authors?.slice(0,2).join(', ') + (authors?.length > 2 ? ', ...' : '')}
          </Typography>
        </CardContent>
      </CardActionArea>
  )
}

export default BookCard