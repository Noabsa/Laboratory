import React from 'react'
import { Box, Stack } from '@mui/material'
import { size } from '../utils/constants'
import SectionTitle from './Titles'
import Badge from './Badges'
const { xs, md } = size

export function FlexSection(props: any) {
  let title = props.title as string
  return (
    <Stack
      sx={{
        flex: `1 0 ${xs}`,
        bgcolor: 'background.default',
        boxShadow: 4,
        '&:hover': { flex: `1 0 calc(100% - ${md} - ${md})` }
      }}
    >
      <SectionTitle title={title} />
    </Stack>
  )
}

export function MainSection(props: any) {
  let title = props.title as string
  return (
    <Stack sx={{ flex: '0 1 100%' }}>
      <Box
        sx={{
          minHeight: md,
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px 10px 40px'
        }}
      >
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </Box>
      <Box sx={{ height: '100%', bgcolor: 'background.paper' }}>
        <SectionTitle title={title} />
      </Box>
    </Stack>
  )
}
