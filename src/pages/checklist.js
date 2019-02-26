import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"

import Sidebar from "../components/Sidebar"
import Master from "../components/Master"

const ChecklistPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Sidebar />
      <Master />
  </Layout>
)

export default ChecklistPage
