import React from "react"
import {css} from "@emotion/core"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  
  <Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
  
  </Layout>
)

export default IndexPage
