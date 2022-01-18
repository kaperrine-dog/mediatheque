//import {ErrorMessage} from '@hookform/error-message';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from "axios";
import React, {createRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useForm} from 'react-hook-form';
//import {useRecaptcha} from "react-hook-recaptcha";
import styled from "styled-components";
//import * as yup from 'yup';
//import {setLocale} from "yup";
import {BaseYup} from "../Form/BaseYup";
//import {LocaleJP} from '../Form/LocaleJP';
import Grid from "../Grid/Grid";

const containerId = "contact-recaptcha"; // this id can be customized
const sitekey = process.env.GATSBY_RECAPTCHA_SITE_KEY_VISIBLE
//const sitekey = process.env.RECAPTCHA_SITE_KEY_V2
const apiEndpoint = process.env.GATSBY_API_GATEWAY_ENDPOINT_URL


//setLocale(LocaleJP);
const Section = styled.section``

const Title = styled.h1`
  margin-top: 0;
  font-size: var(--h1);

  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 3;
  }
`

const SubContent = styled.div`
  @media (min-width: 769px) {
    grid-column: 1 / 3;
  }
  @media (min-width: 1000px) {
    grid-column: 2 / 4;
  }

  p {
    margin-bottom: 2.125rem;
  }
`

const SubTitle = styled.h2`
  @media (min-width: 769px) {
    margin-top: 0;
  }
`

const Form = styled.form`
  @media (min-width: 769px) {
    max-width: 95%;
  }    
  @media (min-width: 1000px) {
    max-width: 700px;
  }
  @media (min-width: 1200px) {
  }
  p{
    margin: 0;
    padding: 0;
    color: var(--formValidationColor);
    font-weight: bold;
    min-height:2em;
  }
  input {
    height: 50px;
    margin-bottom: 1.0rem;

    @media (min-width: 1200px) {
      margin-bottom: 1.0rem;
    }
  }
  input,
  textarea {
    background-color: var(--formBG);
    color: var(--text-color);
    border: none;
    border-bottom: 3px solid var(--inActive);
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: border-bottom-color 0.3s;
    resize: vertical;
    overflow: auto;
    &:focus {
      border-bottom-color: var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: 2.125rem;
  }
`

const StyledGoogleReCAPTCHA = styled.div`
  margin: 0 auto 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const schema = BaseYup.object().shape({
  name: BaseYup.string()
      .min(1)
      .max(255)
      .required()
      .label('お名前'),
  subject: BaseYup.string()
      .min(1)
      .max(255)
      .required()
      .label('件名'),
  email: BaseYup.string()
      .max(255)
      .email()
      .required()
      .label('メールアドレス'),
  url: BaseYup.string()
      .max(255)
      .url()
      .label('URL'),
  message: BaseYup.string()
      .max(1024)
      .required()
      .label('メッセージ'),
})

const ContactFormS3 = () => {
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    } = useForm({  
      resolver: yupResolver(schema),
      mode: 'onChange',
      options: {
        reValidateMode: 'onKeyUp',
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
      }
  })
  const [ sent, setSent ] = useState( false )
  const [ sendError, setSendError ] = useState( false )
  const [ recaptcha, setRecaptcha] = useState('')
  const [ enableSubmit, setEnableSubmit ] = useState(false)
  const [ submitClickCount, setSubmitClickCount ] = useState( 0 )
  
  const recaptchaRef = createRef();

  const handleChangeRecaptcha = (value) => {
    //if sloved recaptcha
    setEnableSubmit(true)
    setRecaptcha(value)
  }

  const handleSubmitClick = () => {
  //prevent to multiple submit
    setSubmitClickCount( submitClickCount + 1)
    setTimeout( () => {
      setSubmitClickCount(0)
    }  , 5000 )
  }

  const onSubmit = (data) => {
    handleSubmitClick()
    data['form-name'] = 'contact'
    data['g-recaptcha-response'] = recaptcha
    data['domain'] = typeof window !== `undefined` ?  window.location.host : false
    let postData = JSON.stringify(data)
    axios({
      method: "POST",
      url: apiEndpoint,
      //url: "/",
      data: postData,
    })
      .then( (response) => {
        if(typeof document !== `undefined`){
          document.contact.reset()
        }
        setSent(true)
        if(typeof window !== `undefined`){
          window.location.href = "/thanks"
        }
      })
      .catch( (axiosError) => {
        setSendError(true)
        alert(`エラーが発生しました。\nフォームを送信できませんでした。\n${axiosError}`)
        if(typeof window !== `undefined`){
          window.location.reload()
        }
      })
  }


  return (
    <Section className="section-padding">
      <Grid>
        <Title>Contact.</Title>
        <SubContent>
          <SubTitle>お問い合わせはこちらまで。</SubTitle>
          <p>
            
          </p>
          <Form 
            netlify 
            name="contact" 
            method="POST" 
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
              >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" /> 
              <noscript>
                <p>This form won’t work with Javascript disabled</p>
              </noscript>
            <label>
              <p>
                {errors.name?.message && 
                  errors.name?.message
                }
              </p>
              <input 
                placeholder="お名前" 
                name="name"
                type="text"
                label="お名前"
                autoComplete="name"
                {...register("name")}
              />
            </label>
            <label>
                <p>
                  {errors.subject?.message && 
                    errors.subject?.message
                  }
                </p>
                <input 
                  placeholder="件名" 
                  name="subject"
                  type="text"
                  label="件名"
                  autoComplete="subject"
                  {...register("subject")}
                />
            </label>
            <label>
              <p>
                {errors.email?.message && 
                  errors.email?.message
                }
              </p>
              <input 
                placeholder="メールアドレス" 
                name="email"
                label="メールアドレス"
                autoComplete="email"
                autoCorrect="off"
                autoCapitalize="off"
                {...register("email")}
              />
            </label>
            <label>
              <p>
                {errors.url?.message && 
                  errors.url?.message
                }
              </p>
              <input 
                placeholder="URL" 
                name="url"
                label="URL"
                autoComplete="url"
                autoCorrect="off"
                autoCapitalize="off"
                {...register("url")}
              />
            </label>
              <p>
                {errors.message?.message && 
                  errors.message?.message
                }
              </p>
              <textarea
                placeholder="メッセージ" 
                name="message"
                label="メッセージ"
                {...register("message")}
                rows="5"
              />
              <StyledGoogleReCAPTCHA>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={sitekey}
                  site="visible"
                  onChange={() => handleChangeRecaptcha()}
                />
              </StyledGoogleReCAPTCHA>
            <button 
              className={ 
                sendError ? ('btnSolid') 
                : sent ? ( 'btnSolid' )
                : !enableSubmit || submitClickCount !== 0 ? ('btn btnDisable')
                : ( 'btn' )
              } 
              type="submit"
              id={containerId}
              disabled={ !enableSubmit || sent || sendError || submitClickCount !== 0}
              onClick = { () => { handleSubmit(onSubmit)} }
              >
              { sendError ? (
                <p> 申し訳ございません、送信エラーです。</p>) 
                : sent ? ("送信しました。") 
                : ('Send Message')
              }
            </button>
          </Form>
        </SubContent>
      </Grid>
    </Section>
  )
}

export default ContactFormS3
