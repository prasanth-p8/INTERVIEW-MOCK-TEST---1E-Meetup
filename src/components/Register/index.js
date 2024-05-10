import {useState} from 'react'

import MeetingContext from '../../context/MeetingContext'

import {
  RegisterContainer,
  RegisterSubContainer,
  RegisterImage,
  RegisterForm,
  FormHeading,
  InputContainer,
  NameLabel,
  UserNameInput,
  TopicLabel,
  TopicSelect,
  TopicOption,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const Register = props => {
  const [errorMsg, setErrorMsg] = useState(false)
  const {history} = props
  return (
    <MeetingContext.Consumer>
      {value => {
        const {
          Name,
          optionList,
          meetingDetails,
          changeUserName,
          changeDisplayTopic,
          changeMeeting,
        } = value

        const changeUserValue = event => {
          changeUserName(event.target.value)
        }

        const changeTopicOption = event => {
          changeMeeting(event.target.value)
        }

        const submitUserDetails = event => {
          event.preventDefault()
          if (Name === '') {
            setErrorMsg(true)
          } else {
            changeDisplayTopic(meetingDetails)
            history.replace('/')
          }
        }

        return (
          <RegisterContainer>
            <RegisterSubContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegisterForm onSubmit={submitUserDetails}>
                <FormHeading>Let us join</FormHeading>
                <InputContainer>
                  <NameLabel htmlFor="Name">NAME</NameLabel>
                  <UserNameInput
                    type="text"
                    id="Name"
                    placeholder="Your name"
                    value={Name}
                    onChange={changeUserValue}
                  />
                </InputContainer>
                <InputContainer>
                  <TopicLabel htmlFor="topics">TOPICS</TopicLabel>
                  <TopicSelect
                    id="topics"
                    onChange={changeTopicOption}
                    value={meetingDetails}
                  >
                    {optionList.map(eachOption => (
                      <TopicOption value={eachOption.id} key={eachOption.id}>
                        {eachOption.displayText}
                      </TopicOption>
                    ))}
                  </TopicSelect>
                </InputContainer>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {errorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
              </RegisterForm>
            </RegisterSubContainer>
          </RegisterContainer>
        )
      }}
    </MeetingContext.Consumer>
  )
}
export default Register
