import React, { memo } from 'react'
import { Box, makeStyles } from '@material-ui/core'

const homeStyles = makeStyles(() => ({
  underConstructionImage: {
    width: '100%'
  }
}))

const Home = () => {
  const classes = homeStyles()
  return (
    <Box width="100%">
      <img src="/under-construction.png" alt="under-construction" className={classes.underConstructionImage} />
    </Box>
  )
}
export default memo(Home)
