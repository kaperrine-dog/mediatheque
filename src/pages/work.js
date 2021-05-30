import React from "react"
import {Pagination} from "swiper"
import Grid from "/src/components/Grid/Grid"
import PageIntro from "/src/components/PageIntro/PageIntro"
import Seo from "/src/components/SEO"
import WorksList from "/src/components/Works/Works"

const works = (pageContext) => {
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
          <WorksList />
        </Grid>
      </section>
    </>
  )
}

export default works
