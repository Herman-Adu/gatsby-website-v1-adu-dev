import React, { useState } from "react"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // this function and isOpen are placed here so it can service Dropdown and Navbar components
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
