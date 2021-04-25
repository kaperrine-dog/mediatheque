import React from "react"
import Grid from "../components/Grid/Grid"
import PageIntro from "../components/PageIntro/PageIntro"
import Seo from "../components/SEO"
import Works from "../components/Works/Works"

const works = () => {
  return (
    <>
      <Seo title="Works" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All of my Works"
            subTitle=""
            paragraph=""
          />
          <Works />
        </Grid>
      </section>
    </>
  )
}

export default works
