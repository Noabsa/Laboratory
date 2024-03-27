import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box
      sx={{
        height: '60px',
        bgcolor: 'primary.main',
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px 0 40px'
      }}
    >
      <Typography variant='h4'>NaBit</Typography>
      <Avatar sx={{ height: '35px', width: '35px' }}></Avatar>
    </Box>
  )
}
export default Header
