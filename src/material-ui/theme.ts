import { createTheme } from '@mui/material/styles'
import { blue, green } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue.A700,
    },
    secondary: {
      main: green.A700,
    },
  },
})

export default theme
