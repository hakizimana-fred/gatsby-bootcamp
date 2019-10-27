import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        lorem ipsum, went there and took a knife and stabbed his wife in the
        goddamn chest, and then he later went to jail for that, he got sentenced
        although he died in the fucking prison. good bye, that's the end of the
        story.
      </p>
      <p>
        React me? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default About
