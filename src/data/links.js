import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const data = [
    {
        id: 1,
        title: "About", 
        url: "/about" 
    },
    {
        id: 2,
        title: "Trips", 
        url: "/trips"
    },
    {
        id:3,
        title: "Careers", 
        url: "/careers"
    },
    {
        id: 4,
        title: "Contact", 
        url: "/contact" 
    }
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <NavLink className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </NavLink>
  )
}





const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration:n none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px
`