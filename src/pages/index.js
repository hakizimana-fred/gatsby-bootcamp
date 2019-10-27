import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Head } from "../components/head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="home" />
      <h2> I'm fred a full-stack developer based in Kampala, Uganda</h2>
      <p>
        Need a developer?
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </p>
    </Layout>
  )
}

export default IndexPage
