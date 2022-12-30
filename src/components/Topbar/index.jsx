import { AppBar, Toolbar, Typography } from "@mui/material"
import config from "../../configs"

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${config.sizeConfig.sidebar.width})`,
        ml: config.sizeConfig.sidebar.width,
        boxShadow: "unset",
        backgroundColor: config.colorConfig.topbar.bg,
        color: config.colorConfig.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h6">React sidebar with dropdown</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
