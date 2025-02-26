'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { useState } from 'react'

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  service: string
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 1500px;
  margin: auto;
  background-color: #0099ff;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

const StyledInput = styled.input<{ $hasError: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.$hasError ? 'red' : 'gray')};
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${(props) => (props.$hasError ? 'red' : 'blue')};
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

const StyledError = styled.p`
  color: #ff0000;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffe6e6;
`

const StyledStar = styled.span`
  color: red;
  position: absolute;
  right: 10px;
  top: 10px;
`

const StyledSelect = styled.select<{ $hasError: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.$hasError ? 'red' : 'gray')};
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${(props) => (props.$hasError ? 'red' : 'blue')};
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

const StyledSuccess = styled.p`
  color: #008000;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #008000;
  border-radius: 5px;
  padding: 10px;
  background-color: #e6ffe6;
`

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!isVerified) {
      alert('Please complete the CAPTCHA')
      return
    }

    try {
      const query = new URLSearchParams(data as any).toString()
      const response = await fetch(`/api/add-user?${query}`, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Error submitting the form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      alert('Error submitting the form')
    }
  }

  const onCaptchaChange = async (value: string | null) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsVerified(!!value)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        <StyledInput
          $hasError={!!errors.firstName}
          {...register('firstName', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z-]+$/i,
          })}
          aria-label="First Name"
          placeholder="Enter your first name"
        />
        <StyledStar>*</StyledStar>
        {errors.firstName && <StyledError>First name is required</StyledError>}
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          $hasError={!!errors.lastName}
          {...register('lastName', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          aria-label="Last Name"
          placeholder="Enter your last name"
        />
        <StyledStar>*</StyledStar>
        {errors.lastName && <StyledError>Last name is required</StyledError>}
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          $hasError={!!errors.email}
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
          aria-label="Email"
          placeholder="Enter your email"
        />
        <StyledStar>*</StyledStar>
        {errors.email && (
          <StyledError>
            Email is required and should be a valid email address
          </StyledError>
        )}
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          $hasError={!!errors.phone}
          type="tel"
          {...register('phone', {
            validate: (value) =>
              value.length <= 12 || 'Phone number should not exceed 12 digits',
          })}
          aria-label="Phone"
          placeholder="Enter your phone number"
        />
        {errors.phone && <StyledError>{errors.phone.message}</StyledError>}
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          $hasError={!!errors.address}
          {...register('address', { required: true, maxLength: 100 })}
          aria-label="Address"
          placeholder="Enter your address"
        />
        <StyledStar>*</StyledStar>
        {errors.address && <StyledError>Address is required</StyledError>}
      </StyledLabel>

      <StyledLabel>
        <StyledSelect
          $hasError={!!errors.service}
          {...register('service', { required: true })}
          aria-label="Service"
        >
          <option value="">Select a service</option>
          <option value="Window Washing">Window Washing</option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Power Washing">Power Washing</option>
          <option value="Soft Washing">Soft Washing</option>
          <option value="Pest Control">Pest Control</option>
        </StyledSelect>
        {errors.service && <StyledError>Service is required</StyledError>}
      </StyledLabel>

      {!isVerified && !isSubmitted && (
        <ReCAPTCHA
          sitekey="6LdkNd0pAAAAAMWxpgO24V01eX1Tq6mr9T4byf9x"
          onChange={onCaptchaChange}
        />
      )}

      {isVerified && !isSubmitted && (
        <StyledInput
          type="submit"
          aria-label="Submit"
          $hasError={!!errors.service}
        />
      )}

      {isSubmitted && (
        <StyledSuccess>Form submitted successfully!</StyledSuccess>
      )}
    </StyledForm>
  )
}
