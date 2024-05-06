import React from "react"
import { navigate, Link } from "gatsby"
import * as styles from "./Pagination.module.scss"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

export default function Pagination({ context }) {
  function changePage(e) {
    navigate(
      e.target.value
        ? `${context.paginationPath}/${e.target.value}`
        : `${context.paginationPath}/`
    )
  }
  return (
    <>
      {context.numberOfPages > 1 && (
        <div className={styles.wrapper}>
          <div className={styles.numbers}>
            {context.humanPageNumber}{" "}
            <select
              className={styles.select}
              value={
                context.humanPageNumber === 1 ? `` : context.humanPageNumber
              }
              onChange={changePage}
            >
              {Array.from({ length: context.numberOfPages }, (_, i) => (
                <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </select>
            /{context.numberOfPages}
            <ArrowDropDownIcon fontSize="small" />
          </div>
          <div className={styles.buttonsWrapper}>
            {context.previousPagePath && (
              <Link
                to={`${context.previousPagePath}`}
                className={styles.button}
              >
                <ChevronLeftIcon fontSize="small" />
              </Link>
            )}
            {context.nextPagePath && (
              <Link
                to={`${context.nextPagePath}`}
                style={{ order: 3 }}
                className={styles.button}
              >
                <ChevronRightIcon fontSize="small" />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
