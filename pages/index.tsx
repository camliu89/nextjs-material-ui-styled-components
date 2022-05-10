import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import styled from 'styled-components'

const StyledHome = styled(Container)`
  background-color: red;
`

const Home: NextPage = () => {
  return (
    <StyledHome maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button variant="contained">Click on me</Button>
      </Box>
    </StyledHome>
  )
}

export default Home
