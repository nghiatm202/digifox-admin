import { Outlet } from "react-router-dom"
import { Box, Toolbar } from "@mui/material"
import { Sidebar, Topbar } from "../../components"
import config from "../../configs"

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: config.sizeConfig.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${config.sizeConfig.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: config.colorConfig.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
