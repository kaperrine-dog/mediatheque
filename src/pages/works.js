import React from "react"
import Grid from "/src/components/Grid/Grid"
import PageIntro from "/src/components/PageIntro/PageIntro"
import Seo from "/src/components/SEO"
import Works from "/src/components/Works/Works"

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
