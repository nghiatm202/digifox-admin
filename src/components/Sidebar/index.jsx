import { Drawer, List } from "@mui/material"
import config from "../../configs"
import appRoutes from "../../routes/appRoutes"
import SidebarItem from "../SidebarItem"
import SidebarItemCollapse from "../SidebarItemCollapse"

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: config.sizeConfig.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: config.sizeConfig.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: config.colorConfig.sidebar.bg,
          color: config.colorConfig.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  )
}

export default Sidebar
