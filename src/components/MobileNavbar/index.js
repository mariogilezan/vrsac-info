import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import NavLink from "../NavLink"
import SocialIcons from "../SocialIcons"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#020404",
  },
  paper: {
    background: "#020404",
  },
})

export default function MobileNavbar() {
  const { menuLinks } = useSiteMetadata()
  const classes = useStyles()
  const anchorDirection = "right"
  const [isOpen, setIsOpen] = useState(false)

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
    <div
      className={clsx(classes.list)}
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
      <Divider />
      <SocialIcons />
    </div>
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
        classes={{ paper: classes.paper }}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}
