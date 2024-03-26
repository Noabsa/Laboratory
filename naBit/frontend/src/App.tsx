import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { size } from './utils/constants'
import { lightTheme } from './themes/lightTheme'
import { FlexSection, MainSection } from './components/Section'

const { xs, md } = size

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* header */}
        <Box sx={{ height: xs, position: 'sticky', bgcolor: 'primary.main', boxShadow: 3 }}></Box>

        {/* body */}
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <MainSection title={'Main Section Title'} />
          <FlexSection title={'First Section'} />
          <FlexSection title={'Second Section'} />
          <FlexSection title={'Third Section'} />
        </Box>

        {/* footer */}
        <Box sx={{ height: md, bgcolor: 'primary.main', boxShadow: 2 }}></Box>
      </Box>
    </ThemeProvider>
  )
}
export default App
