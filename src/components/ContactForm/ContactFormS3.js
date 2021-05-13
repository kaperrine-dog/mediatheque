//Netlifyのフォームかどうかはドメインで分岐

//import {ErrorMessage} from '@hookform/error-message';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from "axios";
import React from "react";
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {useForm} from 'react-hook-form';
import styled from "styled-components";
//import * as yup from 'yup';
//import {setLocale} from "yup";
import {BaseYup} from "../Form/BaseYup";
//import {LocaleJP} from '../Form/LocaleJP';
import Grid from "../Grid/Grid";

//const containerId = "contact-recaptcha"; // this id can be customized
const sitekey = process.env.RECAPTCHA_SITE_KEY;

//setLocale(LocaleJP);
const Section = styled.section``


const googleFormAcction = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjlvCK50l_Pk096sde1e8TMbb7r9wPVJUz_mJUft76TVNNfw/formResponse'
const googleFormInputName = 'entry.1449599711'
const googleFormInputEmail = 'entry.2012648857'
const googleFormInputURL = 'entry.1838410213'
const googleFormInputContent = 'entry.2059006499'


const schema = BaseYup.object().shape({
  name: BaseYup.string()
      .min(1)
      .max(255)
      .required()
      .label('お名前'),
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


const ContactS3 = () => {
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
  const [ send, setSend ] = React.useState( false )
  const [ sendError, setSendError ] = React.useState( false )
  const [token, setToken] = React.useState('')
  
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  
  
  
  const onSubmit = (data) => {
    if (!executeRecaptcha) {
      return
    }

    data['form-name'] = 'contact'
    axios.post('/', new URLSearchParams(data))
      .then( (response) => {
        console.log(response.data)
        if(typeof document !== `undefined`){
          document.contact.reset()
        }
        setSend(true)
        if(typeof window !== `undefined`){
          window.location.href = "/"
        }
      })
      .catch( (axiosError) => {
        console.log(axiosError)
        setSendError(true)
        alert(`エラーが発生しました。\nフォームを送信できませんでした。`)
        if(typeof window !== `undefined`){
          window.location.href = "/contact/"
        }
      })
  }


  return (
    <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
      <Section className="section-padding">
        <Grid>
          <Title>Contact.</Title>
          <SubContent>
            <SubTitle>お問い合わせはこちらまでどうぞ。</SubTitle>
            <p>
              
            </p>
            <Form 
              id = "contact"
              netlify 
              onSubmit={ handleSubmit(onSubmit) }
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
                    name= "name"
                    type="name"
                    label="お名前"
                    autoComplete="name"
                    {...register("name")}
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
              <button 
                className={ 
                  sendError ? ('btnSolid') 
                  : send ? ( 'btnSolid' )
                  : ( 'btn' )
                } 

                type="submit"
                >
                { sendError ? (
                  <p> 申し訳ございません、送信エラーです。</p>) 
                  : send ? ("送信しました。") 
                  : ('Send Message')
                }
              </button>
            </Form>
          </SubContent>
        </Grid>
      </Section>
    </GoogleReCaptchaProvider>
  )
}

export default ContactS3


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