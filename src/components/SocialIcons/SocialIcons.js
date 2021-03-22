import React from "react"
import { SocialIcon } from "react-social-icons"
import * as styles from "./SocialIcons.module.scss"

export default function SocialIcons() {
  return (
    <div className={styles.wrapper}>
      <SocialIcon
        url="http://facebook.com"
        className={styles.link}
        style={{ width: 35, height: 35, marginRight: "1rem" }}
        fgColor="#fff"
        target="_blank"
      />
      <SocialIcon
        url="http://instagram.com"
        className={styles.link}
        style={{ width: 35, height: 35 }}
        fgColor="#fff"
        bgColor="#d6249f"
        target="_blank"
      />
    </div>
  )
}
