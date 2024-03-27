import { Card } from '@mui/material'

function Badge() {
  return (
    <Card
      sx={{
        height: '50px',
        aspectRatio: 1,
        borderRadius: '100%',
        margin: '0 20px 0 0',
        bgcolor: 'secondary.dark',
        boxShadow: 5
      }}
    ></Card>
  )
}

export default Badge
