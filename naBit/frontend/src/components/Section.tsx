import React from 'react'
import { Box, Stack } from '@mui/material'
import SectionTitle from './Titles'
import Badge from './Badges'
import { VerticalCard, WideCard } from './Cards'

export function FlexSection(props: any) {
  let title = props.title as string
  return (
    <Stack
      sx={{
        flex: '1 0 40px',
        bgcolor: 'background.default',
        boxShadow: 4,
        zIndex: 10,
        position: 'relative',
        '&:hover': { flex: '1 0 calc(100% - 120px - 40px)' }
      }}
    >
      <SectionTitle title={title} />
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          top: 0,
          margin: '60px 40px',
          height: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          overflow: 'hidden'
        }}
      >
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </Box>
    </Stack>
  )
}

export function MainSection(props: any) {
  let title = props.title as string
  return (
    <Stack sx={{ flex: '0 1 100%' }}>
      <Box
        sx={{
          minHeight: '80px',
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px 0 40px'
        }}
      >
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </Box>
      <Box sx={{ height: '100%', bgcolor: 'background.paper', position: 'relative' }}>
        <SectionTitle title={title} />
        {/* TO DO: SINGLE COMPONENT */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            top: 0,
            margin: '60px 40px',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
          }}
        >
          <WideCard />
          <WideCard />
          <WideCard />
          <WideCard />
        </Box>
      </Box>
    </Stack>
  )
}
