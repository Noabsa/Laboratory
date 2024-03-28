import React from 'react'
import { Typography } from '@mui/material'

function SectionTitle(props: any) {
  let title = props.title as string
  return (
    <Typography variant='h5' margin={'15px 0 0 40px'} color={'text.primary'}>
      {title}
    </Typography>
  )
}
export default SectionTitle
