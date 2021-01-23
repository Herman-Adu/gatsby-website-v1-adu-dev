import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <h1>Trips</h1>
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage
