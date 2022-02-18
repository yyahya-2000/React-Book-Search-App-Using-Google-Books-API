import { FC } from "react"
import { Link } from 'react-router-dom'
import { useNoPageStyle } from './NoPage.styles'
import { scrollTopPage } from '../../../utils'
import { Box, Grid } from "@material-ui/core"

const NoPage:FC = () => {
  const classes = useNoPageStyle()
  return (
    <Box className={classes.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs>
          <Box className={classes.headSecondary}>404</Box>
          <Box className={classes.head}>
            {'Unfortunately, the page you requested was not found.'}
          </Box>
          <Box pt={'60px'}>
            <Link to={'/'} className={classes.link} onClick={scrollTopPage}>
              &#8592; go-back-home
            </Link>
          </Box>
        </Grid>
      </Grid> 
    </Box>
  )
}

export default NoPage
