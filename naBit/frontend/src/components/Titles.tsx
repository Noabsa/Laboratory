import React from 'react'
import { Typography } from '@mui/material'

function SectionTitle(props: any) {
  let title = props.title as string
  return <Typography margin={'8px 0 0 40px'}>{title}</Typography>
}
export default SectionTitle
