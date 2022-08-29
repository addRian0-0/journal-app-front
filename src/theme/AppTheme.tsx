import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme';

type Props = { children: JSX.Element }

export default function AppTheme({ children }: Props) {
  return (
    <>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}
