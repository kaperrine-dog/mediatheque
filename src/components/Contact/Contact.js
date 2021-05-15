import React, {useEffect, useState} from "react";
import ContactForm from "../ContactForm/ContactForm.js";
import ContactFormS3 from "../ContactForm/ContactFormS3RGR.js";
const Contact = () => {
  
  const [ netlify, setNetlify ] = useState( false )
  useEffect(() => {
      if( typeof window !== `undefined` ){
        window.location.host.includes(`netlify.app`) ? 
        setNetlify(true) 
        : setNetlify(false)
      }
  },[])

  return (
    <>
      { netlify ?  (
        <ContactForm/>
      ) : ( 
        <ContactFormS3/>
      )}
    </>
  )
}

export default Contact