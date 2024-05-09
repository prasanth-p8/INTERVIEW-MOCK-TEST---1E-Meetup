import {Link} from 'react-router-dom'
import MeetingContext from '../../context/MeetingContext'

import {
  MainContainer,
  WelcomeHeading,
  PleaseRegister,
  RegisterButton,
  GreetingMessage,
  TopicName,
  MeetingImage,
} from './styledComponents'

const Home = () => (
  <MeetingContext.Consumer>
    {value => {
      const {userName, displayTopic} = value

      const displayContent =
        displayTopic === '' ? (
          <>
            <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
            <PleaseRegister>Please register for the topic</PleaseRegister>
            <Link to="/register">
              <RegisterButton>Register</RegisterButton>
            </Link>
          </>
        ) : (
          <>
            <GreetingMessage>Hello {userName}</GreetingMessage>
            <TopicName>Welcome to {displayTopic}</TopicName>
          </>
        )

      return (
        <MainContainer>
          {displayContent}
          <MeetingImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </MainContainer>
      )
    }}
  </MeetingContext.Consumer>
)

export default Home
