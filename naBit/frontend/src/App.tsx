import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/lightTheme'
import { FlexSection, MainSection } from './components/Section'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          maxHeight: '100vh',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Header />

        {/* body */}
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <MainSection title={'Training Plans'} />
          <FlexSection title={'Challenges'} />
          <FlexSection title={'Programs'} />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  )
}
export default App
