import React from "react"
import web from "../src/images/hero-img.png"
import { NavLink } from "react-router-dom"
import Commom from "./Commom"

const About = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <Commom
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  )
}

export default About
