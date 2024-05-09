import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`
export const RegisterSubContainer = styled.div`
  display: flex;
`

export const RegisterImage = styled.img`
  width: 400px;
`
export const RegisterForm = styled.form`
  font-family: roboto;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-size: 34px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const NameLabel = styled.label`
  margin-bottom: 10px;
  color: #64748b;
  font-weight: 500;
`
export const UserNameInput = styled.input`
  padding: 10px;
  min-width: 300px;
  border: #cbd5e1 1px solid;
  border-radius: 5px;
`

export const TopicLabel = styled.label`
  color: #64748b;
  font-weight: 500;
  margin-bottom: 10px;
`
export const TopicSelect = styled.select`
  padding: 10px;
  min-width: 300px;
  border: #cbd5e1 1px solid;
  border-radius: 5px;
`

export const TopicOption = styled.option``

export const RegisterNowButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 20px 10px 20px;
  border-radius: 7px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
`
