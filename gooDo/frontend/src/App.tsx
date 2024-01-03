import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { DOMAIN } from './utils/environment'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'aliceblue',
  width: '100vw',
  fontSize: '1.5rem',
  borderRadius: 0
}))

async function callApi() {
  try {
    const request = await axios.get(`${DOMAIN}/inputs`, {
      params: {
        name: 'Foo'
      }
    })
    console.log(request)
    console.log(DOMAIN)
  } catch (error) {
    console.log(error)
  }
}

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} gridRow={3} height='100vh'>
        <Item style={{ height: '20%' }}>HEADER</Item>
        <Item
          style={{
            height: '70%',
            flexDirection: 'column',
            display: 'flex'
          }}
        >
          BODY
          <Item style={{ display: 'flex', flexDirection: 'row' }}>
            <Card variant='outlined' style={{ aspectRatio: 1, width: '5rem' }}>
              <Typography>Done</Typography>
            </Card>
            <Card variant='outlined' style={{ aspectRatio: 1, width: '5rem' }}>
              <Typography>ToDo</Typography>
            </Card>

            <Card variant='outlined' style={{ aspectRatio: 1, width: '5rem' }}>
              <Typography>Total</Typography>
            </Card>
          </Item>
          <>
            <Item>
              <Button variant='contained' onClick={callApi}>
                Done
              </Button>
              <TextField label='Write and create' variant='outlined' />
            </Item>
            <Item>
              <Button variant='outlined'>Todo</Button>
              <TextField label='Write and create' variant='outlined' />
            </Item>
          </>
        </Item>
        <Item style={{ height: '10%' }}>FOOTER</Item>
      </Grid>
    </Box>
  )
}

export default App
