import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <Testimonials />
    <Stats />
  </Layout>
)

export default About

