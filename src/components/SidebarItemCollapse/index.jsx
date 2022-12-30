import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined"
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import config from "../../configs"
import SidebarItem from "../SidebarItem"

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false)

  const { appState } = useSelector((state) => state.appState)

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true)
    }
  }, [appState, item])

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: config.colorConfig.sidebar.hoverBg,
          },
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
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null
}

export default SidebarItemCollapse
