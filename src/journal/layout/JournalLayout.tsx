import { Box } from '@mui/system'
import Navbar from '../components/Navbar'
import { Sidebar } from '../components'
import { Toolbar } from '@mui/material'
import { Props } from '../../types/PropsDefault'

const drawerWidth = 280

export default function JournalLayout ({ children }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
