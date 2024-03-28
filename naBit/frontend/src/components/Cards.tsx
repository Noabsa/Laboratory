import { Card } from '@mui/material'

export function WideCard() {
  return (
    <Card
      sx={{
        height: '120px',
        width: '200px',
        margin: '20px 10px',
        bgcolor: 'primary.main',
        boxShadow: 5
      }}
    ></Card>
  )
}

export function VerticalCard() {
  return (
    <Card
      sx={{
        width: '120px',
        height: '200px',
        margin: '20px 10px',
        bgcolor: 'primary.main',
        boxShadow: 5,
        overflow: 'hidden'
      }}
    ></Card>
  )
}
