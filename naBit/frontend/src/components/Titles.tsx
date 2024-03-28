import React from 'react'
import { Typography } from '@mui/material'

function SectionTitle(props: any) {
  let title = props.title as string
  return (
    <Typography
      variant='h5'
      margin={'15px 0 0 40px'}
      color={'text.secondary'}
      sx={{ textShadow: '0px 0px 0.5px #1B262C' }}
    >
      {title}
    </Typography>
  )
}
export default SectionTitle
