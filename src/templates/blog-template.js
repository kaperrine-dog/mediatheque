import {graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import Accordion from "/src/components/Accordion/Accordion";
import PropTypes from "prop-types"
import React, {useState} from "react"
import {IoIosWarning} from "react-icons/io"
import styled from "styled-components"
import TagIconList from "../components/TagIconList/TagIconList.js"
import Grid from "/src/components/Grid/Grid"
import PrevNext from "/src/components/PrevNext/PrevNext.js"
import RecentPosts from "/src/components/RecentPosts/RecentPosts.js"
import SelfIntroduction from "/src/components/SelfIntroduction/SelfIntroduction.js"
import Seo from "/src/components/SEO"

const DetailArea = styled.div`
  grid-column: 1 / 1;
  .selfIntro{
    margin: 0 auto 40px;
    .selfIntroPanel{

    }
  }
  @media (min-width: 769px) {
    grid-column: 1 / 2;
    width: 200%;
  }
  @media (min-width: 1000px) {
    margin: var(--marginBorder) 0;
    width: 100%;
    grid-column: 3 / 4;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 3 / 4;
  }
`


const StyledTitle = styled.div`
  grid-column: 1 / 1;
  margin: 0;
  padding: 0 10px 0;
  @media (min-width: 769px) {
    grid-column: 1 / 1;
    width: 200%;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  h1 {
    margin-top: 0;
  }
  h2 {
    margin-top: 0;
  }
  p {
    margin-bottom: 40px;
  }
`

const StyledTags = styled.div`
  grid-column: 1 / 1;
  margin: 0;
  @media (min-width: 769px) {
    grid-column: 1 / 1;
    width: 200%;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 1;
  margin: var(--marginBorder) 0;
  @media (min-width: 769px) {
    grid-column: 1 / 1;
    width: 200%;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  p {
    margin-bottom: 40px;
  }
`

const StyledBlogImage = styled.div`
  width: 100%;
  margin:0 0 var(--marginBorder);
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  box-shadow:  -10px 10px 20px var(--neumorphismShadow),
                10px -10px 20px var(--neumorphizmLight);
  padding: 20px 15px 20px;
  @media (min-width: 769px){
    padding: 40px;
  }
  .main-image {
    max-height: 300px;
    //aspect-ratio: 16 / 9;
/*     border-bottom: 3px solid var(--primary);
    border-left: 1px solid var(--primary);
    border-right: 2px solid var(--primary);
    border-top: 1px solid var(--primary); */
    border-radius: var(--itemCardBorderRadius);
    img{
    }
  }
`

const StyledPublishedDate = styled.div`
  p{
    margin: 1em 0;
  }
  .noticeAlert{
    width: 100%;
    background-color: #fff3cd;
    color: #856404;
    margin: 1em 0;
    padding: 0.75em;
  }
`


const Blog = ({ data, pageContext }) => {
  const {
    title,
    introduction,
    published,
    updatedAt,
    images,
    content,
    tags,
  } = data.post

  const [mainImage, ...blogImages] = images
  const contentHtml = content.childMarkdownRemark.html


  
  const timeCalc = ( published ) => {
    let dateNow = new Date()
    //ms * s * min * hour
    const A_DAY_UNIXTIME = 1000 * 60 * 60 * 24
    //const A_YEAR_UNIXTIME = A_DAY_UNIXTIME * 365
    let publishedDate = new Date(published)
    let daysPublishedTillNow = (dateNow.getTime() - publishedDate.getTime()) / A_DAY_UNIXTIME
    let yearsPublishedTillNow = Math.floor( daysPublishedTillNow / 365 )
    return (yearsPublishedTillNow);
  };

  const [ timePasssed, setTimePassed ] = useState(
    () => {
      let publishedYearsTill = timeCalc(updatedAt);
      return (( publishedYearsTill ) >= 1.0 ) ? 
      true : false
    }
  ) 
  const lastUpdate = timeCalc(updatedAt)
  const lastPublishedTillNow = timeCalc(published)

  return (
    <>
      <Seo title={title} />
      {/* <BlogHeader/> */}
      <section className="section-padding">
        <Grid>
          <StyledTitle>
              <h1>{title}</h1>
              <h2 
                className='contentIntroduction'
                >
                {introduction}
              </h2>
              <StyledPublishedDate>
                { updatedAt ? (
                  <>
                    <p>
                      この記事は{updatedAt}に更新されました。
                    </p>
                    { timePasssed && (
                      <p className="noticeAlert">
                        <IoIosWarning/>&nbsp;{`この記事は最終更新から${lastUpdate}年以上が経過しています。`}
                      </p>
                    )}
                  </>
                ): 
                <>
                  <p>この記事は{published}に公開されました。</p>
                  { timePasssed && (
                      <p className="noticeAlert">
                        <IoIosWarning/>&nbsp;{`この記事は公開から${lastPublishedTillNow}年以上が経過しています。`}
                      </p>
                    )}
                </>
                }
              </StyledPublishedDate>
          </StyledTitle>
          <StyledTags>
            <TagIconList
              tags = {tags}
            />
          </StyledTags>
        </Grid>
        <Grid>
          <ContentArea>
            <StyledBlogImage>
              <GatsbyImage
                image={mainImage.gatsbyImageData}
                className="main-image "
                alt="Placeholder" />
            </StyledBlogImage>
            <article
              className = "contentArticle"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <PrevNext
              prev = {pageContext.prev}
              next = {pageContext.next}
            />
          </ContentArea>
          <DetailArea>
            <div className = "selfIntro">
              <SelfIntroduction
                className = "selfIntroPanel"/>
            </div>
            <RecentPosts/>
            <AniLink 
              className="btn" 
              cover 
              bg="var(--background)" 
              to="/blogs">
              Back to Blog Index
            </AniLink>
          </DetailArea>
        </Grid>

      </section>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      introduction
      published(formatString: "Y-MM-DD")
      updatedAt(formatString: "Y-MM-DD")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
        )
      }
      tags{
        title
        slug
        image{
          file{
            url
            fileName
          }
        }
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }

    }
  }
`



Blog.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      introduction: PropTypes.string.isRequired,
      published: PropTypes.instanceOf(Date).isRequired,
      images: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
      ]),
      content: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired,
        })
      })
    }
    ),
  }),
}


export default Blog
