import Box from '@mui/material/Box'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        {/* <Content /> */}
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default App