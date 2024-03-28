import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box
      sx={{
        height: '80px',
        bgcolor: 'grey.200',
        boxShadow: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px 0 40px'
      }}
    >
      <Typography fontSize={'2.60rem'} color={'text.primary'}>
        NaBit
      </Typography>
      <Avatar sx={{ height: '43px', width: '43px', bgcolor: 'grey.300' }}></Avatar>
    </Box>
  )
}
export default Header
