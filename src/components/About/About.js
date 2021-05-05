import React from "react"
import {Link} from "react-scroll"
import styled from "styled-components"
import Grid from "../Grid/Grid"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 769px) {
    grid-column: 2 / 3;

    p {
      margin-top: 0;
    }
  }
`
const AboutSection = styled.section`
  background: var(--parallaxBG);
`

const About = ({ largePadding, id }) => {
  return (
    <AboutSection
      id={id}
      className={largePadding ? "section-padding--large" : "section-padding"}
    >
      <Grid>
        <TitleArea>
          <Title>
            ここにタイトルが入ります。
          </Title>
          <Link className="btn" to="works" smooth={true} duration={500}>
            View Works
          </Link>
        </TitleArea>
        <ContentArea>
          <p>
            いい感じの文章ここに配置 <br/>
            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
          </p>
        </ContentArea>
      </Grid>
    </AboutSection>
  )
}

export default About
