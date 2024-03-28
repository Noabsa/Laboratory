import { Card } from '@mui/material'

function Badge() {
  return (
    <Card
      sx={{
        height: '55px',
        aspectRatio: 1,
        borderRadius: '100%',
        margin: '0 20px 0 0',
        bgcolor: 'primary.dark',
        boxShadow: 3
      }}
    ></Card>
  )
}

export default Badge
