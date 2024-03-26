import { Card } from '@mui/material'
import { size } from '../utils/constants'

const { s } = size

function Badge() {
  return (
    <Card
      sx={{
        height: s,
        aspectRatio: 1,
        borderRadius: '50%',
        margin: '0 20px 0 0',
        bgcolor: 'secondary.dark',
        boxShadow: 5
      }}
    ></Card>
  )
}

export default Badge
