import axios from 'axios'
import React from "react"
import {useForm} from 'react-hook-form'
import styled from "styled-components"
import Grid from "../Grid/Grid"

const Section = styled.section``

const Title = styled.h1`
  margin-top: 0;
  font-size: var(--h1);

  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`
  @media (min-width: 769px) {
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
  input {
    height: 50px;
    margin-bottom: 1.25rem;

    @media (min-width: 1200px) {
      margin-bottom: 1.875rem;
    }
  }
  input,
  textarea {
    background-color: #000;
    color: var(--text-color);
    border: none;
    border-bottom: 3px solid var(--inActive);
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: border-bottom-color 0.3s;

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




const Contact = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    data['form-name'] = 'contact'
    axios.post('/', new URLSearchParams(data))
      .then(postSubmission)
      .catch(handleError)
  }

  return (
    <Section className="section-padding">
      <Grid>
        <Title>Contact.</Title>
        <SubContent>
          <SubTitle>Looking for more information?</SubTitle>
          <p>
            Aenean pulvinar ligula id elit pulvinar, sit amet semper sem semper.
            In porttitor ornare libero, eu faucibus tellus elementum sit amet.
            Sed ut arcu efficitur, auctor purus sed, venenatis velit. Etiam
            mauris metus, tempor vel convallis vitae, auctor id risus.
          </p>
          <Form name="contact" netlify onSubmit={handleSubmit(onSubmit)} >
            <label>
              <input placeholder="お名前" type="text" name="name" ref={register({ required: '必須項目です' })}/>
            </label>
            <label>
              <input placeholder="メールアドレス" type="email" name="email" ref={register({ required: '必須項目です' })}/>
            </label>
            <textarea
              placeholder="Your message"
              name="message"
              rows="5"
            ></textarea>
            <button className="btn" type="submit">
              Send Message
            </button>
          </Form>
        </SubContent>
      </Grid>
    </Section>
  )
}

export default Contact
