import React from 'react'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'

const colors = {
  primary: { main: '#78decc', dark: '#00755e', light: '#c4fcf0' },
  accent: { light: '#ffbe98', dark: '#c45259', main: '#c4525960' },
  grey: { light: '#f5f5f5', dark: '#cccccc', main: '#000000' },
  basics: { white: '#ffffff', black: '#000000' }
}
let theme = createTheme({
  palette: {
    mode: 'light',
    background: { paper: colors.basics.white, default: colors.grey.light },
    divider: '#cccccc',
    primary: {
      dark: colors.primary.dark,
      light: colors.primary.light,
      main: colors.primary.main,
      contrastText: colors.basics.black
    },
    secondary: { dark: '#c45259', light: '#ffbe98', main: '#c4525950', contrastText: '000000' },
    success: { dark: '#00755e', light: '#00755e', main: '#00755e', contrastText: '000000' }
  },
  shadows: [
    'none',
    //Elevation #1
    `0px 2px 1px -1px ${colors.primary.dark}, 0px 1px 1px 0px ${colors.primary.dark}, 0px 1px 3px 0px ${colors.primary.dark}`,
    //Elevation #2
    `0px 3px 1px -20px ${colors.primary.dark}, 0px 2px 20px -5px  ${colors.primary.dark}, 0px 1px 5px 0px ${colors.primary.dark}`,
    //Elevation #3
    '0px 3px 3px -2px rgba(0,0,0,.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    //Elevation #4
    '0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    //Elevation #5
    '0px 3px 5px -1px rgba(0,0,0,.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    //Elevation #6
    '0px 3px 5px -1px rgba(0,0,0,.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    //Elevation #7
    '0px 4px 5px -2px rgba(0,0,0,.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 0px rgba(0,0,0,0.12)',
    //Elevation #8
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    //Elevation #9
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    //Elevation #10
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    //Elevation #11
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    //Elevation #12
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    //Elevation #13
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    //Elevation #14
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    //Elevation #15
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    //Elevation #16
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    //Elevation #17
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    //Elevation #18
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    //Elevation #19
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    //Elevation #20
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    //Elevation #21
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    //Elevation #22
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    //Elevation #23
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    //Elevation #24
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  ]
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* header */}
        <Box sx={{ height: '40px', position: 'sticky', bgcolor: 'primary.main', boxShadow: 1 }}></Box>
        {/* body */}
        <Box sx={{ height: '100%', width: '100%', bgcolor: 'success.dark', display: 'flex', flexDirection: 'column' }}>
          <Stack
            sx={{
              flex: '0 1 calc(100% - 80px)'
            }}
          >
            <Box sx={{ minHeight: '80px', bgcolor: 'primary.dark' }}></Box>
            <Box sx={{ height: '100%', bgcolor: 'background.paper' }}></Box>
          </Stack>
          <Stack
            sx={{
              flex: '1 0 40px',
              bgcolor: 'secondary.light',
              '&:hover': { flex: '1 0 calc(100% - 160px)' }
            }}
          ></Stack>
          <Stack
            sx={{
              flex: '1 0 40px',
              bgcolor: 'secondary.dark',
              '&:hover': { flex: '1 0 calc(100% - 160px)' }
            }}
          ></Stack>
        </Box>
        {/* footer */}
        <Box sx={{ height: '120px', bgcolor: 'primary.main', boxShadow: 2 }}></Box>
      </Box>
    </ThemeProvider>
  )
}
export default App
