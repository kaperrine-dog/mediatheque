//import axios from 'axios';
import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import {Helmet} from "react-helmet";
const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        author
        siteUrl
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttribute={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="referrer" content="no-referrer"/>
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image" content="400" />
      <meta property="og:image:height" content="300" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="robots" content="noindex"/>
      <script>
        {`
        const handleIE = () => {
          if(
            !(window.navigator.userAgent.toLowerCase().indexOf('MSIE') === -1 
            && window.navigator.userAgent.toLowerCase().indexOf('TRIDENT') === -1
            )){
              window.location.href = "https://www.microsoft.com/ja-JP/edge";
            }
        }
        handleIE()
        `
      }
      </script>
      <script>{
      //getIpClient()
      }
      </script>
    </Helmet>
  )
}

export default SEO
