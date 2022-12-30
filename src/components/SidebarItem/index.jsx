import { ListItemButton, ListItemIcon } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import config from "../../configs"

const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState)

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: config.colorConfig.sidebar.hoverBg,
        },
        backgroundColor:
          appState === item.state
            ? config.colorConfig.sidebar.activeBg
            : "unset",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: config.colorConfig.sidebar.color,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null
}

export default SidebarItem
