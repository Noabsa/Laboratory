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
        flex: '1 0 60px',
        bgcolor: 'background.paper',
        boxShadow: 5,
        zIndex: 10,
        position: 'relative',
        '&:hover': { flex: '1 0 calc(100% - 150px - 60px)' }
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
          minHeight: '90px',
          bgcolor: 'grey.100',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px'
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
