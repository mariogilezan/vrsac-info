import React, { useState } from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import NavLink from "../NavLink"
import SocialIcons from "../SocialIcons"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const customStyles = {
  list: {
    width: 250,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#020404",
  },
  divider: {
    width: "100%",
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
}

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { menuLinks } = useSiteMetadata()
  const anchorDirection = "right"

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setIsOpen(open)
  }

  const list = () => (
    <Box
      sx={customStyles.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuLinks.map(link => (
          <ListItem key={link.name}>
            <NavLink to={link.slug}>{link.name}</NavLink>
          </ListItem>
        ))}
      </List>
      <Divider sx={customStyles.divider} />
      <SocialIcons />
    </Box>
  )

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={anchorDirection}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}
