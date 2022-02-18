import { CircularProgress } from '@material-ui/core'
import { FC } from "react"
import { useSpinerStyles } from './Spiner.styles'

const Spiner: FC = () => 
{
  const classes = useSpinerStyles()
  return (
    <CircularProgress className={classes.circularProgress} size={40}/>
  )
}

export default Spiner